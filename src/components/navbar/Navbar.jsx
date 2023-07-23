import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AddSharpIcon from '@mui/icons-material/AddSharp';
const Navbar = () => {
  return (
    <div className='navbar_container'>
      <Link to="/home"><HomeIcon fontSize='large'/></Link>
      <Link to="/search"><SearchIcon fontSize='large'/></Link>
      <Link to="/addpage"><AddSharpIcon fontSize='large'/></Link>
      <Link to="/reels"><LiveTvIcon fontSize='large'/></Link>
      <Link to="/profile"><AccountCircleIcon fontSize='large'/></Link>
    </div>
    
  )
}

export default Navbar