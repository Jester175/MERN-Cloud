import React from "react";

interface ICloudProps {
  className?: string;
}

export const Cloud: React.FC<ICloudProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="112"
      height="63"
      viewBox="0 0 112 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M92.2064 23.4187C90.2219 23.4187 88.307 23.7111 86.5014 24.2499C83.2074 10.5942 70.7365 0.436096 55.8522 0.436096C41.0608 0.436096 28.6525 10.4696 25.2665 23.997C23.737 23.621 22.1379 23.4187 20.4902 23.4187C9.6422 23.4187 0.847839 32.073 0.847839 42.7479C0.847839 53.4236 9.6422 62.0775 20.4902 62.0775H51.0483C52.6147 62.3134 54.219 62.4361 55.8522 62.4361C57.4859 62.4361 59.0901 62.3134 60.6565 62.0775H92.2064C103.054 62.0775 111.848 53.4236 111.848 42.7479C111.848 32.073 103.054 23.4187 92.2064 23.4187Z"
        fill="#DDEEFB"
      />
    </svg>
  );
};
