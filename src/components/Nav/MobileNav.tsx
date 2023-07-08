"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../buttons";
import paths from "./paths";
import styles from "./MobileNav.module.scss";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const onNavigationToggle = () => setOpen((prevState) => !prevState);
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          alt="photosnap"
          width={170}
          height={16}
        />
        {open ? (
          <button onClick={onNavigationToggle}>
            <Image
              src={"/assets/shared/mobile/close.svg"}
              alt="close menu"
              width={16}
              height={16}
            />
          </button>
        ) : (
          <button onClick={onNavigationToggle}>
            <Image
              src={"/assets/shared/mobile/menu.svg"}
              alt="open menu"
              width={20}
              height={6}
            />
          </button>
        )}
      </div>
      <ul
        className={`${styles.drawer} ${open && styles.open}`}
        onClick={() => console.log("click")}
      >
        {paths.map((path) => {
          return (
            <li>
              <Link href={path.path} prefetch={true}>
                {path.label}
              </Link>
            </li>
          );
        })}
        <hr />
        <Button label={"Get an Invite"} onClick={() => {}} type="dark" />
      </ul>
    </nav>
  );
};
