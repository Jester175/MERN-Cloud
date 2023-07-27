import React from "react";
import { Link } from "react-router-dom";

import styles from "./main.module.css";

export const Main: React.FC = () => {
  return (
    <div>
      <Link to="/registration">Login</Link>
    </div>
  );
};
