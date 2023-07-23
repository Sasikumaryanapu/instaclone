import React,{useEffect, useState} from 'react'
import "./Likespage.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LikeAndComment from '../common/LikeAndComment';
const Likespage = () => {

    let [likedPost,setLikedPost]= useState([])
    const [flag,setFlag] =useState(false)
    // const liked_posts =()=>{

    useEffect(()=>{

        if (localStorage?.usersList) {
            let getData = JSON.parse(localStorage.usersList);
            
            getData = getData.map((e) => {
              if (e.email === sessionStorage?.name) {
                setLikedPost(e.likespost) 
                  
                  console.log(likedPost)
        
              }
            
              return e;})}
    },[])

  

    //   }
  return (

    <div>
  <div className="arrow">
       
       <KeyboardBackspaceIcon fontSize='large' onClick={()=>window.history.back()}/> <h3>Liked Posts</h3>
       </div> 
     
  { flag ?  likedPost?.map((l,index)=>{
      return <div className='post_container' key={index}>
      <div className="post_profile">
       <div className='profile'>
        <img src={l.src} alt="" className='profile_img' />
        <h3>{sessionStorage?.name}</h3>
       </div>
       <MoreVertOutlinedIcon />
      </div>
      <div className="post_img">
        <img src={l.src} alt="" width={370} height={300} />
      </div>
      <LikeAndComment liked={l.liked} index={index}/>
      <p>liked by <span>{l.likedby}</span></p>
    </div>
    })
 :
<div className="saved_posts" >
     {
      likedPost?.map((d,index)=>
      <div className="liked_card">

        <img src={d.src} alt=""  width={60} height={60} onClick={()=>setFlag(true)}/>
        <p> liked by the profile id {d.likedby}</p  >
      </div>

            )
      }
</div>
}
</div>



  )
}

export default Likespage