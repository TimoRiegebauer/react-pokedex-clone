import { createBrowserRouter } from "react-router-dom";
import CountPage from "./pages/CountPage";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CountPage />
  }
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;