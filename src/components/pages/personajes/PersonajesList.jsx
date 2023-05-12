import React, { useState } from "react";
import { PersonajeCard } from "./PersonajeCard";
import { useSelector } from "react-redux";
import { Buscar } from "../../../assets";

const razas = [
  { id: 1, raza: "Humanos" },
  { id: 2, raza: "Elementales" },
  { id: 3, raza: "Demonios" },
  { id: 4, raza: "Angeles" },
];

export const PersonajesList = () => {
  const { Characters } = useSelector((state) => state.personajes);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCharacters = Characters.filter((character) => {
    const characterMatch = character.nombre
      .toLowerCase()
      .includes(search.toLowerCase());
    const razaMatch = filter ? character.raza === filter : true;

    return characterMatch && razaMatch;
  });

  const onInputChange = (event) => {
    setSearch(event.target.value);
  };

  const onSelectChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="personajeList animate__animated  animate__fadeInLeft">
      <div className="search">
        <label className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            value={search}
            name="search"
            onChange={onInputChange}
          />
          <img src={Buscar} alt="search icon" />
        </label>

        <select value={filter} onChange={onSelectChange}>
          <option value="">Seleccionar</option>
          {razas.map((raza) => (
            <option key={raza.id} value={raza.raza}>
              {raza.raza}
            </option>
          ))}
        </select>
      </div>
      <div className="cards ">
        <h2>Personajes</h2>
        <div className="cardContainer">
          {filteredCharacters &&
            filteredCharacters.map((character) => {
              return <PersonajeCard key={character.id} {...character} />;
            })}
        </div>
      </div>
    </div>
  );
};
