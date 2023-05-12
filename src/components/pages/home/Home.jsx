import { Link } from "react-router-dom";
import libro from "../../../assets/libro3.png";
import { Redes } from "./Redes";
import "./home.css";
import "./homeQueries.css";

export const Home = () => {
  return (
    <div className="back">
      <div className="home animate__animated  animate__fadeIn">
        <header>
          <Redes />
        </header>
        <div className="homeContent">
          <div className="left-section">
            <header>
              <h1>Guardianes Elementales</h1>
              <div className="escritor">
                <h2>By</h2>
                <h3>J.S Navarro</h3>
              </div>
            </header>
            <main>
              <p className="main-text">
                El rey de las tinieblas ha ideado un plan infalible: derrocar a
                Dios en el escenario de su propia creación: la tierra. Para ello
                romperá el enlace entre el creador y el hombre. Usando a su
                favor la debilidad humana.
              </p>
              <p className="secondary-text">
                Pero esta batalla no la combatiremos solos, tendremos como
                aliados a unos seres antiguos y olvidados:{" "}
                <b>Los Elementales</b>.
                <br />
                Gael, un chico de diecisiete años creará un enlace con un
                Elemental de fuego, llamado <b>Dagon</b>, para luchar contra los
                demonios que amenazan a la tierra, descubrirá así su verdadera
                fuerza interior. <br />
                Esa que existe en cada uno de nosotros.
              </p>
              <Link to="/comprar">
                <button className="buy">¿Quieres saber mas?</button>
              </Link>
            </main>
          </div>

          <div className="book-img">
            <img
              src={libro}
              alt="Imagen del libro Guardianes elementales ojos carmesi"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
