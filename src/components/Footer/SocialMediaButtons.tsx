import React from "react";
import Image from "next/image";
import styles from "./Footer.module.scss";

const socialMedia = [
  {
    name: "facebook",
    src: "/assets/shared/desktop/facebook.svg",
    url: "https://www.facebook.com/",
  },
  {
    name: "youtube",
    src: "/assets/shared/desktop/youtube.svg",
    url: "https://www.youtube.com/",
  },
  {
    name: "twitter",
    src: "/assets/shared/desktop/twitter.svg",
    url: "https://twitter.com/",
  },
  {
    name: "pinterest",
    src: "/assets/shared/desktop/pinterest.svg",
    url: "https://www.pinterest.co.uk/",
  },
  {
    name: "instagram",
    src: "/assets/shared/desktop/instagram.svg",
    url: "https://www.instagram.com/",
  },
];

const SocialMediaButtons = () => {
  return (
    <div className={styles.socialmedia}>
      {socialMedia.map((el, idx) => {
        return (
          <a href={el.url} target="_blank" key={`${el.name}_${idx}`}>
            <Image priority src={el.src} alt="button" width={21} height={21} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMediaButtons;
