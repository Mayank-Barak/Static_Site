import { createFileRoute } from "@tanstack/react-router";
import { MorrowSite } from "@/components/MorrowSite";

const title = "Morrow Operations Advisory — Better operations, less theatre";
const description =
  "Independent operations consultancy in Bristol helping growing businesses build clearer, calmer ways of working.";
const image =
  "https://images.unsplash.com/photo-1623303647440-967d26b95b47?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: image },
      { name: "twitter:image", content: image },
    ],
  }),
  component: MorrowSite,
});
