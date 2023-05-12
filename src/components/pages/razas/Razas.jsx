import { razas } from "../../../data/razas";
import "./razas.css";
import { Elementales, Demonios, Humanos, Angeles } from "../../../assets";

export const Razas = () => {
  const images = { Elementales, Demonios, Humanos, Angeles };

  return (
    <div className="back">
      <main className="razas animate__animated animate__fadeInDown">
        {razas.map((raza) => (
          <div className="razaCard" key={raza.nombre}>
            <img
              src={images[raza.nombre]}
              alt={`Imagen de la raza ${raza.nombre}`}
            />
            <div className="texto">
              <h2>{raza.nombre}</h2>
              <p>{raza.info}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};
