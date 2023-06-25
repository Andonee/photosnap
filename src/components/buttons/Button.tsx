import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  type: "dark" | "light";
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, type, onClick } = props;
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>
      {label}
    </button>
  );
};
