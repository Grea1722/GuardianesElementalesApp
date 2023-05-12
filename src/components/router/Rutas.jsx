import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "../shared/sidebar";
import { Home } from "../pages/home/Home";
import { PersonajesList } from "../pages/personajes/PersonajesList";
import { PersonajesRoutes } from "../pages/personajes/PersonajesRoutes";
import { Razas } from "../pages/razas/Razas";
import { Comprar } from "../pages/compar/Comprar";

export const Rutas = () => {
  return (
    <HashRouter>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="personajes" element={<PersonajesRoutes />} />
        <Route path="razas" element={<Razas />} />
        <Route path="comprar" element={<Comprar />} />
      </Routes>
    </HashRouter>
  );
};
