import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Submission } from "@/types/firestore";

export const submissionService = {
  async createSubmission(
    userId: string,
    taskId: string,
    internshipId: string,
    text: string,
    files: File[]
  ): Promise<string> {
    const fileUrls: string[] = [];

    for (const file of files) {
      const storageRef = ref(storage, `submissions/${userId}/${taskId}/${file.name}`);
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      fileUrls.push(downloadUrl);
    }

    const docRef = doc(collection(db, "submissions"));
    const submission: Omit<Submission, "id"> = {
      taskId,
      userId,
      internshipId,
      text,
      fileUrls,
      submittedAt: Timestamp.now(),
      status: "pending",
    };

    await setDoc(docRef, submission);
    return docRef.id;
  },

  async getSubmissionsByUser(userId: string): Promise<Submission[]> {
    const q = query(
      collection(db, "submissions"),
      where("userId", "==", userId),
      orderBy("submittedAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Submission));
  },

  async getSubmissionsByTask(taskId: string): Promise<Submission[]> {
    const q = query(
      collection(db, "submissions"),
      where("taskId", "==", taskId),
      orderBy("submittedAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Submission));
  },

  async getSubmissionByUserAndTask(userId: string, taskId: string): Promise<Submission | null> {
    const q = query(
      collection(db, "submissions"),
      where("userId", "==", userId),
      where("taskId", "==", taskId)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) return null;
    const docSnap = querySnapshot.docs[0];
    return { id: docSnap.id, ...docSnap.data() } as Submission;
  },

  async gradeSubmission(submissionId: string, mark: number, feedback: string): Promise<void> {
    await updateDoc(doc(db, "submissions", submissionId), {
      mark,
      feedback,
      status: "graded",
    });
  },

  async getAllPendingSubmissions(): Promise<Submission[]> {
    const q = query(
      collection(db, "submissions"),
      where("status", "==", "pending"),
      orderBy("submittedAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() } as Submission));
  },
};
