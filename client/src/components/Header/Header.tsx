import React from "react";

import { MyContainer } from "../../UI/MyContainer";

import mainCloud from "../../assets/images/main_cloud.png";
import { Logout } from "../icons/Logout";
import { Cloud } from "../icons/Cloud";

import styles from "./header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/userReducer";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <MyContainer>
        <img src={mainCloud} alt="Cloud" className={styles.cloud}/>
        <button className={styles.logout} onClick={() => dispatch(logout())}>
          <Logout className={styles.exit} />
        </button>
        <Cloud className={styles.storm1} />
        <Cloud className={styles.storm2} />
      </MyContainer>
    </header>
  );
};
