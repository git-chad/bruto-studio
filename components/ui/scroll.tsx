"use client";
import React from "react";
import { motion } from "framer-motion";

import encino from "@/public/images/encino.jpg";
import irigoyen from "@/public/images/irigoyen.png";
import turquesa from "@/public/images/turquesa.jpg";
import mono from "@/public/images/mono.png";
import libertador from "@/public/images/libertador.png";
import Image from "next/image";

const ScrollCarousel = () => {
  const cards = [
    {
      title: "Concrete & Concrete",
      tech: "[C4D & After Effects]",
      image: mono,
      date: "(TBA)",
      dim: "2",
    },
    {
      title: "La Turquesa",
      tech: "[V-Ray & Autodesk]",
      image: turquesa,
      date: "(2023)",
      dim: "1",
    },
    {
      title: "Posada Encino",
      tech: "[Zona Oeste, BA]",
      image: encino,
      date: "(2022)",
      dim: "1",
    },
    {
      title: "PH Libertador",
      tech: "[Zona norte, BA]",
      image: libertador,
      date: "(TBA)",
      dim: "2",
    },
    {
      title: "Edificio 04",
      tech: "[V-Ray]",
      image: irigoyen,
      date: "(2024)",
      dim: "1",
    },
  ];

  return (
    <div className="cursor-grab overflow-hidden py-32">
      <motion.div drag="x" dragConstraints={{ right: 0, left: -2520 }} className="flex gap-10 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col h-full ${card.dim === "1" ? "min-w-[640px]" : "min-w-[1280px]"} min-h-[720px]`}
          >
            <span className="text-2xl mb-4">{card.title}</span>
            <span className="text-2xl mb-4">{card.tech}</span>
            <Image alt={card.title} src={card.image} height={720} className="w-full h-[720px] object-cover mb-2 pointer-events-none"/>
            <span className="text-2xl">{card.date}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCarousel;
