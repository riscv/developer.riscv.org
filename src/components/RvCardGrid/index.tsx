import clsx from "clsx";
import "./styles.scss";

interface RvCardGridProps {
  children: React.ReactNode;
  className?: string; // optional className for custom styling
}

export default function RvCardGrid({
  children,
  className,
}: RvCardGridProps) {
  return (
    <div className={clsx("rv-card-grid", className)}>
      {children}
    </div>
  );
}
