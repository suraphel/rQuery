import React from "react";
import Home from "./components/Home";
import Profession from "./components/Profession";
import RQProfession from "./components/RQProfession";
import { RQProf } from "./components/RQProf";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallelQuery } from "./components/ParallelQuery";
import { DynamicParallel } from "./components/DynamicParallel";
import { PaginatedQuery } from "./components/PaginatedQuery";

const App = () => {
  const routing = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/Prof", element: <Profession /> },
    { path: "/RQ", element: <RQProfession /> },
    { path: "/details/:id", element: <RQProf /> },
    { path: "/par", element: <ParallelQuery /> },
    { path: "/dyna", element: <DynamicParallel id={[1, 3]} /> },
    { path: "/pag", element: <PaginatedQuery /> },
  ]);
  return <RouterProvider router={routing} />;
};

export default App;
