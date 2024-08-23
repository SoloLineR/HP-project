 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { characterApi } from '../../models/character/charater';
import LoaderSpinner from '../loader/LoaderSpinner';

export default function SlideShow() {
   
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: `cover`,
backgroundRepeat: `no-repeat`,
    height: '500px',
    backgroundPosition: `center`
     
  }
   const {data,isLoading} = characterApi.useGetCharactersQuery()
 if (isLoading ||!data) {
  return <LoaderSpinner/>
 }
  return (
  
    <div className="slide-container mx-auto max-w-[400px] border-8 border-GriffindorGold rounded-2xl mt-5">
      
      <Slide arrows={false} >
       {data.map((slideImage, index)=> (
          <div key={index} className='flex flex-col  bg-GriffindorGold  '>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.image === "" ? "https://sololiner.github.io/HP-project/logoH.jpeg": slideImage.image})` }}>
            </div>
            <span className=' mx-auto  font-HarryPotter pt-3 text-2xl' >{slideImage.name}</span>
          </div>
        ))} 
      </Slide>
    </div>
   
  )
}
