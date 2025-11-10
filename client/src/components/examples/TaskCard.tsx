import TaskCard from '../TaskCard';

export default function TaskCardExample() {
  return (
    <div className="p-6 max-w-md">
      <TaskCard
        id="task-1"
        title="Build a React Component"
        description="Create a reusable dashboard widget using React hooks and TypeScript."
        dueDate="Dec 31, 2025"
        status="pending"
        maxMarks={100}
      />
    </div>
  );
}
