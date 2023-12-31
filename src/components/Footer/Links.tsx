import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

const links = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "stories",
    url: "/stories",
  },
  {
    label: "features",
    url: "/features",
  },
  {
    label: "pricing",
    url: "/pricing",
  },
];

const Links = () => {
  return (
    <div className={styles.links}>
      {links.map((link, idx) => (
        <Link href={link.url} key={`${link.label}_${idx}`}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Links;
