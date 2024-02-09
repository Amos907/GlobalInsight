"use client";

import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

import "@mantine/core/styles.css";
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
        <MantineProvider>
          <Provider store={store}>{children}</Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
