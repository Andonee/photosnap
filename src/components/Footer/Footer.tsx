import React from "react";
import styles from "./Footer.module.scss";
import SocialMediaButtons from "./SocialMediaButtons";
import Links from "./Links";
import { ArrowButton } from "../buttons";
import { Copyrights } from "./Copyrights";

export const Footer = () => (
  <div className={styles.wrapper}>
    <SocialMediaButtons />
    <Links />
    <ArrowButton label="Get an invite" type="dark" />
    <Copyrights />
  </div>
);
