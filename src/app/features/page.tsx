import path from "path";
import fs from "fs/promises";

import { StoryCardList } from "@/features/home/components";
import { FeaturesList } from "@/components/Features";
import type { StoriesApiType } from "@/types/api";
import { Invite } from "@/components/Invite";

export default async function Home() {
  const data: StoriesApiType = await getData();

  return (
    <main>
      <StoryCardList stories={[data.stories[3]]} />
      <FeaturesList features={data.features} />
      <Invite
        image={data.story[8]}
        title="We’re in beta. Get your invite today!"
      />
    </main>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "content.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}
