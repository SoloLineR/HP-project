import { Link } from "react-router-dom";

 

export default function Navbar() {
  return (
    <header className="container mx-auto flex justify-around items-center mt-5">
        <img src="/Harry_Potter_wordmark.svg.png" alt="" className=" h-[68px]" />
        <ul className="flex justify-around   gap-10 text-[20px] font-HarryPotter">
            <li>
            <Link  to="home">Home</Link>
            </li>
            <li>
            <Link to="characters">Characters</Link>
             </li>
             <li>
            <Link to="spells">Spells</Link>
             </li>
        </ul>
    </header>
  )
}
