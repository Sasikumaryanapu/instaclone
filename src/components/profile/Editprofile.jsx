import React, { useState } from 'react'
import "./Editprofile.css"
import useBearStore from '../../store'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useNavigate } from 'react-router-dom';
const Editprofile = () => {

    const [details,setDetails]=useState({})

    const navigate=useNavigate()

  const status=useBearStore.getState().status

    
    // const profile_pic = useBearStore((state) => state.profile_pic)

    var info={}
    var profile_pic;
    const submit_details=()=>{
        // localStorage.user_info=JSON.stringify(details)

        if (localStorage?.usersList) {
            let getData = JSON.parse(localStorage.usersList);
            
            getData = getData.map((e) => {
              if (e.email == sessionStorage?.name) {
              e.details =details
              console.log(e.details)
              }
            
              return e;
            });
          localStorage.usersList = JSON.stringify(getData);

          navigate("/profile")
    }

}



if (localStorage?.usersList) {
  let getData = JSON.parse(localStorage.usersList);
  
  getData = getData.map((e) => {
    if (e.email == sessionStorage?.name) {
       console.log(e.details )
        info=e.details
        profile_pic=e.profile
        console.log(profile_pic)
    }
  
    return e;
  })}


    const close=()=>{
      window.history.back()
    }
  return (
    <div className='edit_container'>
        <div className="save_btn">
        <button onClick={close} ><CloseOutlinedIcon/></button>
        <button onClick={submit_details}><DoneOutlinedIcon/></button>
        </div> 
        <div>
        <img src={profile_pic} alt=""  className={ status && "hey" } />
        <h5 onClick={()=>navigate("/addpage")}>Edit Profile</h5>
        </div>
        <div className="details">
            <input type="text" placeholder='Name' defaultValue={info?.name} onChange={(e)=>setDetails({...details,name:e.target.value})} />
            <input type="text" placeholder='Username' defaultValue={info?.username}  onChange={(e)=>setDetails({...details,username:e.target.value})}/>
            <input type="text" placeholder='Pronoun' defaultValue={info?.pronoun} onChange={(e)=>setDetails({...details,pronoun:e.target.value})} />
            <input type="text" placeholder='Bio' defaultValue={info?.bio}  onChange={(e)=>setDetails({...details,bio:e.target.value})} />
            <select name="gender" id="gender" defaultValue={info?.gender}  onChange={(e)=>setDetails({...details,gender:e.target.value})}>
                <option value="Gender">Gender</option>
                <option value="male">Male</option>
                <option value="male">Female</option>
                <option value="Customize">Customize</option>
                <option value="Prefer not to say">Prefer not say</option>
            </select>
        </div>
        
    </div>
  )
}

export default Editprofile