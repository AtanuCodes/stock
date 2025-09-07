import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import PastEvent from './components/PresentEvent';
import TradingDashboard from "./components/PresentEvent";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <TradingDashboard />,
  },
  
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);