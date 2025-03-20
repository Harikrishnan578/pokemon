// src/components/PokemonCard.jsx
import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white text-center">
      <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mx-auto" />
      <h3 className="text-lg font-bold capitalize">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;