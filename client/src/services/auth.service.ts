import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { UserProfile } from "@/types/firestore";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const authService = {
  async signUp(email: string, password: string, displayName: string, role: "intern" | "admin") {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userProfile: UserProfile = {
      uid: user.uid,
      displayName,
      email: user.email!,
      role,
      domains: [],
      createdAt: Timestamp.now(),
    };

    await setDoc(doc(db, "users", user.uid), userProfile);

    return { user, userProfile };
  },

  async signIn(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const profileDoc = await getDoc(doc(db, "users", user.uid));
    const userProfile = profileDoc.data() as UserProfile;

    return { user, userProfile };
  },

  async signInWithGoogle(role: "intern" | "admin" = "intern") {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    if (!user.email) {
      throw new Error("Google account does not have an email address associated with it.");
    }

    const userDocRef = doc(db, "users", user.uid);
    const profileDoc = await getDoc(userDocRef);

    if (profileDoc.exists()) {
      const existingProfile = profileDoc.data() as UserProfile;
      const updates: Partial<UserProfile> = {};

      if (user.photoURL && existingProfile.photoURL !== user.photoURL) {
        updates.photoURL = user.photoURL;
      }

      if (user.displayName && existingProfile.displayName !== user.displayName) {
        updates.displayName = user.displayName;
      }

      if (Object.keys(updates).length > 0) {
        await setDoc(userDocRef, updates, { merge: true });
      }

      return { user, userProfile: { ...existingProfile, ...updates } };
    }

    const userProfile: UserProfile = {
      uid: user.uid,
      displayName: user.displayName ?? user.email.split("@")[0],
      email: user.email,
      role,
      domains: [],
      createdAt: Timestamp.now(),
      photoURL: user.photoURL ?? undefined,
    };

    await setDoc(userDocRef, userProfile);

    return { user, userProfile };
  },

  async signOut() {
    await firebaseSignOut(auth);
  },

  async getUserProfile(uid: string): Promise<UserProfile | null> {
    const profileDoc = await getDoc(doc(db, "users", uid));
    if (!profileDoc.exists()) return null;
    return profileDoc.data() as UserProfile;
  },

  async updateUserProfile(uid: string, updates: Partial<UserProfile>) {
    await setDoc(doc(db, "users", uid), updates, { merge: true });
  },

  onAuthStateChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },
};
