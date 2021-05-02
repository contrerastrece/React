import React, { useState} from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  // variable de estado para el tipo de pokemon
  const [type, setType] = useState("");

  // variable de estado para la Generation del Pokemon
  const [generation, setGeneration] = useState("");

  // variable de estadp para el pokemon selecionado
  const [pokemon, setPokemon] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Pokemon</h3>
      <SelectList
        title="generation"
        url="https://pokeapi.co/api/v2/generation"
        handleChange={(e) => {
          setGeneration(e.target.value);
        }}
      />

      {/* si type tiene valor mostrar el select del Region */}
      {generation && (
        <SelectList
          title="types"
          url={`https://pokeapi.co/api/v2/generation/${generation}`}
          handleChange={(e) => {
            setType(e.target.value);
          }}
        />
      )}

      {/* si Region tiene valor entonves mostrar el select del Pokemon */}
      {type && (
        <SelectList
          title="pokemon_species"
          url={`https://pokeapi.co/api/v2/generation/${generation}`}
          handleChange={(e) => {
            setPokemon(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {generation} - {type} - {pokemon}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
