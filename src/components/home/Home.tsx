import Select, { SingleValue } from "react-select";
import SlideShow from "../slideShow/SlideShow";
import { useState } from "react";
import { characterApi } from "../../models/character/charater";
import { useNavigate } from "react-router-dom";
import "./reactSelectSTyle.css"
interface Option {
    value: string;
    label: string;
}

export default function Home() {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const navigate = useNavigate();
  const {data} = characterApi.useGetCharactersQuery()
  if (!data) {
    return null
  }

 
    
  function onChange(e:SingleValue<Option>) {
    setSelectedOption(e)
    if (e !== null) {
        navigate(`/characters/${e.value}`);
    }
    
  }

  const optionsC = data.map((c)=>({
    value: c.id,
    label:c.name
  }))
  const onInputChange = (inputValue: string) => {
    const result = inputValue.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
     
    const char = optionsC.filter(word => {
      return result.split('').some(letter => word.label.includes(letter))})
      setSelectedOption(char[0])
    
  };
    
  return (
    <div className="container max-w-[1240px] mx-auto text-[40px] font-HarryPotter " > 
        <h1  className="text-center mb-5 text-[40px]  ">Discover Harry Potter Characters</h1>
        <Select
        placeholder="Find character..."  
        className="react-select-container "
        classNamePrefix="react-select"
        options={optionsC} 
        value={selectedOption}
        onChange={onChange}
        onInputChange={onInputChange}
        />
        <SlideShow/>
    </div>
  )
}
