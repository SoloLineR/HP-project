import { createBrowserRouter,  Outlet, redirect } from "react-router-dom";
import CharactersList from "../components/CharactersList";
import { store } from "../store/store";
import { characterApi } from "../models/character/charater";
import CharacterInfo from "../components/CharacterInfo";
import Navbar from "../components/navbar/Navbar";
 
import Home from "../components/home/Home"; 
import SpellsList from "../components/spells/SpellsList";
import SpellDesc from "../components/spells/SpellDesc";

const loadStore = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(store), 0);
  });

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <main className=" container mx-auto  max-w-[1240px] flex flex-col min-h-screen px-2">
        <Navbar/>
        <Outlet  />
        <footer className="mt-auto">
          <p className="text-center">This is only for learning purposes.
         Data base: https://hp-api.onrender.com/
          </p>
        </footer>
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
        element:  <Home/>,
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
        path:"/spells",
        element:<SpellsList/>
      },
      {
        path:"/spells/:id",
        element:<SpellDesc/>
      }

    ],
  },
]);
