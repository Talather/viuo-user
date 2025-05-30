import { cn } from "../../../lib/utils";
import { ServiceCard } from "./cards/home-service-card";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCards = ({
  services,
  className,
}: {
  className?: string;
  services: Service[];
}) => {
  return (
    <div className="p-5">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto",
          className
        )}
      >
        {services.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
