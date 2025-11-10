import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Award } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function TaskSubmission() {
  const [textSubmission, setTextSubmission] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = () => {
    console.log('Submitting task:', { textSubmission, files });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader isAuthenticated={true} userRole="intern" userName="John Doe" onLogout={() => console.log('Logout')} />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-6">
          <div>
            <Link href="/dashboard">
              <Button variant="ghost" className="mb-4" data-testid="button-back">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>

            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex-1">
                <h1 className="font-display text-3xl font-bold mb-2" data-testid="text-task-title">
                  Build a React Dashboard Component
                </h1>
                <p className="text-muted-foreground" data-testid="text-task-description">
                  Create a reusable dashboard widget using React hooks and TypeScript with proper state management.
                </p>
              </div>
              <Badge variant="outline" data-testid="badge-status">Pending</Badge>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Due: <span className="font-medium text-foreground" data-testid="text-due-date">Dec 28, 2025</span></span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="h-4 w-4" />
                <span>Max Marks: <span className="font-medium text-foreground" data-testid="text-max-marks">100</span></span>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Task Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm list-disc list-inside text-muted-foreground">
                <li>Component must use React hooks (useState, useEffect)</li>
                <li>Implement proper TypeScript types and interfaces</li>
                <li>Include at least 3 interactive widgets (charts, stats, etc.)</li>
                <li>Responsive design that works on mobile and desktop</li>
                <li>Clean, well-documented code with comments</li>
                <li>Submit both source code and a demo video</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Your Work</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="submission-text">Submission Notes</Label>
                <Textarea
                  id="submission-text"
                  placeholder="Add any notes or comments about your submission..."
                  value={textSubmission}
                  onChange={(e) => setTextSubmission(e.target.value)}
                  rows={6}
                  data-testid="textarea-submission"
                />
                <p className="text-xs text-muted-foreground">
                  Explain your approach, challenges faced, and any additional features you implemented.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Upload Files</Label>
                <FileUploader
                  onFilesSelected={setFiles}
                  maxFiles={5}
                  acceptedFileTypes=".zip,.pdf,.mp4,.mov"
                  maxSizeMB={50}
                />
                <p className="text-xs text-muted-foreground">
                  Upload your source code (ZIP), documentation (PDF), and demo video (MP4/MOV)
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  className="flex-1"
                  onClick={handleSubmit}
                  disabled={!textSubmission && files.length === 0}
                  data-testid="button-submit-task"
                >
                  Submit Task
                </Button>
                <Button variant="outline" className="flex-1" data-testid="button-save-draft">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
