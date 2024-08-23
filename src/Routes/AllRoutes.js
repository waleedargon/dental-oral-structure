import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../Pages/Auth/LandingPage")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/signIn",
    component: lazy(() => import("../Pages/Auth/SignIn")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
];

export default routes;
