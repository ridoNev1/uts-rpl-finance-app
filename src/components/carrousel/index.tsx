import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../container";
import { AspectRatio } from "../ui/aspect-ratio";
const images = [
  "https://resources.reed.co.uk/courses/coursemedia/439108/b2ce21aa-3c7f-42ad-9055-0ce692a13bd0_cover.webp",
  "https://fastwork.id/blog/wp-content/uploads/2023/12/ID-9-Apa-itu-Financial-Consultant_0.jpg",
  "https://gmtacademyx.graphy.com/s/store/courses/6480661ee4b0dc4809c6c5d6/cover.jpg?v=9",
];
export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Container>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[90vw]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((el, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex p-0 items-center justify-center">
                  <AspectRatio ratio={16 / 8}>
                    <img
                      src={el}
                      alt="Image"
                      className="rounded-md object-cover h-full w-full"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
    </Container>
  );
}
