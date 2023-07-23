// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'
import Authenication from "./components/Authenication"
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import SearchPage from "./components/search/SearchPage"
import Reels from "./components/reels/Reels"
import Profile from "./components/profile/Profile"
import Add from './components/add/Add';
import Header from './components/header/Header';
import Loginpage from "./components/LoginPage/Loginpage"
import React from 'react';
import Editprofile from './components/profile/Editprofile';

import Likespage from './components/likespage/Likespage';
import Chats from './components/chats/Chats';
import StoriesDailog from './components/stories/StoriesDailog';



function App() {
  
  return (
    <div className="App">
      
      <Loginpage/>
     <Authenication>
     <Routes>
            <Route path='/' element={<Loginpage/>} />
            <Route path='home' element={<Homepage/>} />
            <Route path='likespage' element={<Likespage/>} />
            <Route path='storydailog' element={<StoriesDailog/>} />
            <Route path='chatspage' element={<Chats/>} />
            <Route path='editprofile' element={<Editprofile/>} />
            <Route path='login' element={<Loginpage/>} />
            <Route path='search' element={<SearchPage/>} />
            <Route path='addpage' element={<Add/>} />
            <Route path='reels' element={<Reels/>} />
            <Route path='profile' element={<Profile/>} />
     </Routes>
     </Authenication>

    </div>
  );
}

export default App;
