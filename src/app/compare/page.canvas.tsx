import type { Metadata } from "next";
import { Compare } from "@/components/compare/Compare";

export const metadata: Metadata = { title: "Tactile before and after", robots: { index: false, follow: false } };

// Dev-only, like /canvas/: the ".canvas.tsx" extension is only routed by `next dev` or when HALIA_CANVAS=1.
export default function ComparePage() {
  return <Compare />;
}
