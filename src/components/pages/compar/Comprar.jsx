import { useState } from "react";
import { tiendas } from "../../../data/tiendas";
import { paises } from "../../../data/paises";
import "./tiendas.css";

export const Comprar = () => {
  const [paisSeleccionado, setPaisSeleccionado] = useState("");

  const tiendasFiltradas = tiendas.filter(
    (tiendas) => tiendas.pais === paisSeleccionado
  );

  const onSelect = (e) => {
    setPaisSeleccionado(e.target.value);
  };

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="back">
      <main className="tiendas animate__animated animate__fadeInUp">
        <select name="paises" value={paisSeleccionado} onChange={onSelect}>
          <option value="" key="1">
            Seleccione un pais
          </option>
          {paises.map((pais) => (
            <option value={pais.pais} key={pais.pais}>
              {pais.pais}
            </option>
          ))}
        </select>
        <div className="tiendasContainer">
          {paisSeleccionado ? (
            tiendasFiltradas.map((tienda) => (
              <div className="tiendasFiltradas" key={tienda.id}>
                <img src={tienda.img} alt={`logo de tienda ${tienda.nombre}`} />
                <h3>{tienda.nombre}</h3>
                <p>{tienda.pais}</p>
                <button onClick={() => handleButtonClick(tienda.url)}>
                  Comprar
                </button>
              </div>
            ))
          ) : (
            <h4>Seleccione un pais</h4>
          )}
        </div>
      </main>
    </div>
  );
};
