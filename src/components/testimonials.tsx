import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import RH from "@/assets//img/RH.svg";
const Testimonials = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center mt-32 space-y-10">
      <img src={RH} alt="" className="size-20" />
      <p className="text-5xl">Explore testimonials</p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-20"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col italic items-start justify-center p-6">
                    <p className="text-gray-500">
                      "Their communication is top notch. They always keep me in
                      the know and make it easy to ask questions.
                    </p>
                    <p>-Help desk analyst</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;
