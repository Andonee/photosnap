import React from "react";
import styles from "./divider.module.scss";

type DividerProps = {
  height?: number;
};

export const Divider = (props: DividerProps) => {
  const { height } = props;
  return <div className={styles.divider} style={{ height: `${height}px` }} />;
};
