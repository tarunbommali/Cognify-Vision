import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MapPin, Calendar, Award, Download, Edit } from "lucide-react";

export default function Profile() {
  const domains = ["Web Development", "Cloud Computing", "Data Science"];
  
  const achievements = [
    { title: "Fast Learner", description: "Completed module ahead of schedule", date: "Dec 2025" },
    { title: "Perfect Score", description: "Scored 100% on authentication project", date: "Nov 2025" },
    { title: "Team Player", description: "Helped 5 peers with code reviews", date: "Nov 2025" },
    { title: "API Master", description: "Completed 10 API integration tasks", date: "Oct 2025" },
  ];

  const certificates = [
    { title: "Full-Stack Web Development", issueDate: "Jan 2026", status: "In Progress" },
    { title: "React Fundamentals", issueDate: "Sep 2025", status: "Completed" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader isAuthenticated={true} userRole="intern" userName="John Doe" onLogout={() => console.log('Logout')} />

      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <Card>
            <CardHeader className="gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h1 className="font-display text-3xl font-bold" data-testid="text-user-name">John Doe</h1>
                      <Badge className="mt-2" data-testid="badge-user-role">Intern</Badge>
                    </div>
                    <Button variant="outline" data-testid="button-edit-profile">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span data-testid="text-user-email">john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span data-testid="text-user-location">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span data-testid="text-user-joined">Joined Aug 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview" data-testid="tab-overview">Overview</TabsTrigger>
              <TabsTrigger value="domains" data-testid="tab-domains">Domains</TabsTrigger>
              <TabsTrigger value="achievements" data-testid="tab-achievements">Achievements</TabsTrigger>
              <TabsTrigger value="certificates" data-testid="tab-certificates">Certificates</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground" data-testid="text-bio">
                    Passionate software developer with a keen interest in full-stack web development. 
                    Currently learning React, Node.js, and cloud technologies. Excited about building 
                    scalable applications and contributing to open-source projects.
                  </p>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold" data-testid="text-stat-internships">2</p>
                      <p className="text-sm text-muted-foreground">Internships</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold" data-testid="text-stat-tasks">28</p>
                      <p className="text-sm text-muted-foreground">Tasks Completed</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold" data-testid="text-stat-achievements">12</p>
                      <p className="text-sm text-muted-foreground">Achievements</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="domains" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Domains of Interest</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {domains.map((domain, index) => (
                      <Badge key={index} variant="secondary" className="text-sm" data-testid={`badge-domain-${index}`}>
                        {domain}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Earned Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 rounded-lg border"
                        data-testid={`achievement-${index}`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <Award className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold" data-testid={`text-achievement-title-${index}`}>
                            {achievement.title}
                          </p>
                          <p className="text-sm text-muted-foreground" data-testid={`text-achievement-description-${index}`}>
                            {achievement.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1" data-testid={`text-achievement-date-${index}`}>
                            {achievement.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Certificates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {certificates.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-4 p-4 rounded-lg border"
                        data-testid={`certificate-${index}`}
                      >
                        <div className="flex-1">
                          <p className="font-semibold" data-testid={`text-cert-title-${index}`}>
                            {cert.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Issue Date: <span data-testid={`text-cert-date-${index}`}>{cert.issueDate}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={cert.status === "Completed" ? "default" : "secondary"} data-testid={`badge-cert-status-${index}`}>
                            {cert.status}
                          </Badge>
                          {cert.status === "Completed" && (
                            <Button variant="outline" size="sm" data-testid={`button-download-${index}`}>
                              <Download className="mr-2 h-4 w-4" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
