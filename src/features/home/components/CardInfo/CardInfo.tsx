import React from "react";
import Link from "next/link";
import { ArrowButton } from "@/components";
import styles from "./CardInfo.module.scss";
import type { StoriesType } from "@/types/api";

export type CardInfoProps = Omit<
  StoriesType,
  "image" | "imageDesktop" | "imageTablet" | "imageMobile"
> & {
  theme: "light" | "dark";
};

export const CardInfo = (props: CardInfoProps) => {
  const { isFeatured, title, date, author, info, url, urlLabel, theme } = props;

  return (
    <article className={`${styles.info} ${styles[theme]}`}>
      {isFeatured && <p>LAST MONTH’S FEATURED STORY</p>}
      <h2 className={styles.info__title}>{title}</h2>
      {isFeatured && (
        <span>
          <time>{date}</time>
          <p>{author}</p>
        </span>
      )}
      <p>{info}</p>
      <Link href={url}>
        <ArrowButton label={urlLabel} type={theme} />
      </Link>
    </article>
  );
};
