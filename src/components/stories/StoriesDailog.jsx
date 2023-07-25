import React,{useEffect,useState} from 'react'
import "./StoriesDailog.css"
import useBearStore from '../../store'
import Add from "../../components/add/Add"
import { useNavigate } from 'react-router-dom'
import { WebStoriesRounded } from '@mui/icons-material'


const StoriesDailog = () => {
    const setStoryFlag=useBearStore((state)=> state.setStoryFlag)
    // const story = useBearStore((state) => state.story)

    const [stories,setStories]=useState([])

    const navigate=useNavigate()

    useEffect(()=>{
  
    
      if (localStorage?.usersList) {
        let getData = JSON.parse(localStorage.usersList);
        
        getData = getData?.map((e) => {
          if (e.email == sessionStorage?.name) {
             console.log(e.stories)
             console.log("ho")
             setStories(e.storieList)
             
          }
        
          return e;
        })}
    },[stories])

  return (
    <div className='stories_dailog_container' >

   {
     stories != 0 ? stories?.map((story)=>
        <img src={story.src} alt="sasi" width={370} height={667} onClick={()=>setStoryFlag()}/>
       
    ) : navigate("/addpage")
   }



    </div>
  )
}

export default StoriesDailog