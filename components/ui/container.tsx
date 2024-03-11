import React from "react";

const Container = ({
  children,
  className,
  ...props
}: {
  children: any;
  className: string;
}) => {
  const containerClass = `mx-auto ${className || ""}`;

  return (
    <div className={containerClass} {...props}>
      {children}
    </div>
  );
};

export default Container;
