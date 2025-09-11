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
    path: "/dealerlogin",
    component: lazy(() => import("../pages/authorized-pages/DealerLogin.jsx")),
  },
  {
    path: "/dashboard",
    component: lazy(() => import("../pages/authorized-pages/page-mobile.jsx")),
  },
  {
    path: "/terminal",
    component: lazy(() => import("../pages/authorized-pages/home/page-dealer.jsx")),
  },
];

export default AuthorizedRouteList;
