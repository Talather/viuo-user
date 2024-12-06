import { cn } from "../../../../lib/utils";
import ShinyButton from "../shiny-button";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  imagePosition?: "right" | "left";
  className?: string;
}

export function FeatureSection({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref = "#",
  imagePosition = "right",
  className,
}: FeatureSectionProps) {
  return (
    <section className={cn("", className)}>
      <div className=" px-4 pb-20 pt-10 md:px-6 ">
        <div
          className={cn(
            "grid gap-6  lg:grid-cols-2 lg:gap-12 items-center",
            imagePosition === "left" && "lg:grid-flow-dense"
          )}
        >
          <div
            className={cn(
              "space-y-4 lg:container ",
              imagePosition === "left" && "lg:col-start-2"
            )}
          >
            <h2 className="text-3xl lg:text-left text-center font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              {title}
            </h2>
            <p className="max-w-[700px] mx-auto lg:text-left text-center text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {description}
            </p>
            {buttonText && (
              <div className="flex lg:items-start lg:justify-start items-center justify-center flex-col gap-2 min-[400px]:flex-row">
                <ShinyButton
                  className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium text-primary-foreground shadow "
                  href={buttonHref}
                >
                  <a>{buttonText}</a>
                </ShinyButton>
              </div>
            )}
          </div>
          <div
            className={cn(
              "mx-auto aspect-video flex items-center justify-center  w-full lg:aspect-square",
              imagePosition === "left" && "lg:col-start-1"
            )}
          >
            <img
              alt={imageAlt}
              className="rounded-3xl object-cover"
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
