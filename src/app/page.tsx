import path from "path";
import fs from "fs/promises";

import { StoryCardList } from "@/components/StoryCardList";
import { StoryTileList } from "@/components";
import type { StoriesApiType } from "@/types/api";
import { FeaturesList } from "@/components/Features";

export default async function Home() {
  const data: StoriesApiType = await getData();

  return (
    <main>
      <div>Github actions test</div>
      <StoryCardList stories={data.stories} />
      <StoryTileList stories={data.story.slice(0, 4)} />
      <FeaturesList features={data.features.slice(0, 3)} />
    </main>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "content.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}
