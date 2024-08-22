import { useParams } from "react-router-dom";
import { spellsApi } from "../../models/spells/spells";
import LoaderSpinner from "../loader/LoaderSpinner";

 const gif =["https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXlwaGgwbTJyNXFncGw2aHhlYXZsZ3ZvcHE5a2Rpd3c0MjNkYmR3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fQYbG1kJ5Wptgqacbr/giphy.gif",
    "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWM0bnp5eGNxNDRibG83NDVjOXNhcjlzM3Uxdm5uZWN6a3ZwdHN6NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUYddq5N8tGWQT4HOH/giphy.gif"]

export default function SpellDesc() {
    const { id } = useParams<{ id: string }>();
    const {data,isLoading} = spellsApi.useGetSpellsQuery()
    const nGif = Math.floor(Math.random() * 2)
    console.log(nGif);
    
    if (!data || isLoading ) {
        return <LoaderSpinner/>
    }

    const spellDesc = data.find(e=>e.id === id)
    if (!spellDesc) {
        return <LoaderSpinner/>
    }
  

  return (
    <div className="flex justify-center flex-col items-center gap-1">
    <img src={gif[nGif]}  alt="" />
        <p className=" font-HarryPotter text-[60px]">{spellDesc.name}</p>
        <p className=" text-[40px]">{spellDesc.description}</p>
    </div>
  )
}
