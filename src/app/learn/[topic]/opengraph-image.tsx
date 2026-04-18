import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { LEARN, type LearnSlug } from "./data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PadelUp · Learn";

export default async function Image({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const data = LEARN[topic as LearnSlug];
  return renderOg({
    label: "Learn",
    title: data?.h1 ?? "Learn padel",
    subtitle: data?.keyTakeaways?.[0],
  });
}
