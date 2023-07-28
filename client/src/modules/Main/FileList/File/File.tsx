import React from "react";
import { useDispatch } from "react-redux";
import {
  pushToStack,
  setCurrentDir,
} from "../../../../store/reducers/fileReducer";

import { FolderBlue } from "../../../../components/icons/FolderBlue";
import { FileWord } from "../../../../components/icons/FileWord";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { IFile } from "../../../../types/file";

import styles from "./file.module.css";

interface IFileProps {
  file: IFile;
}

export const File: React.FC<IFileProps> = ({ file }) => {
  const dispatch = useDispatch();
  const { currentDir } = useTypedSelector((state) => state.file);

  const openHandler = async () => {
    if (file.type === "dir") {
      dispatch(setCurrentDir(file._id));
      dispatch(pushToStack(currentDir));
    }
  };

  return (
    <div className={styles.file} onClick={openHandler}>
      {file.type === "dir" ? (
        <FolderBlue className={styles.file__img} />
      ) : (
        <FileWord className={styles.file__img} />
      )}
      <div className={styles.file__name}>{file.name}</div>
      <div className={styles.file__date}>{file.date.slice(0, 10)}</div>
      <div className={styles.file__size}>{file.size}</div>
    </div>
  );
};
