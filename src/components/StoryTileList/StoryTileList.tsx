"use client";
import React from "react";
import type { StoryType } from "@/types/api";
import { useGetImage } from "@/common/hooks";
import { StoryTile } from "../StoryTile";
import styles from "./storyTileList.module.scss";

type StoryCardListProps = {
  stories: Array<StoryType>;
};

export const StoryTileList = (props: StoryCardListProps) => {
  const { stories } = props;
  const getImage = useGetImage();
  return (
    <div className={styles.storyTileList}>
      {stories.slice(0, 4).map((story) => {
        const image = getImage(
          story.imageMobile,
          story.imageTablet,
          story.imageDesktop
        );
        return (
          <StoryTile image={image} title={story.title} author={story.author} />
        );
      })}
    </div>
  );
};
