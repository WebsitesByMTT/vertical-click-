import React, { ReactNode } from "react";

interface IconBoxProps {
  title: string;
  icon: ReactNode;
}

const IconBox: React.FC<IconBoxProps> = ({ title, icon }) => {
  return (
    <div className="bg-[#8F5BFE26] flex justify-center items-center rounded-md px-5 py-4">
      {icon}
      <h1 className="text-sm font-medium text-[#8F5BFE]">{title}</h1>
    </div>
  );
};

export default IconBox;
