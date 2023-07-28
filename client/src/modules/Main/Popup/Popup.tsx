import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";

import styles from "./popup.module.css";

interface IPopupProps {
  onClose: () => void;
}

export const Popup: React.FC<IPopupProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const { createDir } = useActions();
  const { currentDir } = useTypedSelector((state) => state.file);

  
  const handlerCreateFolder = () => {
    createDir(currentDir, name);
    setName('');
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <div className={styles.popup__header}>
          <h2 className={styles.popup__title}>Create new folder</h2>
          <button className={styles.popup__close} onClick={onClose}>X</button>
        </div>
        <input
          type="text"
          placeholder="Enter name folder..."
          className={styles.popup__input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className={styles.popup__create} onClick={handlerCreateFolder}>Create</button>
      </div>
    </div>
  );
};
