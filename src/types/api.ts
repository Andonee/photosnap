export type StoriesType = {
  isFeatured: boolean;
  title: string;
  date: string;
  author: string;
  info: string;
  url: string;
  urlLabel: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
};

export type StoryType = {
  title: string;
  author: string;
  date: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
};
export type FeatureType = {
  title: string;
  info: string;
  icon: string;
};

export type StoriesApiType = {
  stories: Array<StoriesType>;
  story: Array<StoryType>;
  features: Array<FeatureType>;
};
