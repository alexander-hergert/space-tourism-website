import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import DestinationPage from "./pages/Destination/DestinationPage.jsx";
import DestinationInnerPage from "./pages/Destination/DestinationInnerPage.jsx";
import CrewPage from "./pages/Crew/CrewPage.jsx";
import CrewInnerPage from "./pages/Crew/CrewInnerPage.jsx";
import TechnologyPage from "./pages/Technology/TechnologyPage.jsx";
import TechnologyInnerPage from "./pages/Technology/TechnologyInnerPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SharedLayout from "./pages/SharedLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
        children: [
          {
            path: ":name",
            element: <DestinationInnerPage />,
          },
        ],
      },
      {
        path: "/crew",
        element: <CrewPage />,
        children: [
          {
            path: ":name",
            element: <CrewInnerPage />,
          },
        ],
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
        children: [
          {
            path: ":name",
            element: <TechnologyInnerPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <section className="h-[100vh]">
      <RouterProvider router={router} />
    </section>
  );
};

export default App;
