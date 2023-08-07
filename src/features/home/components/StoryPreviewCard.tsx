import React from "react";
import type { StoryType } from "@/types/api";

export const StoryPreviewCard = (props: StoryType) => {
  const { image, title, author } = props;
  return (
    <div className="story">
      <img src={image} alt={title} />
      <h4 className="story__title">{title}</h4>
      <p className="story__author">{author}</p>
    </div>
  );
};
