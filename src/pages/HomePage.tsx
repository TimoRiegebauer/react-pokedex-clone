import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-gray-900 text-white flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl font-semibold">Pokedex by Timo</h1>
      <Link to="/pokemon" className="text-blue-500 hover:underline">Pokemon</Link>
    </div>
  );
}

export default HomePage;