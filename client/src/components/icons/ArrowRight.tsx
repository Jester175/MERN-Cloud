import React from "react";

interface IArrowRightProps {
  className?: string;
}

export const ArrowRight: React.FC<IArrowRightProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4H14M14 4L11.5 1M14 4L11.5 7"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
