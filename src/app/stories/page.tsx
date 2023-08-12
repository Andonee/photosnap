import path from "path";
import fs from "fs/promises";

import { StoryCardList } from "@/features/home/components";
import { StoryTileList } from "@/components";
import type { StoriesApiType } from "@/types/api";

export default async function Home() {
  const data: StoriesApiType = await getData();

  return (
    <main>
      <StoryCardList stories={[data.stories[3]]} />
      <StoryTileList stories={data.story} />
    </main>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "content.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}
