import { useParams } from "react-router-dom";
import { CharacterId } from "../shared/types";
import { characterApi } from "../models/character/charater";
import { skipToken } from "@reduxjs/toolkit/query";
import LoaderSpinner from "./loader/LoaderSpinner";
import { styelsHP } from "./CharactersList_Item";

export default function CharacterInfo() {
  const { id } = useParams<{ id: CharacterId }>();
  const { data: character, isLoading  } = characterApi.useGetCharacterQuery(
    id ?? skipToken
  );
 

  if (isLoading || !character) {
    return <LoaderSpinner />;
  }

  return (
    <div className={`max-w-[1240px] font-HarryPotter  text-2xl ${styelsHP.get(character[0].house)?.[1]} border-4 ${styelsHP.get(character[0].house)?.[2]} ${styelsHP.get(character[0].house)?.[0]} mx-auto rounded-45 p-10   shadow-md 
    flex flex-wrap gap-5 justify-center   `}>
      <div className="border-4 border-GriffindorGold   rounded-45 flex items-center   infoq:flex-col   ">
        <img
          src={character[0].image === "" ? `/HP-project/logoH.jpeg` : character[0].image }
          alt=""
          className="m-4 rounded-45  max-h-[200px]  max-w-[150px] "
        />
        <div className="p-10">
          <p className="font-HarryPotter">Name: {character[0].name}</p>
          <p className="font-HarryPotter">Alternative names:</p>
          <ul className="font-HarryPotter">
            {character[0].alternate_names.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" border-4 border-GriffindorGold rounded-45 p-10">
        <h2>Wand:</h2>
        <p className="">wood: {character[0].wand.wood} </p>
        <p className="">core: {character[0].wand.core} </p>
        <p className="">length: {character[0].wand.length} </p>
        <p className="">patronus: {character[0].patronus} </p>
      </div>
      <div className=" border-4 border-GriffindorGold rounded-45 p-10">
        <p>Actor: {character[0].actor}</p>
      </div>
      <div className=" border-4 border-GriffindorGold flex items-center justify-center gap-5 rounded-45 p-10  flex-col infoq:flex-col   ">
      <p>Alive:{character[0].alive ? "true" : "false"}</p>
      <p>Student: {character[0].hogwartsStudent ? "true" : "false"}</p>
      </div>
      <div className=" border-4 border-GriffindorGold rounded-45 p-10     ">
        <p className="font-HarryPotter">Species: {character[0].species}</p>
        <p className="font-HarryPotter">Gender: {character[0].gender}</p>
        <p className="font-HarryPotter">
          Date Of Birth: {character[0].dateOfBirth}
        </p>
        <p className="font-HarryPotter">Wizard: {character[0].wizard ? "true" : "false"}</p>
        <p className="font-HarryPotter">Ancestry: {character[0].ancestry} </p>
        <p className="font-HarryPotter">EyeColour: {character[0].eyeColour} </p>
        <p className="font-HarryPotter">
          hairColour: {character[0].hairColour}{" "}
        </p>
      </div>
    </div>
  );
}
