import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { AUDIENCES, type AudienceSlug } from "./data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PadelUp — for you";

export default async function Image({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const data = AUDIENCES[audience as AudienceSlug];
  return renderOg({
    label: `For ${audience.replace(/-/g, " ")}`,
    title: data?.h1 ?? "PadelUp",
    subtitle: data?.outcomes?.[0],
  });
}
