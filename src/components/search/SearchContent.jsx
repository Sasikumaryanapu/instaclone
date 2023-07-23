import React,{useEffect, useState} from 'react'
import "./SearchContent.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import LikeAndComment from '../common/LikeAndComment'
import useBearStore from '../../store';
const SearchContent = ({search}) => {

  // const posts=useBearStore.getState().posts


  
  const [flag,setFlag]=useState(false)

  const [posts,setPosts]=useState([])
  const [user_name,setUser_name]=useState("")
  
  useEffect(()=>{
    if(document.documentElement.scrollHeight + window.innerHeight >= document.documentElement.scrollTop ){
        window.scrollTo(0,0)
    }
  })

  useEffect(()=>{

  
    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage.usersList);
      
      getData = getData.map((e) => {
        if (e.email == sessionStorage?.name) {
           setUser_name(e.email)
           setPosts(e.posts)
           
        }
      
        return e;
      })}
  },[posts])
  return (
    <div>
      {
        posts ?  <div className='Seacrh_Content_Container'>
        {  
           flag ? (posts.filter(f=>f.tag == search).map(d=>
           <div className='posts_container moveup' >
             <div className="loc">
       {d?.location ? <span><PlaceOutlinedIcon  className='location' sx={{height:"14px"}} fontSize="small" />  {d.quotes.location}</span> : null }
           <div className="post_profile">
            <div className='profile'>
             <img src={d.src} alt="" className='profile_img'  />
             <h3>{user_name}</h3>
            </div>
            <MoreVertOutlinedIcon />
           </div>
           </div>

           <div className="post_img">
             <img src={d.src} alt="" width={370} height={300} />
           </div>
           <LikeAndComment/>
         </div>)) :<div className='card_container'>
        { posts.filter(f=>f.tag == search).map(d=><img src={d.src} className='images' onClick={()=>setFlag(!flag)} alt="" />)}
         
         </div>
         }
     </div> :<h1>No Posts</h1>}
      
    </div>
   
  )
}

export default SearchContent