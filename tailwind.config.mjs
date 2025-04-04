/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b3b6f",
        secondary: "#1199ee",
        "text-secondary": "#1c7293",
        "card-bg": "#e8f7ff",
        beige: "beige",
      },
      fontFamily: {
        primary: ['"Plus Jakarta Sans"', "sans-serif"],
        secondary: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
