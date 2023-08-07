"use client";
import { useState, useEffect } from "react";
import { widthMD, widthLG } from "@/common/utils";

export const useViewWidth = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isTablet, setIsTablet] = useState<boolean>();

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window?.innerWidth <= widthMD);
      setIsTablet(
        window?.innerWidth > widthMD && window?.innerWidth <= widthLG
      );
    };
    window?.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { isMobile, isTablet };
};
