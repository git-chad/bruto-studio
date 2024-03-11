import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const ImagesModal = ({ modal, projects }: { modal: any; projects: any }) => {
  const { active, index } = modal;
  const container = useRef(null);
  const scaleAnim = {
    initial: { scale: 0, x: "-50%", y: "-200%" },
    open: {
      scale: 1,
      x: "-50%",
      y: "-200%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-100%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
    });
  }, []);

  return (
    <motion.div
      ref={container}
      variants={scaleAnim}
      initial="initial"
      animate={active ? "open" : "closed"}
      className="h-[350px] w-[600px] absolute top-0 left-1/4 overflow-hidden pointer-events-none flex items-center justify-center"
    >
      <div
        style={{ top: index * -100 + "%" }}
        className="modal-slider w-full h-full absolute"
      >
        {projects.map((project: any, index: any) => {
          return (
            <div
              key={index}
              className="h-full w-full flex justify-center items-center"
            >
              <Image
                alt={project.title}
                src={project.image}
                width={600}
                height={0}
                className="h-auto"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ImagesModal;
