import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Card, CardContent, CardHeader } from "../../ui/card";

export const authImages = [
  {
    heading: "Lorem Lorem",
    text: "Lorem Lorem Lorem Lorem",
    color: "bg-[#0077b6]",
    textColor: "text-white",
    imageSrc: "",
  },
  {
    heading: "Lorem Lorem",
    text: "Lorem Lorem Lorem Lorem",
    color: "bg-[#7209b7]",
    textColor: "text-white",
    imageSrc: "",
  },

  {
    heading: "Lorem Lorem",
    text: "Lorem Lorem Lorem Lorem",
    color: "bg-[#2f3e46]",
    textColor: "text-white",
    imageSrc: "",
  },
];

export default function AuthCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full hidden md:block relative"
    >
      <div className="absolute  z-20 w-full flex items-center justify-between top-2/4 px-7 -translate-y-2/4">
        <CarouselPrevious className="bg-button-gpt hover:bg-button-gpt-hover hover:text-white text-white" />
        <CarouselNext className="bg-button-gpt hover:bg-button-gpt-hover hover:text-white text-white" />
      </div>
      <CarouselContent className="">
        {authImages.map((ai, index) => (
          <CarouselItem className="" key={index}>
            <div className="p-1 ">
              <Card
                className={`flex items-center flex-col justify-center h-[95vh] mt-3 ${ai.color}`}
              >
                <CardHeader>
                  <img width={550} src={ai.imageSrc} />
                </CardHeader>
                <CardContent
                  className={`flex flex-col items-center justify-center p-6 ${ai.textColor}`}
                >
                  <span className="text-4xl  font-semibold">{ai.heading}</span>
                  <span className="text-2xl mt-2 ">{ai.text}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
