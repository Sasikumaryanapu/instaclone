import React,{useEffect, useState} from 'react'
import "./Profile.css"

import LikeAndComment from '../common/LikeAndComment';
import Beach from "../../Images/beach.jpg"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import { button, useNavigate } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {  ArrowDropDownOutlined } from '@mui/icons-material'
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import useBearStore from '../../store'
import StoryContent from '../stories/StoryContent'
// import {useAuth} from "../Authenication"

import SearchContent from '../search/SearchContent'
const Profile = () => {

  const [flag,setFlag]=useState(false)
  const [flag1,setFlag1]=useState(true)
  const [flag2,setFlag2]=useState(false)
  const [flag3,setFlag3]=useState(false)





  const navigate=useNavigate()
  // const reels = useBearStore((state) => state.reels)
  const avatar=useBearStore((state)=>state.avatar)
  const changeAvatar=useBearStore((state)=>state.changeAvatar)

  // const {value}=useAuth()
  // const [name]=value
  // const posts = useBearStore((state) => state.posts)
  const status=useBearStore.getState().status
  // const stories=useBearStore.getState().posts


  
  
  useEffect(()=>{
    if(document.documentElement.scrollHeight + window.innerHeight >= document.documentElement.scrollTop ){
        window.scrollTo(0,0)
    }

  },[])
  // const [stories,setStories] = useState([])
  var posts_list,username,stories=[];
  var details={}
  var storie=[]
  if (localStorage?.usersList) {
    let getData = JSON.parse(localStorage.usersList);
    
    getData = getData?.map((e) => {
      if (e.email == sessionStorage?.name) {
        //  setUser_name(e.email)
         console.log(e.details )
         details=e.details
         username=e.email
         stories=e.stories
         storie=e.storieList
          // username=e.details.username
          // bio=e.details.bio
          posts_list=e.posts
          changeAvatar(e.profile)

      }
    
      return e;})}

  
 

     let [savedpost,setSavedpost]= useState([])
      const saved_posts =()=>{

setFlag2(false)
  if (localStorage?.usersList) {
    let getData = JSON.parse(localStorage.usersList);
    
    getData = getData?.map((e) => {
      if (e.email === sessionStorage?.name) {
        setSavedpost(e.savedposts) 
          
          console.log(savedpost)

      }
    
      return e;})}
      setFlag1(false)

      }


      useEffect(()=>{

    
          if (localStorage?.usersList) {
            let getData = JSON.parse(localStorage.usersList);
            
            getData = getData?.map((e) => {
              if (e.email == sessionStorage?.name) {
    
                    if(!e.storiesList){
                        let storie=[]
                        stories?.map( r =>{
                          storie.push(r)
                        })
                        e.storieList=storie
                      }
                     else{
                      let storie=[]
                        stories?.map( r =>{
                          storie.push(r)
                        })
                        e.storieList=storie
      
                     }
                     
                  }
                
                  return e;
                })
              localStorage.usersList=JSON.stringify(getData)
            }
          
        },[])
    
     
  return (
    <div className="profiles">
      <div className="circle" onClick={()=>navigate("/addpage")} >+</div>
    <div className='profile_container'>
      <img src={avatar} alt="" className={status ? "status" : "round"} />
      <div className="profile_sec">
      <div className="profile_card">
        <div className="post">
          <h3>{posts_list?.length || 0}</h3>
          <p>posts</p>
        </div>
        <div className="followers">
          <h3>35</h3>
          <p>followers</p>
        </div>
        <div className="following">
          <h3>45</h3>
          <p>following</p>
        </div>
      </div>
      <button onClick={()=>navigate("/editprofile")}>Edit profile</button>
    </div>
    </div>
    <div className="gallery_container">
      <div className="profile_head">
        <h4>{details?.username}</h4>
        <p>{details?.bio}</p>
        <p>Coding is all about solving 💻 </p>
      </div>
      <div className="story_high">
        <div className="storyhig">

        <h3>Story highlights</h3>
        {flag ? <ArrowDropUpIcon onClick={()=>setFlag(false)}/> : <ArrowDropDownOutlined onClick={()=>setFlag(true)}/>}
        </div>
        <div className={flag ? "storieshig" : "storieshigs"}>

<div className="move" >

        {
        storie?.map((d,i)=><StoryContent key={i} data={d}/>)
      }
</div>
        </div>
      </div>
      <div className="tags">
       <AppsOutlinedIcon onClick={()=>{setFlag1(true);setFlag3(false)}} /> 
        {/* <button><MenuOutlinedIcon/></button>  */}
        {/* <button><PersonPinOutlinedIcon/></button>  */}
      <BookmarkIcon onClick={()=>saved_posts()}/> 

      </div>
      <div className="gallery">

        {
          
      flag1 ? <div className="posts_in_profile move_up" >
     {
      flag2 ? posts_list?.map((d,index)=>
<div className='posts_container move_down'>
<div className="loc">
       {d?.location ? <span><PlaceOutlinedIcon  className='location' sx={{height:"14px"}} fontSize="small" />  {d.quotes.location}</span> : null }
      <div className="post_profile">
       <div className='profile'>
        <img src={d.src} alt="" className='profile_img'  />
        <h3>{username}</h3>
       </div>
       <MoreVertOutlinedIcon />
      </div>
      </div>
      <div className="post_img">
        <img src={d.src} alt="" width={370} height={300} />
      </div>
      <LikeAndComment/>
    </div>            ) :  posts_list?.map((p,index)=>
          // <SearchContent key={index} posts={d.src} />
          <img src={p.src} alt=""  width={120} height={120} onClick={()=>setFlag2(true)}/>
          )
      }

     </div> :
     <div className="savedposts" >
     {/* {
      savedpost?.map((d,index)=>
          // <SearchContent key={index} posts={d.src} />
          <img src={d.src} alt=""  width={120} height={120}/>
          )
      } */}
       {
      flag3 ? savedpost?.map((d,index)=>
<div className='post_container'>
<div className="loc">
       {d?.location ? <span><PlaceOutlinedIcon  className='location' sx={{height:"14px"}} fontSize="small" />  {d.quotes.location}</span> : null }
      <div className="post_profile">
       <div className='profile'>
        <img src={d.src} alt="" className='profile_img'  />
        <h3>{d.name}</h3>
       </div>
       <MoreVertOutlinedIcon />
      </div>
      </div>
      <div className="post_img">
        <img src={d.src} alt="" width={370} height={300} />
      </div>
      <LikeAndComment saves={d.saves} />
    </div>            ) :  savedpost?.map((p,index)=>
          // <SearchContent key={index} posts={d.src} />
        
          <img src={p.src} alt=""  width={120} height={120} onClick={()=>setFlag3(true)}/>
          )
      }

     </div>}
   

     </div>
      {/* <img src={Beach} alt="" />
      <img src={Beach} alt="" />
      <img src={Beach} alt="" />
      <img src={Beach} alt="" /> */}
      </div>
    
    </div>
  )
}

export default Profile