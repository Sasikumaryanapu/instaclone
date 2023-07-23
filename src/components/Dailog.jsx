import React from 'react'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import "./Dailog.css"
import beach from '../Images/beach.jpg'
import { useState } from "react"

const Dailog = ({setFlag2}) => {
    const [flag0,setFlag0]=useState(false)

  
    const [comment,setComment]=useState([])
  
// //   const [flag3,setFlag3]=useState(false)

// //   const saves = () => {
// //     setFlag3(!flag3)
// //   }

const likes = () => {
    setFlag0(true)
}

  
  const comments=(e)=>{
  
    if(e.target.value !== " "){
  
      setComment([...comment,e.target.value])
      e.target.value=" "
  
      setTimeout(()=>{
        // props.closeDailog()
        
        document.querySelector(".comments_dailog").classList.remove("comments_dailog")
      },3000)
    }
    return false
  }

 const closeComments=(e)=>{

  if(e.target.value == " ")
  {
    setFlag2(false)
  }

  }
  return (
//     <div  className={true ? "Comments_dailog":"Search_Comments"} >
//     <div className='lin'>
//     <h2>Comments</h2>
//     <span></span>
//     </div>
//     <div className="comments">
//     {
//       comment.map((v,index)=> 
//         <div className='comments_card' key={index}>
//           <div className='comments_card'>
//           <img src={beach} alt="" />
//           <div className='cnames'>
//           <h5>{v}</h5>
//           <p>insta_fam</p>
//           </div>
//           </div>
//            {flag0? <FavoriteOutlinedIcon onClick={() => likes()} sx={{ color: "red", width: 15, height: 15 }}/> : <FavoriteBorderOutlinedIcon onClick={() => likes()} sx={{ width: 15, height: 15 }} />}

//           </div>
       
//         )
//     }
//     </div>
//     <div className="inpbar">
//       <img src={beach} alt="" />
//    <input id='comt' type='text'  placeholder='Add a comment' onClick={(e)=>comments(e)}/>
//     </div>
//   </div>

<div className={true ? "comments_dailog":"search_comments"}  onClick={(e)=>closeComments(e)}>
    <div className="comments_head" >
        <h4>comments</h4>
        <p></p>
    </div>
    <div className="comments">
    {
      comment.map((v,index)=> 
        <div className='comments_card' key={index}>
          <div className='comments_card'>
          <img src={beach} alt="" />
          <div className='cnames'>
          <p>insta_fam</p>
          <p>{v}</p>
          </div>
          </div>
           {flag0? <FavoriteOutlinedIcon onClick={() => likes()} sx={{ color: "red", width: 15, height: 15 }}/> : <FavoriteBorderOutlinedIcon onClick={() => likes()} sx={{ width: 15, height: 15 }} />}

          </div>
       
        )
    }
    </div>
    <div className="comments_inp">
        <img src={beach} alt="" />
        <input type="text" autoFocus placeholder='Add a comment' onClick={(e)=>comments(e)} />
    </div>

</div>
  )
}

export default Dailog