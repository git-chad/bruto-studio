import React from "react";

const ProjectRow = ({
  index,
  date,
  title,
  setModal,
}: {
  index: any;
  date: string;
  title: string;
  setModal: any;
}) => {
  return (
    <div
      key={index}
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
      className="project-row w-full flex items-center text-2xl border border-transparent transition-all border-b-neutral-800 h-24"
    >
      <p className="w-7/12">{date}</p>
      <span>{title}</span>
    </div>
  );
};

export default ProjectRow;
