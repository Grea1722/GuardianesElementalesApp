import React, { useState } from "react";
import { Link } from "react-router-dom";
import { personajes, home, Razas, Tienda, Cerrar, Abrir } from "../../assets";

export const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const btnImage = isVisible ? Cerrar : Abrir;

  const handleVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <button onClick={handleVisible} className="showSidebarBtn">
        <img src={btnImage} alt="Icono boton abrir/cerrar sidebar" />
      </button>
      <div
        className={`sidebar ${
          isVisible
            ? "animate__animated animate__fadeInLeft"
            : "animate__animated animate__fadeOutLeft"
        } `}
      >
        <h2>Guardianes Elementales</h2>
        <hr />
        <div className="links">
          <Link to="/" rel="Enlace homepage">
            <img src={home} alt="Icono home button" />
            Inicio
          </Link>
          <Link to="/personajes" rel="Enlace personajes">
            <img src={personajes} alt="Icono para enlace a personajes" />
            Personajes
          </Link>
          <Link to="/razas" rel="Enlace razas">
            <img src={Razas} alt="Icono para enlace a razas" />
            Razas
          </Link>
          <Link to="/comprar" rel="Enlace compras">
            <img src={Tienda} alt="Icono para enlace a compras" />
            Obtener
          </Link>
        </div>
      </div>
    </>
  );
};
