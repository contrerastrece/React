import React, { useState, useEffect } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  // variable de estado para el tipo de pokemon
  const [type, setType] = useState("");

  // variable de estado para la región del Pokemon
  const [region, setRegion] = useState("");

  // variable de estadp para el pokemon selecionado
  const [pokemon, setPokemon] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>Pokemon</h3>
      <SelectList
        title="type"
        url=""
        handleChange={(e) => {
          setType(e.target.value);
        }}
      />
      
      {/* si type tiene valor mostrar el select del Region */}
      {type && (
        <SelectList
          title="region"
          url=""
          handleChange={(e) => {
            setRegion(e.target.value);
          }}
        />
      )}

      {/* si Region tiene valor entonves mostrar el select del Pokemon */}
      {region && (
        <SelectList
          title="pokemon"
          url=""
          handleChange={(e) => {
            setPokemon(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {type} - {region} - {pokemon}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
