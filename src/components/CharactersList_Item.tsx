 
import { useNavigate } from "react-router-dom";
import { Character } from "../shared/types";

interface CharactersList_ItemProps  {
    character:Character
}



export default function CharactersList_Item({character}:CharactersList_ItemProps) {
    const navigate = useNavigate();
    
 function handleCharacterClick() {
    navigate(character.id, { relative: "path" });
 }
 if (!character) {
    return null;
  }

  return (
    <li key={character.id}   className="border-[4px] border-GriffindorGold p-60 mt-10 rounded-45 shadow-md flex justify-around bg-GriffindorDarkRed  ">
        <div className=" flex flex-col justify-center items-center ">
        <picture className="border-[5px] border-GriffindorGold rounded-3xl shadow-md ">
            <img src={character.image} alt={`${character.name} image`}  className="rounded-2xl   max-h-[200px]" onClick={handleCharacterClick}/>
        </picture>
      
        </div>
        <div className="w-[500px] flex flex-col border-2 p-5 rounded-45  border-GriffindorGold  text-GriffindorGold ">
        <p className="font-HarryPotter  text-40 "> Name: {character.name}</p>
            <p className="font-HarryPotter text-40 ">
           House: {character.house}
            </p>
            <p className="font-HarryPotter text-40 ">
           Actor: {character.actor}
            </p>
          
        </div>
    </li>
  )
}
