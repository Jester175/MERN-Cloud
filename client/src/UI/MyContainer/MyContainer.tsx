import React from 'react';
import styles from './container.module.css';

interface IMyContainerProps {
    children: React.ReactNode,
}

export const MyContainer: React.FC<IMyContainerProps> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
