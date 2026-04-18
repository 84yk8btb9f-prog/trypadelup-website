import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { FEATURES, type FeatureSlug } from "./data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PadelUp feature";

export default async function Image({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature } = await params;
  const data = FEATURES[feature as FeatureSlug];
  return renderOg({
    label: "Feature",
    title: data?.h1 ?? "PadelUp feature",
    subtitle: data?.bullets?.[0],
  });
}
