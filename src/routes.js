import { createBrowserRouter } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
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
        path: "nosotros",
        element: <Nosotros />,
        errorElement: <NoMatch />,
      },
      {
        path: "main",
        element: <Main />,
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
  
]);
