import { Timestamp } from "firebase/firestore";

export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  role: "intern" | "admin";
  domains: string[];
  createdAt: Timestamp;
  photoURL?: string;
  location?: string;
  bio?: string;
}

export interface Internship {
  id: string;
  title: string;
  domain: string;
  description: string;
  duration: string;
  instructor: {
    name: string;
    avatar?: string;
  };
  curriculum: CurriculumModule[];
  tools: string[];
  resources?: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  status: "Open" | "Filling Fast" | "Closed";
  enrolledCount: number;
  batchIds: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CurriculumModule {
  week: number;
  module: string;
  tasks: string[];
  description?: string;
}

export interface Batch {
  id: string;
  internshipId: string;
  startDate: Timestamp;
  endDate?: Timestamp;
  userIds: string[];
  status: "Scheduled" | "Active" | "Completed";
  maxCapacity: number;
  createdAt: Timestamp;
}

export interface Task {
  id: string;
  internshipId: string;
  batchId?: string;
  title: string;
  description: string;
  dueDate: Timestamp;
  maxMarks: number;
  week: number;
  createdAt: Timestamp;
}

export interface Submission {
  id: string;
  taskId: string;
  userId: string;
  internshipId: string;
  text: string;
  fileUrls: string[];
  submittedAt: Timestamp;
  mark?: number;
  feedback?: string;
  status: "pending" | "graded";
}

export interface Enrollment {
  id: string;
  userId: string;
  internshipId: string;
  batchId: string;
  enrolledAt: Timestamp;
  progress: number;
  completedTasks: string[];
  status: "active" | "completed" | "dropped";
}

export interface Achievement {
  id: string;
  userId: string;
  title: string;
  description: string;
  earnedAt: Timestamp;
  icon: string;
}

export interface Certificate {
  id: string;
  userId: string;
  internshipId: string;
  issuedAt: Timestamp;
  fileUrl?: string;
  verificationCode: string;
}
