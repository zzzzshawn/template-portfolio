import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className
}) {
  return (
    (<div
      className={cn(
        "",
        className
      )}>
      <div
        className={``} />
      {children}
    </div>)
  );
}
