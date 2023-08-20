import React from "react";
import type { FeatureType } from "@/types/api";
import styles from "./featureList.module.scss";
import { FeatureCard } from "@/components/FeatureCard";

type FeaturesListProps = {
  features: Array<FeatureType>;
};

export const FeaturesList = (props: FeaturesListProps) => {
  const { features } = props;
  return (
    <div className={styles.featureList}>
      {features.map((feature, idx) => (
        <FeatureCard
          icon={feature.icon}
          title={feature.title}
          info={feature.info}
          key={`${feature.title}_${idx}`}
        />
      ))}
    </div>
  );
};
