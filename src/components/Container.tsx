import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const Container = ({ children }: ChildrenProps) => {
  return (
    <div className="max-w-[90vw] 2xl:max-w-[70vw] mx-auto">{children}</div>
  );
};

export default Container;
