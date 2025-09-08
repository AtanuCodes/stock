import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import {Suspense, useEffect} from "react";
// import UnauthorizedRouteList from "@/route-list/unauthorized-route-list.js";
// import MasterLayout from "@/layout/MasterLayout.jsx";
import FullScreenLoader from "@/components/loading/full-screen-loader.jsx";
// import AuthLayout from "@/layout/AuthLayout.jsx";
import "./App.css";
import AuthorizedRouteList from "@/route-list/authorized-route-list.js";
// import validationHelper from "@/utility/ValidationHelper.js";
// import ErrorPage from "../src/pages/unauthorized-pages/error-page";

function App() {
    const isLoggedIn = true;
    // const isLoggedIn = !validationHelper?.isEmpty(localStorage.getItem("UserDetails"));

    let routes = isLoggedIn ? AuthorizedRouteList?.map((item, idx) => (
            <Route
                key={idx.toString()}
                path={item?.path}
                element={
                   
                        <Suspense fallback={<FullScreenLoader/>}>
                            <item.component/>
                        </Suspense>
                   
                }
            />
        ))
        : UnauthorizedRouteList?.map((item, idx) => (
            <Route
                key={idx.toString()}
                path={item?.path}
                element={
                    <AuthLayout>
                        <Suspense fallback={<FullScreenLoader/>}>
                            <item.component/>
                        </Suspense>
                    </AuthLayout>
                }
            />
        ));

    // routes.push(<Route key="404" path="*" element={<ErrorPage/>}/>);

    let router = createBrowserRouter(createRoutesFromElements(routes));

    if (import.meta.hot) {
        import.meta.hot.dispose(() => router.dispose());
    }

    return <RouterProvider router={router}/>;
}

export default App;
