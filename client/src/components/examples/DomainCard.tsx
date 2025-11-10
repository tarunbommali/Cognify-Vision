import DomainCard from '../DomainCard';
import { Code } from "lucide-react";

export default function DomainCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <DomainCard
        id="web-dev"
        title="Web Development"
        description="Master modern web technologies including React, Node.js, and full-stack development."
        icon={<Code className="h-6 w-6" />}
        internshipCount={12}
        duration="8-12 weeks"
        enrolledCount={1200}
        featured={true}
      />
    </div>
  );
}
