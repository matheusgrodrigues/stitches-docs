import { createStitches } from "@stitches/react";

export const { styled, theme, prefix, createTheme } = createStitches({
  theme: {
    colors: {
      red: "red",
      yellow: "yellow",
    },
    fontSizes: {
      sm: "12px",
      md: "16px",
      lg: "32px",
    },
  },
});
