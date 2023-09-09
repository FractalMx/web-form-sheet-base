import { createBrowserRouter } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrestamosEmprendedor from "./Components/PrestamosEmprendedor";
import MainLayout from "./Layouts/MainLayout";
import Nosotros from "./Views/Nosotros";
import ComoPagar from "./Views/ComoPagar";
import PreguntasFrecuentes from "./Views/PreguntasFrecuentes";
import Main from "./Views/Main";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NoMatch />,
    children: [
      {
       
        index:true,
        element: <Main />,
        errorElement: <NoMatch />,
      },
      {
        path: "main",
        index:true,
        element: <Main />,
        errorElement: <NoMatch />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
        errorElement: <NoMatch />,
      },
      
      {
        path: "comoPagar",
        element: <ComoPagar />,
        errorElement: <NoMatch />,
      },
      {
        path: "preguntasFrecuentes",
        element: <PreguntasFrecuentes />,
        errorElement: <NoMatch />,
      },
      
    ]
  },
  {
    path: "/solicitar",
    element: <PrestamosEmprendedor />,
    errorElement: <NoMatch />,
  },
]);
