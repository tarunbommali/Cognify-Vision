import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  ArrowRight,
  Code,
  Brain,
  Cloud,
  Database,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";
import DomainCard from "@/components/DomainCard";

export default function Landing() {
  const domains = [
    {
      id: "web-dev",
      title: "Web Development",
      description:
        "Master modern web technologies including React, Node.js, and full-stack development.",
      icon: <Code className="h-6 w-6" />,
      internshipCount: 12,
      duration: "8-12 weeks",
      enrolledCount: 1200,
      featured: true,
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description:
        "Dive into artificial intelligence, machine learning algorithms, and neural networks.",
      icon: <Brain className="h-6 w-6" />,
      internshipCount: 8,
      duration: "10-14 weeks",
      enrolledCount: 850,
      featured: true,
    },
    {
      id: "cloud",
      title: "Cloud Computing",
      description:
        "Learn AWS, Azure, and GCP. Master cloud architecture and deployment strategies.",
      icon: <Cloud className="h-6 w-6" />,
      internshipCount: 6,
      duration: "8-10 weeks",
      enrolledCount: 600,
    },
  ];

  const stats = [
    { value: "2,500+", label: "Active Interns" },
    { value: "50+", label: "Expert Instructors" },
    { value: "95%", label: "Success Rate" },
    { value: "100+", label: "Partner Companies" },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Recognition",
      description:
        "Earn certificates recognized by top tech companies worldwide.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentorship",
      description:
        "Learn from industry professionals with years of real-world experience.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Career Growth",
      description: "Build your portfolio and connect with hiring partners.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <section className="relative py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                  data-testid="text-hero-title"
                >
                  Launch Your Tech Career with 
                  <span className="text-primary"> Real-World Internships</span>
                </h1>

                <p
                  className="text-lg text-muted-foreground max-w-2xl"
                  data-testid="text-hero-subtitle"
                >
                  Cognify Vision bridges the gap between learning and industry
                  by offering
                  <strong> hands-on, project-based virtual internships</strong>{" "}
                  in domains like Web Development, AI, and Cloud Computing.
                  Build real projects, gain experience, and become
                  industry-ready.
                </p>

                <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                  Open to <strong>all, </strong>
                  who are passionate about technology — whether you’re exploring tech,
                  starting your career, or upskilling for the future.{" "}
                  <strong>Learn. Build. Get Hands-On Now.</strong>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/domains">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto group"
                    data-testid="button-explore-domains"
                  >
                    Explore Domains
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/auth/signup">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                    data-testid="button-get-started"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <p
                      className="text-2xl sm:text-3xl font-bold"
                      data-testid={`text-stat-value-${index}`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-stat-label-${index}`}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative hidden lg:block">
              <div className="aspect-square bg-primary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/637/858/non_2x/internship-flat-style-illustration-design-free-vector.jpg"
                  alt="Internship illustration"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
              data-testid="text-domains-title"
            >
              Popular Internship Domains
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-domains-subtitle"
            >
              Choose from our carefully curated domains designed to match
              industry demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {domains.map((domain) => (
              <DomainCard key={domain.id} {...domain} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/domains">
              <Button
                variant="outline"
                size="lg"
                data-testid="button-view-all-domains"
              >
                View All Domains
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl sm:text-4xl font-bold mb-4"
              data-testid="text-features-title"
            >
              Why Choose Cognify?
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-features-subtitle"
            >
              We provide everything you need to succeed in your tech career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold"
                  data-testid={`text-feature-title-${index}`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-feature-description-${index}`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          <h2
            className="font-display text-3xl sm:text-4xl font-bold"
            data-testid="text-cta-title"
          >
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg opacity-90" data-testid="text-cta-subtitle">
            Join thousands of interns who are already building their future in
            tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
                data-testid="button-cta-signup"
              >
                Sign Up Now
              </Button>
            </Link>
            <Link href="/domains">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-cta-explore"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  );
}
