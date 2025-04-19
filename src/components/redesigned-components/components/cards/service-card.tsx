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
  title,
  description,
  className,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-[#24A580] rounded-lg p-10 service-grid-list  transition-all duration-300 hover:bg-[#1D9670]",
        className
      )}
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        
        {/* <Icon className="w-6 h-6 text-white" /><ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" /> */}
      </div>
      <h2 className="text-2xl text-[#69FFE0] font-bold font-manrope-600 mb-5">{title}</h2>
      <p className="text-[#F4F4FC] text-md font-manrope-100 font-14 leading-relaxed">{description}</p>
    </div>
  );
}
