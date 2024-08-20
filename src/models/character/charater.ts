import { baseApi } from "../../shared/api";
import { Character, CharacterId } from "../../shared/types";



export const characterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getCharacters:builder.query<Character[],void>({
            query:()=>"/characters",
        }),
        getCharacter:builder.query<Character[],CharacterId>({
            query:(characterId)=>`/character/${characterId}`
        })
    
    }),
    overrideExisting:true

})


 