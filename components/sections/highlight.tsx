import React from "react";
import Container from "../ui/container";
import Image from "next/image";
import kitchen from "@/public/images/kitchen.png";

const Highlight = () => {
  return (
    <Container className="w-full gap-5 grid grid-cols-12 px-10">
      <div className="col-span-12 grid grid-cols-12 mt-24 mb-16">
        <h1 className="text-2xl col-span-2">Edificio 04</h1>
        <h1 className="text-2xl col-span-2">(2022)</h1>
        <h1 className="text-2xl col-span-7">Vray &amp; Autodesk</h1>
        <h1 className="text-2xl font-semibold col-span-1">See more</h1>
      </div>

      <div className="relative col-span-12">
      <Image
        src={kitchen}
        alt="highlighted render"
        width={0}
        className="object-cover w-full"
      />
      </div>
    </Container>
  );
};

export default Highlight;
