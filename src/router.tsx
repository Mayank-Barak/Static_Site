import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // On GitHub Pages the site lives under a sub-path (e.g. /Static-Site/);
  // BASE_URL reflects the configured Vite base ("" -> "/", "/" -> "/").
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    ...(base && base !== "/" ? { basepath: base } : {}),
  });

  return router;
};
