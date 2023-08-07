import React from "react";
import Image from "next/image";
import { CardInfo } from "../CardInfo";
import type { StoriesType } from "@/types/api";

import styles from "./StoryCard.module.scss";

type StoryCardProps = Omit<
  StoriesType,
  "imageDesktop" | "imageTablet" | "imageMobile"
> & {
  theme: "light" | "dark";
  image: string;
};

export const StoryCard = (props: StoryCardProps) => {
  const { image, title, info, url, urlLabel, isFeatured, date, author, theme } =
    props;

  return (
    <div className={styles.card}>
      <Image
        className={styles.card__image}
        src={`/${image}`}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%" }}
      />
      <CardInfo
        isFeatured={isFeatured}
        title={title}
        date={date}
        author={author}
        info={info}
        url={url}
        urlLabel={urlLabel}
        theme={theme}
      />
    </div>
  );
};
