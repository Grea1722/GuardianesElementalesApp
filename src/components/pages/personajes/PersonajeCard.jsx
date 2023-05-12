import { useDispatch } from "react-redux";
import { images } from "../../../data/characterImg";
import "./personajes.css";
import { mostrarPersonaje } from "../../../store/personajes/personajesSlice";

export const PersonajeCard = ({ id, nombre, raza, info }) => {
  const cardImage = images[nombre];
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(mostrarPersonaje({ id, nombre, raza, info }));
  };

  return (
    <div
      className="card  animate__animated animate__fadeIn"
      onClick={handleClick}
    >
      <div className="content">
        <img src={cardImage} alt="" />
      </div>
      <div className="text">
        <h3>{nombre}</h3>
      </div>
    </div>
  );
};
