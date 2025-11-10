import InternshipCard from '../InternshipCard';

export default function InternshipCardExample() {
  return (
    <div className="p-6 max-w-md">
      <InternshipCard
        id="fullstack-web"
        title="Full-Stack Web Development"
        domain="Web Development"
        description="Build modern web applications with React, Node.js, and MongoDB. Learn industry best practices."
        duration="12 weeks"
        instructor={{
          name: "Sarah Johnson",
          avatar: undefined
        }}
        batchesAvailable={3}
        difficulty="Intermediate"
        enrolledCount={450}
        status="Filling Fast"
      />
    </div>
  );
}
