"use client";
import { useViewWidth } from ".";

export const useGetImage = () => {
  const { isMobile, isTablet } = useViewWidth();

  const getImage = (
    imageMobile: string,
    imageTablet: string,
    imageDesktop: string
  ) => {
    if (isMobile) return imageMobile;
    if (isTablet) return imageTablet;
    return imageDesktop;
  };

  return getImage;
};
