import React from "react";
import styles from "./paragraphe.module.css";

interface IMyParagraphProps {
  className?: string;
  content: string;
}

export const MyParagraph: React.FC<IMyParagraphProps> = ({
  className,
  content,
}) => {
  return <p className={`${styles.descr} ${className}`}>{content}</p>;
};
