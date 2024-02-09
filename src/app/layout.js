import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <title>GlobalInsights</title>
      <meta
        name="description"
        content="Explore the world's countries, their cultures, demographics, and more."
      />
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
