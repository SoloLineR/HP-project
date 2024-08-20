import { createBrowserRouter, Link, Outlet, redirect } from "react-router-dom";
import CharactersList from "../components/CharactersList";
import { store } from "../store/store";
import { characterApi } from "../models/character/charater";
import CharacterInfo from "../components/CharacterInfo";
const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <header>
          <Link to="characters">Characters</Link>
        </header>
        <Outlet />
      </div>
    ),
    children: [
      { index: true, loader: () => redirect("/characters") },
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
        loader: ({ params }) => {
          loadStore().then(() => {
            store.dispatch(
              characterApi.util.prefetch("getCharacter", params.id ?? "", {})
            );
          });
          return null;
        },
      },
    ],
  },
]);
