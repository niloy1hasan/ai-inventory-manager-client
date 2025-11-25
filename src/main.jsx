import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Root from "./Root.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import PrivateRoutes from "./Components/Routes/PrivateRoutes.jsx";
import AddModel from "./Components/AddModel/AddModel.jsx";
import AllModels from "./Components/AllModels/AllModels.jsx";
import ModelDetails from "./Components/ModelDetails/ModelDetails.jsx";
import UpdateModel from "./Components/UpdateModel/UpdateModel.jsx";
import MyModels from "./Components/MyModels/MyModels.jsx";
import PurchasedModel from "./Components/PurchasedModel/PurchasedModel.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
    },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register
      },{
        path: '/add-model',
        element:
        <PrivateRoutes>
          <AddModel></AddModel>
        </PrivateRoutes>
      },
      {
        path: '/models',
        Component: AllModels,
      },
      {
        path: '/models/:id',
        element: 
        <PrivateRoutes>
          <ModelDetails></ModelDetails>
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://ai-inventory-manager-server.vercel.app/models/${params.id}`).then(res => res.json())
      },
      {
        path: '/update-model/:id',
        element: 
        <PrivateRoutes>
          <UpdateModel></UpdateModel>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`https://ai-inventory-manager-server.vercel.app/models/${params.id}`).then(res => res.json())
      },
      {
        path: '/my-models',
        element:
        <PrivateRoutes>
          <MyModels></MyModels>
        </PrivateRoutes>
      },
      {
        path: '/purchased-models',
        element:
        <PrivateRoutes>
          <PurchasedModel></PurchasedModel>
        </PrivateRoutes>
      },
      {
        path: "/*",
        Component: NotFound
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
