import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import StatsCard from "@/components/StatsCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, FileCheck, TrendingUp, Plus, Edit, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Admin() {
  const stats = [
    {
      title: "Total Users",
      value: "2,547",
      description: "Active participants",
      icon: Users,
      trend: { value: 12, direction: "up" as const },
    },
    {
      title: "Active Internships",
      value: "28",
      description: "Running programs",
      icon: BookOpen,
      trend: { value: 8, direction: "up" as const },
    },
    {
      title: "Pending Submissions",
      value: "156",
      description: "Awaiting review",
      icon: FileCheck,
    },
    {
      title: "Completion Rate",
      value: "87%",
      description: "Overall success",
      icon: TrendingUp,
      trend: { value: 5, direction: "up" as const },
    },
  ];

  const recentInternships = [
    { id: 1, title: "Full-Stack Web Development", domain: "Web Dev", students: 45, status: "Active" },
    { id: 2, title: "Machine Learning Fundamentals", domain: "AI/ML", students: 32, status: "Active" },
    { id: 3, title: "Cloud Solutions Architect", domain: "Cloud", students: 28, status: "Filling Fast" },
    { id: 4, title: "Data Science & Analytics", domain: "Data", students: 39, status: "Active" },
  ];

  const recentSubmissions = [
    { student: "Alice Johnson", task: "React Dashboard", submitted: "2 hours ago", status: "pending" },
    { student: "Bob Smith", task: "API Integration", submitted: "5 hours ago", status: "pending" },
    { student: "Carol White", task: "Database Design", submitted: "1 day ago", status: "graded" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader isAuthenticated={true} userRole="admin" userName="Admin User" onLogout={() => console.log('Logout')} />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="font-display text-3xl font-bold mb-2" data-testid="text-page-title">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground" data-testid="text-page-subtitle">
                Manage internships, students, and track overall performance
              </p>
            </div>
            <Button data-testid="button-create-internship">
              <Plus className="mr-2 h-4 w-4" />
              Create Internship
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Active Internships</CardTitle>
                <Button variant="outline" size="sm" data-testid="button-view-all-internships">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInternships.map((internship) => (
                    <div
                      key={internship.id}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border hover-elevate"
                      data-testid={`internship-${internship.id}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate" data-testid={`text-internship-title-${internship.id}`}>
                          {internship.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {internship.domain} • {internship.students} students
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={internship.status === "Filling Fast" ? "default" : "secondary"}>
                          {internship.status}
                        </Badge>
                        <Button variant="ghost" size="icon" data-testid={`button-edit-${internship.id}`}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" data-testid={`button-delete-${internship.id}`}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Submissions</CardTitle>
                <Button variant="outline" size="sm" data-testid="button-view-all-submissions">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSubmissions.map((submission, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between gap-4 p-4 rounded-lg border hover-elevate"
                      data-testid={`submission-${index}`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate" data-testid={`text-student-${index}`}>
                          {submission.student}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {submission.task}
                        </p>
                        <p className="text-xs text-muted-foreground" data-testid={`text-submitted-${index}`}>
                          {submission.submitted}
                        </p>
                      </div>
                      <Badge variant={submission.status === "pending" ? "outline" : "default"} data-testid={`badge-status-${index}`}>
                        {submission.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="button-manage-domains">
                  <BookOpen className="h-6 w-6" />
                  <span>Manage Domains</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="button-create-batch">
                  <Users className="h-6 w-6" />
                  <span>Create Batch</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="button-review-submissions">
                  <FileCheck className="h-6 w-6" />
                  <span>Review Submissions</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2" data-testid="button-analytics">
                  <TrendingUp className="h-6 w-6" />
                  <span>View Analytics</span>
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
