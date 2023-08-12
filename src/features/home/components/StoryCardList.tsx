"use client";
import React from "react";
import { StoryCard } from "../../../components/StoryCard";
import type { StoriesType } from "@/types/api";
import { useGetImage } from "@/common/hooks";
import { convertDate } from "@/common/utils";

type StoryCardListProps = {
  stories: Array<StoriesType>;
};

export const StoryCardList = (props: StoryCardListProps) => {
  const { stories } = props;
  const getImage = useGetImage();

  return (
    <div>
      {stories.slice(0, 3).map((story, idx) => {
        const urlLabel = idx === 0 ? "GET AN INVITE" : "VIEW THE STORIES";
        const theme = idx === 0 ? "dark" : "light";
        const image = getImage(
          story.imageMobile,
          story.imageTablet,
          story.imageDesktop
        );
        return (
          <StoryCard
            key={`${story.title}_${idx}`}
            isFeatured={story.isFeatured}
            title={story.title}
            date={convertDate(story.date)}
            author={story.author}
            info={story.info}
            url={story.url}
            urlLabel={urlLabel}
            image={image}
            theme={theme}
          />
        );
      })}
    </div>
  );
};
