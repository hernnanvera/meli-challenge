import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { DynamicLinks } from "remix-utils";

/**
 * Styles
 */
import desktopStyles from "~/styles/desktop.css";
import mobileStyles from "~/styles/mobile.css";
import ErrorPage from "./components/error-page";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Meli Challenge",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    { rel: "stylesheet", href: mobileStyles },
    { rel: "stylesheet", href: desktopStyles, media: "(min-width: 680px)" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

const PlainError = (error: any) => {
  const { status } = error;
  return (
    <>
      {status && status === 404 ? <h1> 404 Not Found</h1> : ErrorPage()}
    </>
  );
}

export const CatchBoundary = () => {
  const error = useCatch();
  return PlainError(error);
};

export const ErrorBoundary = PlainError;
