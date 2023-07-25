import React, {  useState } from 'react'
import "./Stories.css"
import {Link, useNavigate} from "react-router-dom"
import StoryContent from './StoryContent'

import useBearStore from '../../store'
import Post from '../posts/Post'
const Stories = () => {
  const [stories]=useState(["as","asa","shad"])
  
  const setStoryFlag=useBearStore((state)=> state.setStoryFlag)
  const Reels = useBearStore((state) => state.reels)
  const story = useBearStore((state) => state.story)

  const status = useBearStore((state) => state.status)
  
const navigate=useNavigate()
  
  const profile=localStorage?.profile_pic
  return (
    <div>
    <div className='stories_container'>
      <div className='container'  onClick={()=>navigate("/storydailog")}>
        <img src={profile} className="addon" alt=''/>
        <p>story</p>
          <div className="blu">
          <Link to="addpage">+</Link>
          </div>
          </div>
 

      {
        // stories.map((d,i)=><StoryContent key={i} data={d}/>)
      }

      
    </div>
    <Post/>
    </div>
  )
}

export default Stories