import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState<any[]>([]);

  useEffect(() => {
    loadPokemonList();
  }, []);

  const loadPokemonList = async () => {
    const pokemonList = await (await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")).json();

    const newPokemon = await Promise.all(pokemonList.results.map(async (pkm: any) => {
      const pokemonData = await (await fetch(pkm.url)).json();
      return pokemonData;
    }));

    setPokemon(newPokemon);
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-8 gap-8">
      {
        pokemon.map((pkm, index) => (<PokemonCard key={index} pokemon={pkm} />))
      }
    </div>
  );
}

export default PokemonPage;