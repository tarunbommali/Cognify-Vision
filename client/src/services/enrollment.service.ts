import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Enrollment } from "@/types/firestore";

export const enrollmentService = {
  async enrollUser(userId: string, internshipId: string, batchId: string): Promise<string> {
    const docRef = doc(collection(db, "enrollments"));
    const enrollment: Omit<Enrollment, "id"> = {
      userId,
      internshipId,
      batchId,
      enrolledAt: Timestamp.now(),
      progress: 0,
      completedTasks: [],
      status: "active",
    };
    
    await setDoc(docRef, enrollment);

    const batchRef = doc(db, "batches", batchId);
    const batchDoc = await getDoc(batchRef);
    if (batchDoc.exists()) {
      const currentUsers = batchDoc.data().userIds || [];
      await updateDoc(batchRef, {
        userIds: [...currentUsers, userId],
      });
    }

    const internshipRef = doc(db, "internships", internshipId);
    const internshipDoc = await getDoc(internshipRef);
    if (internshipDoc.exists()) {
      const currentCount = internshipDoc.data().enrolledCount || 0;
      await updateDoc(internshipRef, {
        enrolledCount: currentCount + 1,
      });
    }

    return docRef.id;
  },

  async getUserEnrollments(userId: string): Promise<Enrollment[]> {
    const q = query(collection(db, "enrollments"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Enrollment));
  },

  async getEnrollmentByUserAndInternship(userId: string, internshipId: string): Promise<Enrollment | null> {
    const q = query(
      collection(db, "enrollments"),
      where("userId", "==", userId),
      where("internshipId", "==", internshipId)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;
    const docSnap = querySnapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() } as Enrollment;
  },

  async updateEnrollmentProgress(enrollmentId: string, progress: number, completedTasks: string[]): Promise<void> {
    await updateDoc(doc(db, "enrollments", enrollmentId), {
      progress,
      completedTasks,
    });
  },

  async completeEnrollment(enrollmentId: string): Promise<void> {
    await updateDoc(doc(db, "enrollments", enrollmentId), {
      status: "completed",
      progress: 100,
    });
  },
};
