import { Link } from "react-router-dom";
 

 

export default function Navbar() {
  return (
    <header className="container mx-auto flex justify-between items-center mt-5 mb-10 max-w-[1240px] infoq:flex-col " >
        <img src="/Harry_Potter_wordmark.svg" alt="" className=" h-[68px]" />
      
        <ul className="flex justify-around   gap-10 text-[20px] font-HarryPotter">
            <li>
            <Link className=" hover:text-GriffindorYellow"  to="home">Home</Link>
            </li>
            <li>
            <Link className=" hover:text-GriffindorYellow"  to="characters">Characters</Link>
             </li>
             <li>
            <Link className=" hover:text-GriffindorYellow" to="spells">Spells</Link>
             </li>
        </ul>
    </header>
  )
}
