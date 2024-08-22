import { spellsApi } from "../../models/spells/spells"
import LoaderSpinner from "../loader/LoaderSpinner"
import SpellListItem from "./SpellListItem"

 

export default function SpellsList() {

    const {data:spells,isLoading} = spellsApi.useGetSpellsQuery()
if (isLoading || !spells) {
    return <LoaderSpinner />
}
console.log(spells);

  return (
    <div className="flex flex-col text-3xl ">
        <h1 className="font-HarryPotter text-center">All Spells</h1>
        <ul className="flex flex-wrap gap-5 pt-5">
            {spells.map(spell=><SpellListItem key={spell.id} spell={spell}/>)}
        </ul>
    </div>
  )
}
 