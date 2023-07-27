import React from "react";
import styles from "./title.module.css";

type IType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface MyTitleProps {
  type: IType;
  className?: string;
  content: string;
}

const choosingTitle = (type: IType, className: string | undefined, content: string) => {
  switch (type) {
    case "h1":
      return <h1 className={`${styles.title} ${className}`}>{content}</h1>;
    case "h2":
      return <h2 className={`${styles.title} ${className}`}>{content}</h2>;
    case "h3":
      return <h3 className={`${styles.title} ${className}`}>{content}</h3>;
    case "h4":
      return <h4 className={`${styles.title} ${className}`}>{content}</h4>;
    case "h5":
      return <h5 className={`${styles.title} ${className}`}>{content}</h5>;
    case "h6":
      return <h6 className={`${styles.title} ${className}`}>{content}</h6>;
    default:
      return <h3 className={`${styles.title} ${className}`}>{content}</h3>;
  }
};

export const MyTitle: React.FC<MyTitleProps> = ({
  type,
  className,
  content,
}) => {
  return choosingTitle(type, className, content);
};
