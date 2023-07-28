import React from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { File } from "./File/File";

import { IFile } from "../../../types/file";

import styles from "./list.module.css";

export const FileList: React.FC = () => {
  const files = useTypedSelector((state) => state.file.files).map((file : IFile) => (
    <File key={file._id} file={file}/>
  ));

  return (
    <div className={styles.list}>
      <div className={styles.list__header}>
        <div className={styles.list__name}>Name</div>
        <div className={styles.list__date}>Date</div>
        <div className={styles.list__size}>Size</div>
      </div>
      {files}
    </div>
  );
};
