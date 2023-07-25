import React, { useEffect ,useState} from 'react'
import "./Add.css"

import {useAuth} from "../Authenication"
import useBearStore from "../../store"
import { useNavigate } from 'react-router-dom'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
const Add = () => {
  const bears = useBearStore((state) => state.posts)

  const [flag,setFlag]=useState(true)

  const setStatus = useBearStore((state) => state.setStatus)


  const navigate=useNavigate()

  const addPosts =useBearStore((state) => state.addPosts)
  const addStory=useBearStore((state)=>state.addStory)

  const Reels = useBearStore((state)=>state.reels)
  const addReels = useBearStore((state)=>state.addReels)
  const post =useBearStore((state) => state.posts)

  //using useContext
  // const {value}=useAuth()
  // const [name,setName]=value
  
  const [posts,setPosts]=useState([])
  const [Postpreview,setPostPreview]=useState([])
  const [quote,setQuote]=useState({})
  const adding=(quote)=>{
    var temp=[]
    for(let i=0;i<posts.length;i++){
      temp.push({src:URL.createObjectURL(posts[i]),quotes:quote,likes:["sasi"],index:i})
    }
    console.log(temp)
    const post_objecturls=temp;
    setPostPreview(post_objecturls)

    //postsList
    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage.usersList);
      
      getData = getData.map((e) => {
        if (e.email == sessionStorage?.name) {
          e.postsList = temp
        }
       
        return e;
      });
      localStorage.usersList = JSON.stringify(getData);

      addpost()
      navigate("/home")
    } 

    console.log(localStorage.usersList);
    for(let i=0;i<post_objecturls.length;i++){
      return ()=>{
          URL.revokeObjectURL(post_objecturls[i])
        }
      }
  }


  //posts 

  useEffect(()=>{
    if(!posts) return;
    
      },[posts])


      //Reels 

      const [reels,setReels]=useState([])
      const [ReelsPreview,setReelsPreview]=useState([])
    
      useEffect(()=>{
        if(!reels) return;
    
        let Reels_temp=[]
        for(let i=0;i<reels.length;i++){
          Reels_temp.push({"src":URL.createObjectURL(reels[i]),quotes:quote,"likes":[]})
        }
        
        const Reels_objecturls=Reels_temp;
        setReelsPreview(Reels_objecturls)

        //ReelsList
        if (localStorage?.usersList) {
          let getData = JSON.parse(localStorage.usersList);
          
          getData = getData.map((e) => {
            if (e.email == sessionStorage?.name) {
              e.reelsList = Reels_temp
            }
            return e;
          });
          localStorage.usersList = JSON.stringify(getData);
    
        } else {
        }
    
        // console.log(localStorage.usersList);
        
        for(let i=0;i<Reels_objecturls.length;i++){
            return ()=>{
                URL.revokeObjectURL(Reels_objecturls[i])
              }
            }
    
          },[reels])
    
    
           //stories
  const [story,setStory]=useState([])
  const [storyPreview,setStoryPreview]=useState([])

  useEffect(()=>{
    if(!story) return;

    let story_temp=[]
    for(let i=0;i<story.length;i++){
      story_temp.push({src:URL.createObjectURL(story[i]),quotes:quote,likes:[]})
    }
    const story_objecturls=story_temp;
    setStoryPreview(story_objecturls)
    
         //userlist
         if (localStorage?.usersList) {
        let getData = JSON.parse(localStorage.usersList);
        
        getData = getData.map((e) => {
          if (e.email == sessionStorage?.name) {
            e.stories = story_temp
          }
          return e;
        });
        localStorage.usersList = JSON.stringify(getData);
  
      } else {
      }
  
      console.log(localStorage.usersList);

    for(let i=0;i<story_objecturls.length;i++){
        return ()=>{
            URL.revokeObjectURL(story_objecturls[i])
          }
        }

      },[story])


     
      //single file

      const setProfile_pic=useBearStore((state)=>(state.setProfile_pic))
      const [file,setFile]=useState("")
      const [previews,setPreviews]=useState("")
      
      useEffect(()=>{
        if(!file) return;
    
        let temps=""
       
         temps= URL.createObjectURL(file[0])
         const objecturl=temps;
         setPreviews(objecturl)
         setProfile_pic(objecturl)
         

         //userlist
         if (localStorage?.usersList) {
          let getData = JSON.parse(localStorage.usersList);
        
          getData = getData.map((e) => {
            if (e.email == sessionStorage?.name) {
              e.profile = objecturl
            }
            return e;
          });
          localStorage.usersList = JSON.stringify(getData);
    
        } else {
        }
    
        console.log(localStorage.usersList);

         //setting the status on
        setStatus()

        return ()=>{
          URL.revokeObjectURL(objecturl)

        }
        
          },[file])

  

      const addpost=()=>{

        Postpreview.map( p => addPosts(p))
      

      }

      const addReel=()=>{
        ReelsPreview.map(r => addReels(r))
      }


      const addStories=()=>{
        storyPreview.map(s=>addStory(s))

      }

    
  return (
    <div className='add_container'>
  
       


     { flag ? (
      <div>
      <div className="btns">
      <button onClick={()=>window.history.back()} ><CloseOutlinedIcon/></button><h3>New post</h3>
      <button onClick={()=>setFlag(false)}><DoneOutlinedIcon/></button>
       </div>
      <div className="preview">
 
     
{
  ReelsPreview && ReelsPreview.map( (r,i)=> <img key={i} width={400} height={375} alt={r.name} src={r.src}/>)
}
{
  Postpreview.map( (r,i)=> <img key={i} width={400} height={375} alt={r.name} src={r.src}/>)
}
{
  storyPreview && storyPreview.map( (r,i)=> <img key={i} width={400} height={375} alt={r.name} src={r.src}/>)
}
<img src={previews} alt="" />

      </div>
      </div>): (
        <div className="posting_cotainer">
           <div className="btns">
      <button onClick={()=>setFlag(true)} ><CloseOutlinedIcon/></button>
      <button onClick={()=>adding(quote)}><DoneOutlinedIcon/></button>
       </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
        <div className='posting'>
           {
  Postpreview && Postpreview.map( (r,i)=><img key={i} width={60} height={60} alt={r.name} src={r.src}/> 
)}

{
  ReelsPreview && ReelsPreview.map( (r,i)=> <img key={i} width={60} height={60} alt={r.name} src={r.src}/>)
}
{
  storyPreview && storyPreview.map( (r,i)=> <img key={i} width={60} height={60} alt={r.name} src={r.src}/>)
}
          </div>
          <input type="text" style={{width:"300px",marginRight:"8px"}} placeholder='write here' onChange={(e)=>setQuote({...quote,write:e.target.value})} />
          </div>
          <div className="tags_loc">
 <input type="text" placeholder='add tag' onChange={(e)=>setQuote({...quote,tag:e.target.value})}/><br/>
 <input type="text" placeholder='add location' onChange={(e)=>setQuote({...quote,location:e.target.value})} /><br/>
          </div>
          </div>
      )}


<div className="carousel">
  

<input style={{position:"relative",top:"302px"}} type='file' id='profile'  accept='image/jpg, image/jpeg,image/png'  onChange={(e)=>{
        // if(e.target.files && e.target.files.length > 0){
          setFile(e.target.files)
        // }
      }}  placeholder="add profile"/>

<input style={{position:"relative",top:"302px"}} type='file' id='stories' onClick={()=>addStories()} multiple accept='image/jpg, image/jpeg,image/png'  onChange={(e)=>{
  if(e.target.files && e.target.files.length > 0){
    setStory(e.target.files)
  }
}} placeholder="add story"/>


      <input style={{position:"relative",top:"302px"}} type='file' id='posts' onClick={()=>addpost()} multiple accept='image/jpg, image/jpeg,image/png'  onChange={(e)=>{
        if(e.target.files && e.target.files.length > 0){
          setPosts(e.target.files)
        }
      }} placeholder="add post"/>



       <input style={{position:"relative",top:"302px"}} type='file' id='reels' onClick={()=>addReel()} multiple accept='image/jpg, image/jpeg,image/png'  onChange={(e)=>{
         if(e.target.files && e.target.files.length > 0){
           setReels(e.target.files)
          }
        }} placeholder="add reels"/>

</div>

<div className="labels">
  
<label for="profile" >profile</label>
<label for="stories" >stories</label>
<label for="posts" >posts</label>
<label for="reels" >reels</label>
</div>




    </div>
  )

  

}

export default Add