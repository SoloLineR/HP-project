import { useParams } from "react-router-dom"
import { CharacterId } from "../shared/types"
import { characterApi } from "../models/character/charater";
import { skipToken } from "@reduxjs/toolkit/query";

  
    
 export default function CharacterInfo() {
    const {id} = useParams<{id:CharacterId}>()
    const {data, isLoading} = characterApi.useGetCharacterQuery(id ?? skipToken);

     
      
      if (isLoading || !data) {
        return <div>Loading...</div>;
      }
 console.log(data[0].name);
 
   return (
     <div className="w-1240 h-96 text-GriffindorDarkRed border-2 border-GriffindorYellow  ">
          {data[0].name}
     </div>
   )
 }
 