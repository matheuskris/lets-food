import TestimonialCard from "../pieces/TestimonialCard";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const userTestimonials = [
  {
    name: "Naura Silvana",
    stars: 4.5,
    testimonial:
      "A melhor comida que já provei em toda a eternidade, chegou aqui em casa em questão de segundos!",
    imgUrl: "/personTestimonial1.png",
  },
  {
    name: "Lucio Mauro",
    stars: 5.0,
    testimonial:
      "Chegou pra revolucionar o mercado, quem diria que daria pra comer bem pedindo delivery",
    imgUrl: "/personTestimonial2.png",
  },
  {
    name: "Mari baianinha",
    stars: 3.5,
    testimonial:
      "Já é febre aqui em casa, não vamos mais ao mercado, deu fome pedimos um Let's Food!",
    imgUrl: "/personTestimonial1.png",
  },
  {
    name: "Enzo",
    stars: 5.0,
    testimonial: "Minhas namoradas adoram!",
    imgUrl: "/personTestimonial2.png",
  },
  {
    name: "João amoedo",
    stars: 4,
    testimonial: "Esse salgado aqui é de que?",
    imgUrl: "/personTestimonial2.png",
  },
];

export default function Testimonials() {
  const [carouselWidth, setCarouselWidth] = useState<number>(3000);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselTotalWidth = carouselRef.current?.scrollWidth;
    const carouselShowWidth = carouselRef.current?.offsetWidth;
    if (carouselTotalWidth && carouselShowWidth) {
      const realWidth = carouselTotalWidth - carouselShowWidth;
      setCarouselWidth(realWidth);
    }
  }, []);

  const left = carouselWidth ? carouselWidth : 0;

  return (
    <div className="flex flex-col items-center lg:flex-row-reverse justify-center gap-6">
      <div className="">
        <h4 className="text-primary text-2xl font-medium">What They Say</h4>
        <h2 className="text-custom-black text-3xl font-bold mb-6">
          What Our Customers Say About Us
        </h2>
        <div className="w-[34rem]">
          <motion.div ref={carouselRef} className="cursor-grab overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -left }}
              className="flex flex-row"
            >
              {userTestimonials.map((testimonial, i) => (
                <motion.div key={i} className="min-w-[30rem]">
                  <TestimonialCard personTestimonial={testimonial} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div>
        <img src="/Group-7.png" alt="fotos de comidas variadas" />
      </div>
    </div>
  );
}
