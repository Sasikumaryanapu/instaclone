import React,{useEffect, useState} from 'react'
import "./Post.css"
import {Pics} from "../../posts"

// import usepoststore from "../../store"
import LikeAndComment from "../common/LikeAndComment"

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
const Post = () => {
  // const posts = usepoststore((state) => state.posts)
  const [posts,setPosts]=useState([])
  const [user_name,setUser_name]=useState("")


  useEffect(()=>{
    if(document.documentElement.scrollHeight + window.innerHeight + 1 >= document.documentElement.scrollTop ){
        window.scrollTo(0,0)
    }
  },[])
  
  useEffect(()=>{

    
    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage?.usersList);
      getData = getData?.map((e) => {
        if (e.email == sessionStorage?.name) {
           setUser_name(e.email)
           setPosts(e.postsList)
           
        }
      
        return e;
      })}
  },[])
  
  

    
    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage?.usersList);
      
      getData = getData?.map((e) => {
        if (e.email == sessionStorage?.name) {
              

             

                if(!e.posts){
                  let pos=[]
                  posts?.map( m =>{
                    pos.push(m)
                  })
                  e.posts=pos
                }
               else{
                let pos=[]
                  posts?.map( m =>{
                    pos.push(m)
                  })
                  e.posts=pos

               }
               
            }
          
            return e;
          })
        localStorage.usersList=JSON.stringify(getData)
      }
    

    //saved posts
    const savepost=(i)=>{
    
    posts?.filter((f)=>{ 
      if(f.index == i){
        if (localStorage?.usersList) {
          let getData = JSON.parse(localStorage?.usersList);
          
          getData = getData?.map((e) => {
            if (e.email == sessionStorage?.name) {
              

              f.saved=true
              if(!e.savedposts){
                
                e.savedposts=[f]
                console.log(e.savedposts)
                }
                else{
                  let saved=e.savedposts
                  f.saves=true
                  saved.push(f)
                  e.savedposts=saved
                  console.log(saved)
                  console.log(e.savedposts)
                }

               
               
            }
          
            return e;
          })
        localStorage.usersList=JSON.stringify(getData)
        }
      }
    
    })
  }
    //likes

  const likesPost=(i)=>{
    
    posts?.filter((f)=>{ 
      if(f.index == i){
        if (localStorage?.usersList) {
          let getData = JSON.parse(localStorage?.usersList);
          
          getData = getData?.map((e) => {
            if (e.email == sessionStorage?.name) {
              
              if(!e.likespost){
                
                e.likespost=[]
                console.log(e.likespost)
                }
                else{
                  let likes=e.likespost
                  f.liked=true
                  f.likedby=sessionStorage?.name
                  likes.push(f)
                  
                  e.likespost=likes
                  console.log(likes)
                  console.log(e.likespost)
                }
               
            }
          
            return e;
          })
        localStorage.usersList=JSON.stringify(getData)
        }
      }
    
    })

  }
    
  return (
<div className="posts">
  
{
  posts?.map((pic,index)=>{
    
    return <div className='posts_container' key={index}>
      <div className="loc">
       {pic.quotes.location ? <span><PlaceOutlinedIcon  className='location' sx={{height:"14px"}} fontSize="small" />  {pic.quotes.location}</span> : null }
      <div className="post_profile">
       <div className='profile'>
        <img src={pic.src} alt="" className='profile_img' />
        <h3>{user_name}</h3>
       </div>
       <MoreVertOutlinedIcon />
      </div>
      </div>
      <div className="post_img" >
        <img src={pic.src} alt="" width={375} height={300} />
      </div>
      <LikeAndComment  savepost={savepost} index={index} savedd={pic.saved} likesPost={likesPost} />
      <div className="quotes">
      <p>{pic.quotes.write}</p>
      <p>{pic.quotes.tag}</p>
      </div>
    </div>

})
}

{
  Pics?.map((pic,index)=>{
    
    return <div className='post_container' key={index}>
      <div className="post_profile">
       <div className='profile'>
        <img src={pic.pic} alt="" className='profile_img' />
        <h3>{pic.name}</h3>
       </div>
       <MoreVertOutlinedIcon />
      </div>
      <div className="post_img">
        <img src={pic.pic} alt="" width={370} height={300} />
      </div>
     
      <LikeAndComment savepost={savepost} index={index} savedd={pic.saved} likesPost={likesPost}/>
    </div>

})
}
</div>
    

  )
}

export default Post