"use client";
import { DesktopNav } from "@/components/Nav/DesktopNav";
import { MobileNav } from "@/components/Nav/MobileNav";
import { useViewWidth } from "@/common/hooks";

export const Nav = () => {
  const { isMobile } = useViewWidth();
  return isMobile ? <MobileNav /> : <DesktopNav />;
};
