"use client";
import styles from "./page.module.css";

import { DesktopNav } from "@/components/Nav/DesktopNav";
import { MobileNav } from "@/components/Nav/MobileNav";
import { useViewWidth } from "@/common/hooks";

export default function Home() {
  const { isMobile } = useViewWidth();

  return (
    <main className={styles.main}>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </main>
  );
}
