import React, { useEffect, useState } from 'react'
import "./Reels.css"
import ReelsLikeAndComment from "../common/ReelsLikeAndComment"
// import { useAuth } from '../Authenication'
// import useBearStore from '../../store'
import { SearchOutlined } from '@mui/icons-material'

const Reels = () => {


  // const Reels = useBearStore((state) => state.reels)
  const [ReelSearch,setReelSearch]=useState([])
  // const [ReelsList,setReelsList]=useState([])

  

    useEffect(()=>{

    
      if (localStorage?.usersList) {
        let getData = JSON.parse(localStorage.usersList);
        
        getData = getData.map((e) => {
          if (e.email == sessionStorage?.name) {

            if(!e.Reels){
                  let reel=[]
                    ReelsList?.map( r =>{
                      console.log("jsdkj")
                      reel.push(r)
                    })
                    e.Reels=reel
                  }
                 else{
                  let reel=[]
                  ReelsList?.map( r =>{
                    reel.push(r)  
                  })
                  e.Reels=reel
  
                 }

                 ReelsList=e.Reels
                 
              }
            
              return e;
            })
          localStorage.usersList=JSON.stringify(getData)
        }
      
    },[])

 
  
  
    var ReelsList=[]
    if (localStorage?.usersList) {
      let getData = JSON.parse(localStorage.usersList);
      
      getData = getData?.map((e) => {
        if (e.email == sessionStorage?.name) {
           
           ReelsList=e.reelsList
            console.log(ReelsList)
          }
      
        return e;
      })}
  




  return ( 
<div>
    <div className='reels_container'>
  
    <div className='Search'><SearchOutlined/><input onChange={(e)=>setReelSearch(e.target.value)} placeholder='search'/></div> 


      {
        ReelSearch ? ReelsList?.filter(f => f.src.toLowerCase().includes(ReelSearch)).map( reels => {
          return <div className='reels_card'>
            <img src={reels.src} alt="" width={370} height={600}  />
            <div className="reels_profile">
            <img src={reels.src} alt=''  width={40} height={40} />
            <h3>{reels.src.slice(0,8)}</h3>
            </div>
            <ReelsLikeAndComment />
            <div className="reels_quote">
      <p>{reels.quotes.write}</p> <br/>
      <p>{reels.quotes.tag}</p>
      </div>
          </div>
        }) :  ReelsList?.map( reels => {
          return <div className='reels_card'>
            <img src={reels.src} alt="" width={370} height={500}  />
            <div className="reels_profile">
            <img src={reels.src} alt=''  width={40} height={40} />
            <h3>{reels.src.slice(0,8)}</h3>
            </div>
            <ReelsLikeAndComment />
            <div className="reels_quote">
      <p>{reels.quotes.write}</p>
      <p>{reels.quotes.tag}</p>
      </div>
          </div>
        }) 
      }

      {
        ReelsList == 0  ? "No reels" : null
      }
    </div>
     </div>


     
  )

  // const {value}=useAuth()
  // const [name]=value
//   return (
//     <div>
//       {
//   name.map( n=> <img width={200} height={200} alt='' src={n}/>)
// }
//     </div>
//   )

}

export default Reels