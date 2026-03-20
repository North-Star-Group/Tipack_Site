"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FeatureCircle } from "./FeatureCircle";
import { Button } from "./Button";
import Link from "next/link";

export default function Hero() {
  const [isTaped, setIsTaped] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTaped(true);
      } else {
        setIsTaped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-0 relative overflow-hidden">
      {/* Abstract Background Element (Spiral on left) */}
      <div className="absolute left-0 top-1/3 hidden lg:block opacity-20 transform -translate-x-1/2">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-black"
        >
          <path d="M50 50 m-40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0" />
          <path d="M50 50 m-30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" />
          <path d="M50 50 m-20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto z-10 space-y-8">
        {/* Heading Group */}
        <div className="flex flex-col items-center font-black text-[#2D2424]">
          <span className="text-2xl md:text-3xl font-bold mb-2">
            Fai davvero un packaging da Tipack
          </span>

          <div className="relative inline-block">
            <span
              className="text-6xl md:text-8xl tracking-tighter relative z-10"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Packaging
            </span>

            {/* UPDATED TAPE EFFECT */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] z-20 pointer-events-none transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) flex items-center justify-center ${isTaped
                ? "opacity-40 rotate-[-2deg] scale-100"
                : "opacity-0 rotate-[5deg] scale-150 translate-y-10"
                }`}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 60"
                preserveAspectRatio="none"
                className="drop-shadow-sm text-[#E8E3C7]"
              >
                <path
                  fill="currentColor"
                  stroke="black"
                  strokeWidth="1.5"
                  d="M5 0 L295 0 L300 5 L295 10 L300 15 L295 20 L300 25 L295 30 L300 35 L295 40 L300 45 L295 50 L300 55 L295 60 L5 60 L0 55 L5 50 L0 45 L5 40 L0 35 L5 30 L0 25 L5 20 L0 15 L5 10 L0 5 Z"
                />
                <path
                  d="M20 10 Q 50 15 80 10 M 200 50 Q 230 45 260 50"
                  stroke="black"
                  strokeOpacity="0.1"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>
            </div>
            {/* END UPDATED TAPE EFFECT */}
          </div>
        </div>

        {/* Subtext */}
        <div className="max-w-xl mx-auto text-lg md:text-xl text-[#5C5454] leading-relaxed">
          <p>
            Ricevi prezzi diretti dalla fabbrica su packaging in carta,
            plastica, vetro e metallo per il tuo marchio.
          </p>

          {/* CTA Button */}
          <div className="pt-4 pb-12">
            <Link href="/Products">
              <Button
                variant="primary"
                className="px-8 py-4 text-base flex items-center gap-2"
              >
                Scopri il catalogo <ArrowUpRight size={20} />
              </Button>
            </Link>
          </div>

          {/* Feature Circles Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 w-full max-w-6xl mx-auto pt-12 pb-16"
          >
            {[
              {
                src: "/images/big_box.webp",
                alt: "Scatole ondulate resistenti",
                bgColor: "#d5ffb0ff",
                title: "Scatole ondulate resistenti",
              },
              {
                src: "/images/packet.webp",
                alt: "Busta con zip",
                bgColor: "#fcb5b5ff",
                zoom: 2.0,
                title: "Busta con zip",
              },
              {
                src: "/images/yellow-box.webp",
                alt: "Scatole standard",
                bgColor: "#d2d0ffff",
                title: "Scatole standard",
              },
              {
                src: "/images/Food_box.webp",
                alt: "Scatole per alimenti",
                bgColor: "#fffc9cff",
                title: "Scatole per alimenti",
              },
              {
                src: "/images/Layered_boxes.webp",
                alt: "Scatole a strati",
                bgColor: "#ffd0edff",
                title: "Scatole a strati",
              },
              {
                src: "/images/wardrobe_box.webp",
                alt: "Scatola guardaroba",
                bgColor: "#ffdfb0ff",
                title: "Scatola guardaroba",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.8 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 80,
                      damping: 10,
                    },
                  },
                }}
                className="flex justify-center w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.333%-3rem)] min-w-[200px]"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="w-full flex justify-center"
                >
                  <FeatureCircle
                    src={item.src}
                    alt={item.alt}
                    bgColor={item.bgColor}
                    zoom={item.zoom}
                    title={item.title}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}