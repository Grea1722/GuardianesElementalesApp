import React from "react";
import { PersonajesList } from "./PersonajesList";
import { PersonajePage } from "./PersonajePage";
import { useSelector } from "react-redux";

export const PersonajesRoutes = () => {
  const { personaje } = useSelector((state) => state.personajes);
  return (
    <div className="back">
      {!personaje ? <PersonajesList /> : <PersonajePage />}
    </div>
  );
};
