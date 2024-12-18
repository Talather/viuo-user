import { type LucideIcon } from "lucide-react";
import { cn } from "../../../../lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  onClick?: () => void;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-[#0a2828] rounded-lg p-6  transition-all duration-300 hover:bg-[#0c2f2f]",
        className
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        <Icon className="w-6 h-6 text-white" />
        {/* <ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" /> */}
      </div>
      <h2 className="text-2xl font-semibold text-white mt-10 mb-2">{title}</h2>
      <p className="text-[#9ba1a6] text-md leading-relaxed">{description}</p>
    </div>
  );
}
