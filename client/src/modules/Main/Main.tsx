import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentDir } from "../../store/reducers/fileReducer";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { ArrowRight } from "../../components/icons/ArrowRight";
import { FileList } from "./FileList";
import { Popup } from "./Popup";

import styles from "./main.module.css";

export const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { getFiles, uploadFile } = useActions();
  const { currentDir, dirStack } = useTypedSelector((state) => state.file);
  const [isPopup, setIsPopup] = useState<boolean>(false);

  useEffect(() => {
    getFiles(currentDir);
  }, [currentDir]);

  const handleTogglePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleBackClick = () => {
    const backDirId = dirStack.pop();
    dispatch(setCurrentDir(backDirId));
  };

  const fileUploadHandler = (event: any) => {
    const files = [...event.target.files];
    files.forEach(file => uploadFile(currentDir, file));
  };

  return (
    <div className={styles.disk}>
      <div className={styles.disk__btns}>
        <button
          className={`${styles.disk__back} ${styles.disk__control}`}
          onClick={handleBackClick}
        >
          <ArrowRight />
          Back
        </button>
        <button
          className={`${styles.disk__create} ${styles.disk__control}`}
          onClick={handleTogglePopup}
        >
          Create folder
        </button>
        <div className={styles.disk__upload}>
          <label
            htmlFor="disk__upload-input"
            className={styles["disk__upload-label"]}
          >
            Upload file
          </label>
          <input
            onChange={(event) => fileUploadHandler(event)}
            type="file"
            multiple={true}
            id="disk__upload-input"
            className={styles["disk__upload-input"]}
          />
        </div>
      </div>
      <FileList />
      {isPopup && <Popup onClose={handleTogglePopup} />}
    </div>
  );
};
