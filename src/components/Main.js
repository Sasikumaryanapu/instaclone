import React from 'react'

import { Routes,Route } from 'react-router-dom'
import Homepage from '../components/homepage/Homepage';
import SearchPage from "../components/search/SearchPage"
import Reels from "../components/reels/Reels"
import Profile from "../components/profile/Profile"
import Add from '../components/add/Add';
import Editprofile from '../components/profile/Editprofile';

import Likespage from '../components/likespage/Likespage';
import Chats from '../components/chats/Chats';
import StoriesDailog from '../components/stories/StoriesDailog';
const Main = () => {
  return (
    <div>
         <Routes>
            <Route path='home' element={<Homepage/>} />
            <Route path='likespage' element={<Likespage/>} />
            <Route path='storydailog' element={<StoriesDailog/>} />
            <Route path='chatspage' element={<Chats/>} />
            <Route path='editprofile' element={<Editprofile/>} />
            <Route path='search' element={<SearchPage/>} />
            <Route path='addpage' element={<Add/>} />
            <Route path='reels' element={<Reels/>} />
            <Route path='profile' element={<Profile/>} />
     </Routes>
    </div>
  )
}

export default Main