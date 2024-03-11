import React from "react";
import Container from "../ui/container";
import ScrollCarousel from "../ui/scroll";

const RecentProjects = () => {
  return (
    <Container className="w-full gap-5 grid min-h-[100dvh] px-10 py-32">
      <h1 className="text-7xl">
        RECENT <b>Projects</b>
      </h1>
      <ScrollCarousel />
    </Container>
  );
};

export default RecentProjects;
