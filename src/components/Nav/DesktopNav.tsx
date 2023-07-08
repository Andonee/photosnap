import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../buttons";
import paths from "./paths";
import styles from "./DesktopNav.module.scss";

export const DesktopNav = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          alt="photosnap"
          width={170}
          height={16}
        />
        <ul className={styles.navigation}>
          {paths.map((path) => {
            return (
              <li>
                <Link href={path.path}>{path.label}</Link>
              </li>
            );
          })}
        </ul>
        <Button label={"Get an Invite"} onClick={() => {}} type="dark" />
      </div>
    </nav>
  );
};
