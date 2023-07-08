import { useState, useEffect } from "react";
import { widthMD } from "@/common/utils";

export const useViewWidth = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= widthMD);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= widthMD);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [window.innerWidth]);

  return { isMobile };
};
