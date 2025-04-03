// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: "https://medicooral-as.com",
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
  integrations: [tailwind()],
});
