import { baseApi } from "../../shared/api"

export type Spells ={ 
    id : string
    name:string
    description:string
}

export const spellsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getSpells:builder.query<Spells[],void>({
            query:()=>"/spells",
        }),
       
    }),
    overrideExisting:true

})


 