import {lazy} from "react";
// import { BasePath } from "../api-requests/base-url-config.js";

const UnauthorizedRouteList = [
    {
        path: BasePath + "/",
        component: lazy(() => import("../pages/unauthorized-pages/login-page.jsx")),
    },
   

]

export default UnauthorizedRouteList;