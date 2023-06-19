function getTypeColor(type: string) {
  const colours = {
    normal: 'bg-[#A8A77A]',
    fire: 'bg-[#EE8130]',
    water: 'bg-[#6390F0]',
    electric: 'bg-[#F7D02C]',
    grass: 'bg-[#7AC74C]',
    ice: 'bg-[#96D9D6]',
    fighting: 'bg-[#C22E28]',
    poison: 'bg-[#A33EA1]',
    ground: 'bg-[#E2BF65]',
    flying: 'bg-[#A98FF3]',
    psychic: 'bg-[#F95587]',
    bug: 'bg-[#A6B91A]',
    rock: 'bg-[#B6A136]',
    ghost: 'bg-[#735797]',
    dragon: 'bg-[#6F35FC]',
    dark: 'bg-[#705746]',
    steel: 'bg-[#B7B7CE]',
    fairy: 'bg-[#D685AD]',
  };

  return colours[type as keyof typeof colours];
}

function firstUpperCase(str: string) {
  return str[0].toUpperCase() + str.slice(1);
}

const PokemonCard = ({
  pokemon
}: {
  pokemon: any;
}) => {
  return (
    <div className="w-full flex flex-col">
      <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`}>
        <div className={`bg-gray-100 rounded-md ${getTypeColor(pokemon.types[0].type.name)}`}>
          <img className="w-full" src={pokemon.sprites.front_default} />
        </div>
      </a>
      <p className="ml-2 font-semibold text-gray-400">Nr. {pokemon.id.toString().padStart(4, '0')}</p>
      <p className="ml-2 mt-2 font-semibold text-gray-700 text-[18px]">{firstUpperCase(pokemon.name)}</p>
      <div className="grid grid-cols-2 gap-2 p-2">
        {
          pokemon.types.map((type: any) => (
            <div className={`rounded-md flex justify-center items-center ${getTypeColor(type.type.name)}`}>
              <p className="text-white">{firstUpperCase(type.type.name)}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PokemonCard;