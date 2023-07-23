import React from 'react'
import { useState } from 'react';
import "./ReelsLikeAndComment.css"
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import Dailog from '../Dailog';
const LikeAndComment = () => {
  const [flagL,setFlagL]=useState(false)
  const [flagC,setFlagC]=useState(false)


  const Likes = () => {
    setFlagL(!flagL)
}

  return (
    <div>
       <div className="Reels_likes_container">
        <div className='Reels_likes' >
        {flagL ? <FavoriteBorderOutlinedIcon onClick={() => Likes()} sx={{ color: "red", width: 33, height: 33 }}/> : <FavoriteBorderOutlinedIcon onClick={() => Likes()} sx={{ width: 33, height: 33 }} />}
        <ModeCommentOutlinedIcon fontSize='large' onClick={()=>setFlagC(!flagC)}/>
        <SendOutlinedIcon  className='share' fontSize='large'/>
        </div>
        <div>
        </div>
      </div>  
        {flagC && <Dailog/>}

      
    </div>
  )
}

export default LikeAndComment