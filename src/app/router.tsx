import { createBrowserRouter,  Outlet, redirect } from "react-router-dom";
import CharactersList from "../components/CharactersList";
import { store } from "../store/store";
import { characterApi } from "../models/character/charater";
import CharacterInfo from "../components/CharacterInfo";
import Navbar from "../components/navbar/Navbar";

const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main>
        <Navbar/>
        <Outlet  />
      </main>
    ),
    children: [
      { index: true, loader: () => redirect("/home") },
      {
        path: "characters",
        element: <CharactersList />,
        loader: () => {
          loadStore().then(async () => {
            store.dispatch(
              characterApi.util.prefetch("getCharacters", undefined, {})
            );
          });
          return null;
        },
      },
      {
        path: "characters/:id",
        element: <CharacterInfo />,
        errorElement:<div>eror</div>,
        loader: ({ params }) => {
          loadStore().then(() => {
            store.dispatch(
              characterApi.util.prefetch("getCharacter", params.id ?? "", {})
            );
          });
          return null;
        },
      },
      {
        path:"/home",
        element: <div>a</div>
      }
    ],
  },
]);
