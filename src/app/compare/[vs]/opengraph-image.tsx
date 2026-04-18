import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { COMPARISONS, type CompareSlug } from "./data";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "PadelUp vs alternatives";

export default async function Image({
  params,
}: {
  params: Promise<{ vs: string }>;
}) {
  const { vs } = await params;
  const data = COMPARISONS[vs as CompareSlug];
  return renderOg({
    label: `Compare · vs ${data?.competitor ?? ""}`,
    title: data?.h1 ?? "PadelUp vs alternatives",
    subtitle: data?.verdict,
  });
}
