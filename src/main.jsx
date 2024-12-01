import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Dashboard from './Home/Pages/Dashboard';
import Course from './Home/Pages/Course';
import Calender from './Home/Pages/Calender';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
