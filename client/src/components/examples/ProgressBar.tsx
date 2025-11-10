import ProgressBar from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="p-6 space-y-6 max-w-md">
      <ProgressBar
        value={75}
        label="Course Progress"
        showPercentage={true}
        size="md"
        variant="default"
      />
      <ProgressBar
        value={90}
        label="Completed Tasks"
        showPercentage={true}
        size="md"
        variant="success"
      />
    </div>
  );
}
