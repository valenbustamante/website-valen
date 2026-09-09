export const theme = {
  colors: {
    powderBlush: "#ffa69e",
    vanillaCream: "#faf3dd",
    lightBlue: "#aed9e0",
    blueSlate: "#5e6472",
    canvas: "#fffdf7",
    ink: "#272b35",
  },
  typography: {
    display: "var(--font-nunito), Arial, sans-serif",
    body: "var(--font-nunito), Arial, sans-serif",
  },
  borders: {
    width: "2px",
    radius: "22px",
    pill: "999px",
  },
  background: {
    dotSize: "18px",
    dotColor: "rgba(94, 100, 114, 0.18)",
  },
} as const;

export const themeCssVariables = `
  :root {
    --powder-blush: ${theme.colors.powderBlush};
    --vanilla-cream: ${theme.colors.vanillaCream};
    --light-blue: ${theme.colors.lightBlue};
    --blue-slate: ${theme.colors.blueSlate};
    --canvas: ${theme.colors.canvas};
    --ink: ${theme.colors.ink};
    --font-display: ${theme.typography.display};
    --font-body: ${theme.typography.body};
    --border-width: ${theme.borders.width};
    --radius: ${theme.borders.radius};
    --pill: ${theme.borders.pill};
    --dot-size: ${theme.background.dotSize};
    --dot-color: ${theme.background.dotColor};
  }
`;
