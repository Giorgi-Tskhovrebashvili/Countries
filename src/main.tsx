import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Africa,
  America,
  Asia,
  CountryPage,
  Europe,
  Oceania,
} from "./pages/index.ts";
import { MainLayout } from "./common/index.ts";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
  },
  {
    path: "/Country-Page",
    element: (
      <MainLayout>
        <CountryPage />
      </MainLayout>
    ),
  },
  {
    path: "/Africa",
    element: (
      <MainLayout>
        <Africa />
      </MainLayout>
    ),
  },
  {
    path: "/America",
    element: (
      <MainLayout>
        <America />
      </MainLayout>
    ),
  },
  {
    path: "/Asia",
    element: (
      <MainLayout>
        <Asia />
      </MainLayout>
    ),
  },
  {
    path: "/Europe",
    element: (
      <MainLayout>
        <Europe />
      </MainLayout>
    ),
  },
  {
    path: "/Oceania",
    element: (
      <MainLayout>
        <Oceania />
      </MainLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
