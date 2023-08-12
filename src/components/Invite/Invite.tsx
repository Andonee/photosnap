"use client";
import React from "react";
import Image from "next/image";
import { ArrowButton } from "../buttons";
import styles from "./Invite.module.scss";
import { StoryType } from "@/types/api";
import { useGetImage } from "@/common/hooks";

type Invite = {
  image: StoryType;
  title: string;
};

export const Invite = (props: Invite) => {
  const { image, title } = props;
  const getImage = useGetImage();
  const renderImage = getImage(
    image?.imageMobile,
    image?.imageTablet,
    image?.imageDesktop
  );
  return (
    <div className={styles.invite}>
      <Image
        className={styles.invite__image}
        src={`/${renderImage}`}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ height: "inherit" }}
      />
      <div className={styles.invite__content}>
        <h2>{title}</h2>
        <ArrowButton
          label={"Read story"}
          type={"dark"}
          style={{ backgroundColor: "transparent", margin: "20px 0" }}
        />
      </div>
    </div>
  );
};
