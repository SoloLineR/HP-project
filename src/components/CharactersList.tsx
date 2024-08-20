 
import { useEffect, useState } from "react"
import { characterApi } from "../models/character/charater"
import CharactersList_Item from "./CharactersList_Item"
import { Character } from "../shared/types"

export default function CharactersList() {

 const {data:characters,isLoading} =   characterApi.useGetCharactersQuery()

  const [currentPage,setCurrentPage] =useState(5)
 const  [filtred,setFiltred] = useState<Character[]>([])

 

  useEffect(()=>{
    const sortedByPage = (currentPage:number)=>{ 
      return [...(characters ?? []).slice(0,currentPage)]
    }
     setFiltred(sortedByPage(currentPage))
  },[currentPage,setCurrentPage,characters])

 
 
    useEffect(()=>{
     document.addEventListener(`scroll`,scrollHndler)
     return ()=>{
        document.removeEventListener(`scroll`,scrollHndler)
     }
    },[])

    const scrollHndler = (e:Event)=>{
      const target = e.target as Document
      if (target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight) <100) {
        setCurrentPage(prev=>prev+5)
        
      }
          
    }



if (isLoading) {
  return (<div>loading...</div>)
 }
  return (
    <div className="container w-1240 mx-auto"> 
        <ul className=" flex  flex-col justify-center">
          { filtred.map((character)=>(
            <CharactersList_Item key={character.id} character={character}/>
          )  )}
        </ul>
    </div>
  )
}
