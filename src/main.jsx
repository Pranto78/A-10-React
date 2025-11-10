import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './Components/HomePage.jsx';
import Home from './Components/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
