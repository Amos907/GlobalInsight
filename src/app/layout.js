"use client";

import { useEffect } from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { store } from "src/redux/store";
import { Provider } from "react-redux";

import "@mantine/core/styles.css";
import "./globals.css";

// import RouterTransition from "./components/layout/router-transition";

export default function RootLayout({ children }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("scope is: ", registration.scope));
    }
  }, []);

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
          {/* <RouterTransition /> */}
          <Provider store={store}>{children}</Provider>
        </MantineProvider>
      </body>
    </html>
  );
}
