import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Users, Award } from "lucide-react";
import { Link } from "wouter";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface InternshipCardProps {
  id: string;
  title: string;
  domain: string;
  description: string;
  duration: string;
  instructor: {
    name: string;
    avatar?: string;
  };
  batchesAvailable: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  enrolledCount?: number;
  status?: "Open" | "Filling Fast" | "Closed";
}

export default function InternshipCard({
  id,
  title,
  domain,
  description,
  duration,
  instructor,
  batchesAvailable,
  difficulty,
  enrolledCount,
  status = "Open",
}: InternshipCardProps) {
  const statusVariant = status === "Filling Fast" ? "default" : status === "Closed" ? "secondary" : "outline";

  return (
    <Card className="hover-elevate transition-all h-full flex flex-col" data-testid={`card-internship-${id}`}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <Badge variant="secondary" data-testid={`badge-domain-${id}`}>{domain}</Badge>
          <Badge variant={statusVariant} data-testid={`badge-status-${id}`}>{status}</Badge>
        </div>
        <CardTitle className="text-xl" data-testid={`text-title-${id}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <p className="text-sm text-muted-foreground" data-testid={`text-description-${id}`}>
          {description}
        </p>

        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium" data-testid={`text-instructor-${id}`}>{instructor.name}</p>
            <p className="text-xs text-muted-foreground">Instructor</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span data-testid={`text-duration-${id}`}>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span data-testid={`text-batches-${id}`}>{batchesAvailable} batches</span>
          </div>
          {difficulty && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="h-4 w-4" />
              <span data-testid={`text-difficulty-${id}`}>{difficulty}</span>
            </div>
          )}
          {enrolledCount !== undefined && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span data-testid={`text-enrolled-${id}`}>{enrolledCount}+ enrolled</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Link href={`/internship/${id}`} className="flex-1">
          <Button variant="outline" className="w-full" data-testid={`button-view-details-${id}`}>
            View Details
          </Button>
        </Link>
        <Button className="flex-1" disabled={status === "Closed"} data-testid={`button-apply-${id}`}>
          {status === "Closed" ? "Closed" : "Apply Now"}
        </Button>
      </CardFooter>
    </Card>
  );
}
