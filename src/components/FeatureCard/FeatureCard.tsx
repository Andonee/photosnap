import React from "react";
import Image from "next/image";
import styles from "./featureCard.module.scss";

type FeatureCardProps = {
  icon: string;
  title: string;
  info: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  const { icon, title, info } = props;
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCard__content}>
        <div className={styles.featureCard__image}>
          <Image
            src={`/${icon}`}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "fit-content",
              height: "auto",
            }}
          />
        </div>

        <div className={styles.featureCard__info}>
          <h2 className={styles.featureCard__title}>{title}</h2>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
