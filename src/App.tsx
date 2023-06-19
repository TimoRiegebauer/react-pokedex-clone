import { createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/pokemon",
    element: <PokemonPage />
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;