import type { Config } from "tailwindcss";
import { theme } from "./theme.config";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: {
        display: theme.typography.display,
        body: theme.typography.body,
      },
      borderRadius: { sketch: theme.borders.radius },
    },
  },
  plugins: [],
};

export default config;
