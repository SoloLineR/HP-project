
import { useNavigate } from "react-router-dom";
import { Spells } from "../../models/spells/spells";


export default function SpellListItem({spell}:{spell:Spells}) {
    const naavigate = useNavigate()
    function handleClick(){
        naavigate(`/spells/${spell.id}`)
    }
  return (
    <li key={spell.id} className="">
        <button onClick={handleClick} className="text-2xl border-2 border-GriffindorDarkRed text-GriffindorDarkRed p-1 rounded-lg hover:bg-GriffindorGold  ">{spell.name}</button>
      
        
     
    </li>
  )
}
