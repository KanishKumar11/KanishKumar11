import { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import lincifyImg from "./../../public/images/brands/lincify.png";
import yohrconsultancyImg from "./../../public/images/brands/YoHrConsultancy.webp";
import lancerxImg from "./../../public/images/brands/lancerx.webp";
import sculptImg from "./../../public/images/brands/sculptgen.webp";
import guptatutorialsImg from "./../../public/images/brands/guptatutorials.webp";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";

const brands = [
  { id: 1, name: "Lincify", imgUrl: lincifyImg },
  { id: 2, name: "Yo Hr Consultancy", imgUrl: yohrconsultancyImg },
  { id: 3, name: "LancerX", imgUrl: lancerxImg },
  { id: 4, name: "Sculpt Gen", imgUrl: sculptImg },
  { id: 5, name: "Gupta Tutorials", imgUrl: guptatutorialsImg },
  { id: 6, name: "The DevOps Story", imgUrl: "/images/brands/devopsstory.svg" },
  { id: 6, name: "Inovact", imgUrl: "/images/brands/inovact.webp" },
];

const Clientele = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.5,
          spacing: 10,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "center",
              perView: 5.5,
              spacing: 20,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());

    // Cleanup function to remove event listeners
    return () => {
      keenSliderPrevious.removeEventListener("click", () => keenSlider.prev());
      keenSliderNext.removeEventListener("click", () => keenSlider.next());
    };
  }, []);

  return (
    <section className="relative">
      <Layout className="border">
        <AnimatedText
          className="md:!text-2xl relative z-10 lg:text-[2.7rem] text-6xl !text-center xl:text-[2.7rem] lg:!text-center min-h-[130px] max-w-6xl"
          text="I take pride in my collaborations with remarkable companies:"
        />
        <div
          id="keen-slider"
          className="keen-slider relative flex justify-between"
        >
          {brands.map((brand, idx) => (
            <div key={idx} className="p-1 keen-slider__slide">
              <Card className="h-28 w-48 gap-5 relative">
                <CardContent className="flex aspect-video h-28 w-48 items-center justify-center p-6 bg-slate-100 rounded-md">
                  <Image
                    src={brand.imgUrl}
                    width={100}
                    height={100}
                    className="h-28 w-48 object-contain"
                    alt={brand.name}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="lg:hidden mt-8 flex justify-center gap-4">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border-foreground  p-3 text-foreground text-4xl border-2 transition hover:bg-background dark:hover:text-white"
          >
            &#8592;
          </button>
          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border-foreground  p-3 text-foreground text-4xl border-2 transition hover:bg-background dark:hover:text-white"
          >
            &#8594;
          </button>
        </div>
      </Layout>
    </section>
  );
};

export default Clientele;
