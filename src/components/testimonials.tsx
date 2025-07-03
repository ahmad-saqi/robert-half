import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RH from "@/assets/img/RH.svg";

const Testimonials = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center mt-16 md:mt-32 px-4 space-y-6 md:space-y-10">
      {/* Logo */}
      <img src={RH} alt="Company logo" className="size-16 md:size-20" />

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
        Explore testimonials
      </h2>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-10 md:mt-20"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col italic items-start justify-center p-4 md:p-6 h-full">
                    <p className="text-gray-500 text-sm md:text-base">
                      "Their communication is top notch. They always keep me in
                      the know and make it easy to ask questions.
                    </p>
                    <p className="mt-2 md:mt-4 text-sm md:text-base">
                      - Help desk analyst
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows - Hidden on mobile */}
        <div className="hidden lg:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
