import React from 'react'
import "./StoryContent.css"
import { useEffect } from 'react'
const StoryContent = ({data}) => {
  
 
  useEffect(()=>{
    
  },[])
  

  
    
  return (
    <div className='Stoires_content_container'>
          <img src={data.src} alt="" className='stories' />
          <h5>{data?.quotes?.tag}</h5>
          </div>
  )
}

export default StoryContent