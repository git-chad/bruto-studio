import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import heroImage from "@/public/images/hero-image.png"
import arrow from "@/public/icons/arrow.svg"

const Hero = () => {
  return (
    <Container className="w-full gap-5 grid grid-cols-12 px-10 h-[100dvh] overflow-hidden">
      <div className="text-2xl font-semibold col-span-12 mt-24 mb-20">
        <h1>Bruto Studio</h1>
        <h1>Belgrano, BA, AR</h1>
      </div>
      <div className="col-span-12">
        <div className="text-2xl flex justify-between items-center">
          <a className="group text-neutral-100 transition duration-300 animate-fade-in cursor-pointer">
            hi@bruto.studio
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-neutral-100"></span>
          </a>
          <p>Let your projects come to life.</p>
        </div>
      </div>
      <div className="relative col-span-12">
        <Image src={heroImage} alt="" width={0} className="object-cover"/>
        <Image src={arrow} alt="" className="absolute z-10 top-0 right-0"/>
      </div>
    </Container>
  );
};

export default Hero;
