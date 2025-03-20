
"use client";
import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        const fetchDetails = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        });
        
        const details = await Promise.all(fetchDetails);
        const formattedPokemon = details.map((poke) => ({
          name: poke.name,
          image: poke.sprites.front_default,
        }));
        setPokemonList(formattedPokemon);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, [offset]);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button 
          onClick={() => setOffset((prevOffset) => Math.max(prevOffset - limit, 0))} 
          disabled={offset === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button 
          onClick={() => setOffset((prevOffset) => prevOffset + limit)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;