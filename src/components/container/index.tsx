import React from "react";

interface IContainerComps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IContainerComps> = ({ children, className }) => {
  return (
    <div className="max-w-[480px] mx-auto px-6 border-x">
      <div className={className}>{children}</div>
    </div>
  );
};

export default Container;
