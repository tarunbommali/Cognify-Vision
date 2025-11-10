import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Internship, Batch, Task } from "@/types/firestore";

export const internshipService = {
  async getAllInternships(): Promise<Internship[]> {
    const querySnapshot = await getDocs(
      query(collection(db, "internships"), orderBy("createdAt", "desc"))
    );
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Internship));
  },

  async getInternshipById(id: string): Promise<Internship | null> {
    const docSnap = await getDoc(doc(db, "internships", id));
    if (!docSnap.exists()) return null;
    return { id: docSnap.id, ...docSnap.data() } as Internship;
  },

  async getInternshipsByDomain(domain: string): Promise<Internship[]> {
    const q = query(collection(db, "internships"), where("domain", "==", domain));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Internship));
  },

  async createInternship(internship: Omit<Internship, "id" | "createdAt" | "updatedAt">): Promise<string> {
    const docRef = doc(collection(db, "internships"));
    await setDoc(docRef, {
      ...internship,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  },

  async updateInternship(id: string, updates: Partial<Internship>): Promise<void> {
    await updateDoc(doc(db, "internships", id), {
      ...updates,
      updatedAt: Timestamp.now(),
    });
  },

  async deleteInternship(id: string): Promise<void> {
    await deleteDoc(doc(db, "internships", id));
  },

  async getBatchesByInternship(internshipId: string): Promise<Batch[]> {
    const q = query(
      collection(db, "batches"),
      where("internshipId", "==", internshipId),
      orderBy("startDate", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Batch));
  },

  async createBatch(batch: Omit<Batch, "id" | "createdAt">): Promise<string> {
    const docRef = doc(collection(db, "batches"));
    await setDoc(docRef, {
      ...batch,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  },

  async getTasksByInternship(internshipId: string): Promise<Task[]> {
    const q = query(
      collection(db, "tasks"),
      where("internshipId", "==", internshipId),
      orderBy("week", "asc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Task));
  },

  async createTask(task: Omit<Task, "id" | "createdAt">): Promise<string> {
    const docRef = doc(collection(db, "tasks"));
    await setDoc(docRef, {
      ...task,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  },
};
