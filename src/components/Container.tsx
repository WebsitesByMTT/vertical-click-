import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const Container = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto max-w-[90vw] xl:max-w-[80vw] 2xl:max-w-[70vw]">
      {children}
    </div>
  );
};

export default Container;
