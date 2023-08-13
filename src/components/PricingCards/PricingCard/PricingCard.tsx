"use client";
import { Button } from "@/components/buttons";
import React from "react";
import styles from "./pricingCard.module.scss";

export type PricingCard = {
  type: "BASIC" | "PRO" | "BUSINESS";
  info: string;
  price: string;
  theme: "dark" | "light";
};

export const PricingCard = (props: PricingCard) => {
  const { type, info, price, theme } = props;
  return (
    <div className={`${styles.pricingCard} ${styles[theme]}`}>
      <h2>{type}</h2>
      <p className={styles.pricingCard__info}>{info}</p>
      <p className={styles.pricingCard__price}>
        <span>${price}</span>
        <span>per month</span>
      </p>
      <div className={styles.pricingCard__button}>
        <Button
          label="pick a plan"
          onClick={() => {}}
          type={theme === "dark" ? "light" : "dark"}
        />
      </div>
    </div>
  );
};
