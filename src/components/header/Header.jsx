import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { SearchOutlined } from '@mui/icons-material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import instagram from "../../Images/insta.png"
const Header = () => {

  const navigate=useNavigate()
  return (
    <div className='header_container'>
        <div><img height={55} width={160} src={instagram}/></div>
        <div className="header_content" >
          <FavoriteBorderOutlinedIcon onClick={()=>navigate("/likespage")} fontSize='large' />
          <ChatBubbleOutlineOutlinedIcon  fontSize='large' onClick={()=>navigate("/chatspage")}/>
        </div>
    </div>
  )
}

export default Header