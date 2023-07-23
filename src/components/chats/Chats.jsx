import React, { useEffect,useState} from 'react'
import "./Chats.css"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Chats = () => {


    const [chats,setChats] =useState([])
    useEffect(()=>{

        if(localStorage?.usersList){
            let getData = JSON.parse(localStorage.usersList);

            setChats(getData)
            console.log(getData)
   
        }

        console.log(chats)
        
    },[])

  return (
      <div className='chats_container'>
       <div className="arrow">
       
        <KeyboardBackspaceIcon fontSize='large' onClick={()=>window.history.back()}/> <h3>messages</h3>
        </div> 
        {
            chats?.map( c => 
                <div className="chats_card">
                    <img src={c?.profile} alt="" width={50} height={50} />
                    <p>{c?.email}</p>
                </div> )
        }


    </div>
  )
}

export default Chats