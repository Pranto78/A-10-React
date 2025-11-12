import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./Components/HomePage.jsx";
import Home from "./Components/Home.jsx";
import PropertyDetails from "./Pages/PropertyDetails.jsx";
import Featured from "./Components/Featured.jsx";
import WhyUs from "./Components/WhyUs.jsx";
import AllProperty from "./Pages/AllProperty.jsx";
import Login from "./Pages/Login.jsx";
import Registration from "./Pages/Registration.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import AddProperty from "./Private/AddProperty.jsx";
import Error404 from "./Error/Error404.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import MyProperty from "./Private/MyProperty.jsx";
import MyRatings from "./Private/MyRatings.jsx";
import Update from "./Private/Update.jsx";
import MyPropertiesDetails from "./Private/MyPropertiesDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <Featured />
            <WhyUs />
          </>
        ),
      },
      {
        path: "propertyDetails/:id",
        element: <PropertyDetails />,
      },
      {
        path: "allProperties",
        element: <AllProperty></AllProperty>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "addProperty",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "myProperties",
        element: (
          <PrivateRoute>
            <MyProperty></MyProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "myRatings",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },
      {
        path: "updateProperty/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "myPropertiesDetails/:id",
        element: (
          <PrivateRoute>
            <MyPropertiesDetails></MyPropertiesDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
