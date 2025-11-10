import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, FileText, CheckCircle2, Clock } from "lucide-react";
import { Link } from "wouter";

export interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "submitted" | "graded";
  maxMarks?: number;
  earnedMarks?: number;
  submissionDate?: string;
}

export default function TaskCard({
  id,
  title,
  description,
  dueDate,
  status,
  maxMarks,
  earnedMarks,
  submissionDate,
}: TaskCardProps) {
  const statusConfig = {
    pending: { label: "Pending", variant: "outline" as const, icon: Clock },
    submitted: { label: "Submitted", variant: "secondary" as const, icon: FileText },
    graded: { label: "Graded", variant: "default" as const, icon: CheckCircle2 },
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <Card className="hover-elevate" data-testid={`card-task-${id}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant={config.variant} className="gap-1" data-testid={`badge-status-${id}`}>
            <StatusIcon className="h-3 w-3" />
            {config.label}
          </Badge>
          {status === "graded" && earnedMarks !== undefined && maxMarks && (
            <Badge variant="outline" data-testid={`badge-marks-${id}`}>
              {earnedMarks}/{maxMarks}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg" data-testid={`text-title-${id}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground" data-testid={`text-description-${id}`}>
          {description}
        </p>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Due: <span data-testid={`text-due-date-${id}`}>{dueDate}</span></span>
          </div>
          {submissionDate && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>Submitted: <span data-testid={`text-submission-date-${id}`}>{submissionDate}</span></span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        {status === "pending" ? (
          <Link href={`/task/${id}`} className="w-full">
            <Button className="w-full" data-testid={`button-submit-${id}`}>Submit Task</Button>
          </Link>
        ) : (
          <Link href={`/task/${id}`} className="w-full">
            <Button variant="outline" className="w-full" data-testid={`button-view-submission-${id}`}>
              View Submission
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
