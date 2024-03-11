import React from "react";
import Container from "../ui/container";
import ProjectsTable from "../ui/projectsTable";

const Projects = () => {
  return (
    <div>
      <Container className="w-full gap-5 grid grid-cols-12 px-10 py-32">
        <div className="col-span-12 grid grid-cols-12 pb-8 border border-transparent border-b-neutral-700">
          <span className="text-3xl col-span-1">01</span>
          <p className="text-3xl col-span-6">
            Our team is small -the results are the biggest.
          </p>
          <p className="col-span-4 text-2xl">
            We are agile, optimized for impact. Think: small teams, no frills,
            big results. Everyone in the studio is a hands-on creative. That
            allows us to keep the focus exactly where it should be -on the
            quality of the work.
          </p>
        </div>

        <div className="col-span-12 grid grid-cols-12 mt-32 pb-8 border border-transparent border-b-neutral-700">
          <span className="text-3xl col-span-1">02</span>
          <p className="text-3xl col-span-6">
            We invest in what we believe in.
          </p>
          <p className="col-span-4 text-2xl">
            We help clients grow through our creative capital model combining
            investment, architectural design, visualizations, and branding
            strategies. We specialize in nurturing innovative early-stage
            ventures, helping them imagine, develop, and build their vision,
            literally.
          </p>
        </div>
      </Container>
      <ProjectsTable />
    </div>
  );
};

export default Projects;
