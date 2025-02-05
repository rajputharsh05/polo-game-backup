import { ReactNode } from "react";
import Pages from "../Components/Pages";

interface RouteBase {
  path: string;
  element: ReactNode;
}

export const globalRoutes = [
  {
    path: "/",
    element: <Pages></Pages>,
  },
];
