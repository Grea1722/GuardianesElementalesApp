import { createSlice } from "@reduxjs/toolkit";
import { personajes } from "../../data/personajes.js";

export const personajesSlice = createSlice({
  name: "personajes",
  initialState: {
    Characters: personajes,
    isSelected: false,
    personaje: null,
  },
  reducers: {
    mostrarPersonaje: (state, action) => {
      state.personaje = action.payload;
    },
    borrarPersonaje: (state, action) => {
      state.personaje = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { mostrarPersonaje, borrarPersonaje } = personajesSlice.actions;
