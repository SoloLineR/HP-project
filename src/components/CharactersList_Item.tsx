 
import { useNavigate } from "react-router-dom";
import { Character } from "../shared/types";

interface CharactersList_ItemProps  {
    character:Character
}
 
export const styelsHP = new Map([
    ["Gryffindor", ["bg-GriffindorDarkRed", "text-GriffindorGold", "border-GriffindorGold"]],
    ["Slytherin", ["bg-SlytherinGreen", "text-SlytherinLightSilver", "border-SlytherinLightSilver"]],
    ["Ravenclaw", ["bg-RavenclawDarkBlue", "text-RavenclawGold", "border-RavenclawGold"]],
    ["Hufflepuff", ["bg-HufflepuffCanary", "text-HufflepuffLightBrown", "border-HufflepuffLightBrown"]],
    ["",["bg-forUnknownBg","text-forUnknownBorderNText","border-forUnknownBorderNText"]]
]);

export default function CharactersList_Item({character}:CharactersList_ItemProps) {
    const navigate = useNavigate();
    
 function handleCharacterClick() {
    navigate(character.id, { relative: "path" });
 }
 if (!character) {
    return null;
  }
 
  
  

  return (
    <li key={character.id}   className={`border-[4px] p-60 mt-10 rounded-45 shadow-md flex justify-around ${styelsHP.get(character.house)?.[0]} ${styelsHP.get(character.house)?.[2]}  ${styelsHP.get(character.house)?.[1]}` }>
        <div className=" flex flex-col justify-center items-center min-w-[300px]">
        <picture className={` border-[5px]  rounded-3xl shadow-md ${styelsHP.get(character.house)?.[2]}`}>
            <img src={character.image === "" ? "/logoH.jpeg" : character.image} alt={`${character.name} image`}  className="rounded-2xl   max-h-[200px]  cursor-pointer"/>
          
        </picture>
        <p className="font-HarryPotter  text-[30px] pt-3 ">{character.name}</p>
        </div>
        <div className={` w-[500px] flex flex-col gap-3 border-2 p-5 rounded-45  ${styelsHP.get(character.house)?.[2]}  ${styelsHP.get(character.house)?.[1]} `}>
       
            <p className="font-HarryPotter text-2xl ">
           House: {character.house}
            </p>
            <p className="font-HarryPotter text-2xl ">
           Actor: {character.actor}
            </p>
            <p className="font-HarryPotter text-2xl ">
            Ancestry: {character.ancestry}
            </p>
            <button onClick={handleCharacterClick} className={`font-HarryPotter  text-2xl border-2 ${styelsHP.get(character.house)?.[2]} pt-2 rounded-45  hover:bg-black`  }>Learn more</button>
          
        </div>
    </li>
  )
}
