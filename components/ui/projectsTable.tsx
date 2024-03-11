"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import encino from "@/public/images/encino.jpg";
import irigoyen from "@/public/images/irigoyen.png";
import turquesa from "@/public/images/turquesa.jpg";
import mono from "@/public/images/mono.png";
import libertador from "@/public/images/libertador.png";
import Image from "next/image";
import ProjectRow from "./projectRow";
import ImagesModal from "./imagesModal";

const ProjectsTable = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="relative px-10 py-32">
      <div className="w-full flex text-sm mb-8">
        <span className="w-7/12 text-neutral-100">Date</span>
        <span className="text-neutral-100">List of projects</span>
      </div>

      <div className="w-full text-2xl flex flex-col">
        {projects.map((project, index) => {
          return (
            <ProjectRow
              key={index}
              index={index}
              date={project.date}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      <ImagesModal modal={modal} projects={projects}/>
    </div>
  );
};

export default ProjectsTable;

const projects = [
  {
    title: "Concrete & Concrete",
    image: mono,
    date: "2021",
  },
  {
    title: "La Turquesa",
    image: libertador,
    date: "2023",
  },
  {
    title: "Posada Encino",
    image: mono,
    date: "2022",
  },
  {
    title: "PH Libertador",
    image: libertador,
    date: "2025",
  },
  {
    title: "Edificio 04",
    image: mono,
    date: "2024",
  },
];
