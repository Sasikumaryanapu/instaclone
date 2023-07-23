import React from 'react'
import { useState } from 'react';
import "./LikeAndComment.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import Dailog from '../Dailog';
import useBearStore from '../../store';
const LikeAndComment = ({savepost,index,likesPost,liked,saves,savedd}) => {

  const [like,setFlagLike]=useState(false)
  const [flag2,setFlag2]=useState(false)
  const [savebtn,setSave]=useState(false)


  const likes = () => {
    setFlagLike(!like)
    
  }

  const liked_posts=()=>{
    likes()
    likesPost(index)

  }
const saving=()=>{

  setSave(!savebtn) 
 savepost(index)

}


  return (
    <div>
       <div className="post_likes">
        <div className='likes'>
        {liked || like  ? <FavoriteOutlinedIcon onClick={() => likes()} sx={{ color: "red", width: 33, height: 33 }}/> : <FavoriteBorderOutlinedIcon onClick={liked_posts} sx={{ width: 33, height: 33 }} />}
        <ModeCommentOutlinedIcon fontSize='large' onClick={()=>setFlag2(!flag2)}/>
        <SendOutlinedIcon  fontSize='large' className='share'/>
        </div>
        <div>
         {savebtn || saves || savedd ? <BookmarkIcon fontSize='large' sx={{color:"black"}}  onClick={()=>setSave(!savebtn)} /> : <BookmarkBorderIcon fontSize='large'  onClick={saving}/>}
        </div>
      </div>  
        { flag2 ? <Dailog flag2={flag2} setFlag2={setFlag2}/> : null}
    </div>
  )
}

export default LikeAndComment