import React from "react";
import Image from "next/image";
import { ArrowButton, Divider } from "@/components";
import styles from "./storyTile.module.scss";

type StoryTileProps = {
  image: string;
  date?: string;
  title: string;
  author: string;
};

export const StoryTile = (props: StoryTileProps) => {
  const { image, date, title, author } = props;
  return (
    <div className={styles.storyTile}>
      <Image
        className={styles.storyTile__image}
        src={`/${image}`}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <div className={styles.storyTile__content}>
        <div>
          {date && <time>{date}</time>}
          <h2>{title}</h2>
          <p>by {author}</p>
        </div>
        <Divider />
        <ArrowButton
          label={"Read story"}
          type={"dark"}
          fullwidth
          style={{ backgroundColor: "transparent", margin: "20px 0" }}
        />
      </div>
    </div>
  );
};
