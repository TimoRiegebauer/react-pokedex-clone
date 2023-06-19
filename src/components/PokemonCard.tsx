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
    <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank">
      <div className="w-full flex flex-col border-[1px] hover:bg-gray-800 duration-300 border-gray-800 rounded-lg p-8 cursor-pointer">
        <div className="rounded-md">
          <img className="w-full" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id.toString().padStart(3, '0')}.png`} />
        </div>
        <p className="ml-2 font-semibold text-gray-400">Nr. {pokemon.id.toString().padStart(4, '0')}</p>
        <p className="ml-2 mt-2 font-semibold text-white text-[18px]">{firstUpperCase(pokemon.name)}</p>
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
    </a>
  );
}

export default PokemonCard;