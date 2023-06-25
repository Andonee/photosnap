import React, { useState } from "react";
import styles from "./ArrowButton.module.scss";
import Image from "next/image";

type ButtonProps = {
  label: string;
  type: "dark" | "light";
  onClick: () => void;
};

export const ArrowButton = (props: ButtonProps) => {
  const { label, type, onClick } = props;
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[type]}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>
        {label}
        {isHovering ? (
          <Image
            priority
            src={"/assets/shared/desktop/arrow.svg"}
            alt="button"
            width={32}
            height={14}
          />
        ) : (
          <Image
            priority
            src={"/assets/shared/desktop/arrowWhite.svg"}
            alt="button"
            width={32}
            height={14}
          />
        )}
      </span>
    </button>
  );
};
