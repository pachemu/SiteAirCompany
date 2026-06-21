import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
};

export default config;
