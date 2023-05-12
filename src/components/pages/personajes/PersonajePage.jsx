import { useDispatch, useSelector } from "react-redux";
import { images } from "../../../data/characterImg";
import { atras } from "../../../assets";
import { borrarPersonaje } from "../../../store/personajes/personajesSlice";
import "./personajesQueries.css";

export const PersonajePage = () => {
  const dispatch = useDispatch();
  const { personaje } = useSelector((state) => state.personajes);
  //!imagen que pondermos de fondo en base al nombre del personaje

  const backImage = images[personaje.nombre];

  const handleClick = () => {
    dispatch(borrarPersonaje());
  };
  return (
    <div
      className="character-page"
      style={{ backgroundImage: `url(${backImage} )` }}
    >
      <div className="blurCharacter">
        <div className="backButton">
          <button onClick={handleClick}>
            <img src={atras} alt="Regresar a pagina de personajes" />
            <span>Regresar</span>
          </button>
        </div>

        <main className="characterContent">
          <div className="imagenCharacter">
            <img src={backImage} alt={`Imagen de ${personaje.nombre}`} />
          </div>
          <div className="personajeInfo">
            <h3>{personaje.nombre}</h3>
            <p>{personaje.info}</p>

            {personaje.raza && (
              <div className="raza">
                <h4>Raza</h4>
                <img
                  src={images[personaje.raza]}
                  alt={`Imagen raza ${personaje.raza}`}
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
