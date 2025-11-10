import StatsCard from '../StatsCard';
import { Users } from 'lucide-react';

export default function StatsCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <StatsCard
        title="Total Interns"
        value="2,547"
        description="Active participants"
        icon={Users}
        trend={{ value: 12, direction: "up" }}
      />
    </div>
  );
}
