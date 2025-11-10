import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import StatsCard from "@/components/StatsCard";
import TaskCard from "@/components/TaskCard";
import ProgressBar from "@/components/ProgressBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, CheckCircle, Clock, Award, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const stats = [
    {
      title: "Active Internship",
      value: "1",
      description: "Full-Stack Web Dev",
      icon: BookOpen,
    },
    {
      title: "Progress",
      value: "75%",
      description: "Week 9 of 12",
      icon: CheckCircle,
      trend: { value: 15, direction: "up" as const },
    },
    {
      title: "Pending Tasks",
      value: "3",
      description: "Due this week",
      icon: Clock,
    },
    {
      title: "Achievements",
      value: "12",
      description: "Badges earned",
      icon: Award,
    },
  ];

  const tasks = [
    {
      id: "task-1",
      title: "Build a React Dashboard Component",
      description: "Create a reusable dashboard widget using React hooks and TypeScript with proper state management.",
      dueDate: "Dec 28, 2025",
      status: "pending" as const,
      maxMarks: 100,
    },
    {
      id: "task-2",
      title: "API Integration Project",
      description: "Build a REST API client with error handling and authentication.",
      dueDate: "Dec 31, 2025",
      status: "pending" as const,
      maxMarks: 150,
    },
    {
      id: "task-3",
      title: "Database Design Assignment",
      description: "Design a normalized database schema for an e-commerce platform.",
      dueDate: "Dec 25, 2025",
      status: "submitted" as const,
      maxMarks: 100,
      submissionDate: "Dec 24, 2025",
    },
    {
      id: "task-4",
      title: "Authentication System",
      description: "Implement JWT-based authentication with password hashing.",
      dueDate: "Dec 20, 2025",
      status: "graded" as const,
      maxMarks: 120,
      earnedMarks: 108,
      submissionDate: "Dec 19, 2025",
    },
  ];

  const upcomingDeadlines = [
    { title: "React Dashboard Component", date: "Dec 28", urgent: false },
    { title: "API Integration Project", date: "Dec 31", urgent: false },
    { title: "Final Project Presentation", date: "Jan 5", urgent: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader isAuthenticated={true} userRole="intern" userName="John Doe" onLogout={() => console.log('Logout')} />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div>
            <h1 className="font-display text-3xl font-bold mb-2" data-testid="text-page-title">
              My Dashboard
            </h1>
            <p className="text-muted-foreground" data-testid="text-page-subtitle">
              Welcome back! Here's your learning progress
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Internship Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Full-Stack Web Development</span>
                      <Badge>Week 9/12</Badge>
                    </div>
                    <ProgressBar value={75} showPercentage={true} size="lg" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground mb-1">Completed Modules</p>
                      <p className="font-semibold" data-testid="text-completed-modules">9 of 12</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Submitted Tasks</p>
                      <p className="font-semibold" data-testid="text-submitted-tasks">15 of 18</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Average Score</p>
                      <p className="font-semibold" data-testid="text-average-score">87%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Time Remaining</p>
                      <p className="font-semibold" data-testid="text-time-remaining">3 weeks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h2 className="text-2xl font-bold mb-4" data-testid="text-tasks-title">My Tasks</h2>
                <div className="grid gap-4">
                  {tasks.map((task) => (
                    <TaskCard key={task.id} {...task} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between gap-2 pb-4 last:pb-0 border-b last:border-0"
                        data-testid={`deadline-${index}`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate" data-testid={`text-deadline-title-${index}`}>
                            {deadline.title}
                          </p>
                          <p className="text-xs text-muted-foreground" data-testid={`text-deadline-date-${index}`}>
                            {deadline.date}
                          </p>
                        </div>
                        {deadline.urgent && (
                          <Badge variant="destructive" className="text-xs">Urgent</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">API Master</p>
                        <p className="text-xs text-muted-foreground">Completed 10 API tasks</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Quick Learner</p>
                        <p className="text-xs text-muted-foreground">Finished module early</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
