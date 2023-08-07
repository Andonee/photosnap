"use client";
import React, { CSSProperties, useState } from "react";
import styles from "./ArrowButton.module.scss";
import Image from "next/image";

type ButtonProps = {
  label: string;
  type: "dark" | "light";
  onClick?: () => void;
  fullwidth?: boolean;
  style?: CSSProperties;
};

export const ArrowButton = (props: ButtonProps) => {
  const { label, type, onClick, fullwidth, style } = props;
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const basicArrow =
    type === "dark"
      ? "/assets/shared/desktop/arrow.svg"
      : "/assets/shared/desktop/arrowWhite.svg";
  const hoverArrow =
    type === "dark"
      ? "/assets/shared/desktop/arrowWhite.svg"
      : "/assets/shared/desktop/arrow.svg";

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[type]} ${
        fullwidth && styles.fullwidth
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
    >
      <span>
        {label}
        {isHovering ? (
          <Image
            priority
            src={basicArrow}
            alt="button"
            width={32}
            height={14}
          />
        ) : (
          <Image
            priority
            src={hoverArrow}
            alt="button"
            width={32}
            height={14}
          />
        )}
      </span>
    </button>
  );
};
