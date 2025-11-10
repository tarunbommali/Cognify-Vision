import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export interface DomainCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  internshipCount: number;
  duration?: string;
  enrolledCount?: number;
  featured?: boolean;
}

export default function DomainCard({
  id,
  title,
  description,
  icon,
  internshipCount,
  duration,
  enrolledCount,
  featured = false,
}: DomainCardProps) {
  return (
    <Card className="hover-elevate transition-all h-full flex flex-col" data-testid={`card-domain-${id}`}>
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          {featured && (
            <Badge variant="default" data-testid="badge-featured">Featured</Badge>
          )}
        </div>
        <CardTitle className="text-xl" data-testid={`text-domain-title-${id}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4" data-testid={`text-domain-description-${id}`}>
          {description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-foreground" data-testid={`text-internship-count-${id}`}>{internshipCount}</span> 
            <span>Internships</span>
          </div>
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span data-testid={`text-duration-${id}`}>{duration}</span>
            </div>
          )}
          {enrolledCount !== undefined && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span data-testid={`text-enrolled-count-${id}`}>{enrolledCount}+ enrolled</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/domains?filter=${id}`} className="w-full">
          <Button variant="outline" className="w-full group" data-testid={`button-explore-${id}`}>
            Explore
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
