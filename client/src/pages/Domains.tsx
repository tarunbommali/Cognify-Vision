import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import FilterBar from "@/components/FilterBar";
import InternshipCard from "@/components/InternshipCard";
import { Code, Brain, Cloud, Database, Smartphone, Shield } from "lucide-react";

export default function Domains() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const internships = [
    {
      id: "fullstack-web",
      title: "Full-Stack Web Development",
      domain: "Web Development",
      description: "Build modern web applications with React, Node.js, and MongoDB. Learn industry best practices and deployment strategies.",
      duration: "12 weeks",
      instructor: { name: "Sarah Johnson" },
      batchesAvailable: 3,
      difficulty: "Intermediate" as const,
      enrolledCount: 450,
      status: "Filling Fast" as const,
    },
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      domain: "AI & Machine Learning",
      description: "Master ML algorithms, neural networks, and deep learning. Work on real-world datasets and build predictive models.",
      duration: "14 weeks",
      instructor: { name: "Dr. Michael Chen" },
      batchesAvailable: 2,
      difficulty: "Advanced" as const,
      enrolledCount: 320,
      status: "Open" as const,
    },
    {
      id: "aws-cloud",
      title: "AWS Cloud Solutions Architect",
      domain: "Cloud Computing",
      description: "Design and deploy scalable cloud infrastructure on AWS. Learn EC2, S3, Lambda, and best practices for cloud architecture.",
      duration: "10 weeks",
      instructor: { name: "James Williams" },
      batchesAvailable: 4,
      difficulty: "Intermediate" as const,
      enrolledCount: 280,
      status: "Open" as const,
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      domain: "Data Science",
      description: "Analyze complex datasets using Python, SQL, and visualization tools. Build data-driven solutions for business problems.",
      duration: "12 weeks",
      instructor: { name: "Emily Rodriguez" },
      batchesAvailable: 3,
      difficulty: "Intermediate" as const,
      enrolledCount: 390,
      status: "Open" as const,
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      domain: "Mobile Development",
      description: "Create cross-platform mobile apps with React Native. Learn iOS and Android development from a single codebase.",
      duration: "10 weeks",
      instructor: { name: "David Park" },
      batchesAvailable: 2,
      difficulty: "Beginner" as const,
      enrolledCount: 210,
      status: "Open" as const,
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity Essentials",
      domain: "Cybersecurity",
      description: "Learn ethical hacking, network security, and threat detection. Protect systems from modern cyber threats.",
      duration: "8 weeks",
      instructor: { name: "Lisa Anderson" },
      batchesAvailable: 1,
      difficulty: "Advanced" as const,
      enrolledCount: 150,
      status: "Filling Fast" as const,
    },
  ];

  const categories = [
    "Web Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "Data Science",
    "Mobile Development",
    "Cybersecurity",
  ];

  const sortOptions = [
    { value: "popular", label: "Most Popular" },
    { value: "recent", label: "Recently Added" },
    { value: "duration", label: "Duration" },
    { value: "difficulty", label: "Difficulty" },
  ];

  const filteredInternships = internships.filter((internship) => {
    const matchesCategory = !activeCategory || internship.domain === activeCategory;
    const matchesSearch = !searchQuery || 
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />

      <main className="flex-1">
        <div className="bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <h1 className="font-display text-4xl font-bold mb-4" data-testid="text-page-title">
                Explore Internship Domains
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-page-subtitle">
                Discover hands-on learning opportunities across multiple tech domains
              </p>
            </div>

            <FilterBar
              searchPlaceholder="Search internships..."
              onSearchChange={setSearchQuery}
              categories={categories}
              activeCategory={activeCategory || undefined}
              onCategoryChange={setActiveCategory}
              sortOptions={sortOptions}
              onSortChange={(value) => console.log('Sort by:', value)}
              showAdvancedFilters={true}
            />
          </div>
        </div>

        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                Showing {filteredInternships.length} of {internships.length} internships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredInternships.map((internship) => (
                <InternshipCard key={internship.id} {...internship} />
              ))}
            </div>

            {filteredInternships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground" data-testid="text-no-results">
                  No internships found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
