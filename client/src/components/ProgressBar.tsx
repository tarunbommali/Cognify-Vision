import { Progress } from "@/components/ui/progress";

export interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning" | "danger";
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showPercentage = true,
  size = "md",
  variant = "default",
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  const heightClass = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3",
  }[size];

  const colorClass = {
    default: "",
    success: "bg-green-500",
    warning: "bg-amber-500",
    danger: "bg-red-500",
  }[variant];

  return (
    <div className="space-y-2" data-testid="progress-container">
      {(label || showPercentage) && (
        <div className="flex items-center justify-between gap-2">
          {label && <span className="text-sm font-medium" data-testid="text-progress-label">{label}</span>}
          {showPercentage && (
            <span className="text-sm text-muted-foreground" data-testid="text-progress-percentage">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-secondary rounded-full overflow-hidden ${heightClass}`}>
        <div
          className={`h-full rounded-full transition-all duration-300 ${colorClass || 'bg-primary'}`}
          style={{ width: `${percentage}%` }}
          data-testid="progress-bar-fill"
        />
      </div>
    </div>
  );
}
