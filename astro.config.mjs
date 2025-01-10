// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: "https://medicooral-dev.netlify.app",
  site: "https://enchanting-tanuki-7ca24b.netlify.app",
  integrations: [tailwind()],
});
