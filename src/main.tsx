import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
/*
diferença entre forEach e map
forEach e map serve para percorrer um array
o forEach não retorna nada já o map retorna, por isso usa mais o map.*/

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/** o router foi escrito aqui para permitir a sidebar permanecer na pagina assim toda vez que alterar a rota só vai mudar o conteúdo a side bar permanece no seu lugar norma l*/}
  </React.StrictMode>
);
