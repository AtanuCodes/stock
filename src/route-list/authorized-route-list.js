import { lazy } from "react";

const AuthorizedRouteList = [
  {
    path: "/",
    component: lazy(() =>
      import("../pages/authorized-pages/home/page-home.jsx")
    ),
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/authorized-pages/mobileLogin.jsx")),
  },
  {
    path: "/dashboard",
    component: lazy(() => import("../pages/authorized-pages/page-mobile.jsx")),
  },
];

export default AuthorizedRouteList;
