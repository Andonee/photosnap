import React from "react";
import { PricingCard } from "./PricingCard";
import type { PricingCard as PricingCardProps } from "./PricingCard";
import styles from "./pricingCards.module.scss";

const cards: Array<PricingCardProps> = [
  {
    type: "BASIC",
    info: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "19.00",
    theme: "light",
  },
  {
    type: "PRO",
    info: "More advanced features available. Recommended for photography veterans and professionals.",
    price: "39.00",
    theme: "dark",
  },
  {
    type: "BUSINESS",
    info: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "99.00",
    theme: "light",
  },
];

export const PricingCards = () => {
  return (
    <div className={styles.pricingCards}>
      {cards.map((card, idx) => (
        <PricingCard {...card} key={`${card.info}_${idx}`} />
      ))}
    </div>
  );
};
