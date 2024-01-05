import React from "react";
import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import { Card, CardContent } from "@/components/ui/card";
import lincifyImg from "./../../public/images/brands/lincify.webp";
import yohrconsultancyImg from "./../../public/images/brands/YoHrConsultancy.webp";
import lancerxImg from "./../../public/images/brands/lancerx.webp";
import sculptImg from "./../../public/images/brands/sculptgen.webp";
import guptatutorialsImg from "./../../public/images/brands/guptatutorials.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const barnds = [
  {
    id: 1,
    name: "Lincify",
    imgUrl: lincifyImg,
  },
  {
    id: 2,
    name: "Yo Hr Consultancy",
    imgUrl: yohrconsultancyImg,
  },
  {
    id: 3,
    name: "LancerX",
    imgUrl: lancerxImg,
  },
  {
    id: 4,
    name: "Sculpt Gen",
    imgUrl: sculptImg,
  },
  {
    id: 5,
    name: "Gupta Tutorials",
    imgUrl: guptatutorialsImg,
  },
];
const Clientele = () => {
  return (
    <div>
      <Layout>
        <AnimatedText
          className="md:!text-2xl relative z-10 lg:text-[2.7rem] text-6xl !text-center xl:text-[2.7rem] lg:!text-center min-h-[130px] max-w-6xl"
          text="I take pride in my collaborations with remarkable companies:"
        />
        <Carousel
          opts={{
            align: "center",
          }}
          className="lg:max-w-3xl my-5 md:max-w-2xl w-[1100px] self-center flex mx-auto"
        >
          <CarouselContent className="lg:max-w-3xl md:max-w-2xl w-[1100px]">
            {barnds.map((brand) => (
              <CarouselItem
                key={brand.id}
                className="md:basis-1/2 lg:basis-1/3 basis-1/5 "
              >
                <div className="p-1">
                  <Card className="h-28 w-48 gap-5 relative">
                    <CardContent className="flex aspect-video h-28 w-48 items-center justify-center p-6 bg-orange-500/10 rounded-md">
                      <Image
                        src={brand.imgUrl}
                        width={100}
                        height={100}
                        className="h-28 w-48 object-contain  drop-shadow-[0px_0px_35px_#FF4500] grayscale dark:brightness-200"
                      />
                    </CardContent>

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Layout>
    </div>
  );
};

export default Clientele;
