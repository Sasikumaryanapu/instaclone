import React from 'react'
import "./Homepage.css"
import Stories from "../stories/Stories"
import StoriesDailog from '../stories/StoriesDailog'
import Post from '../posts/Post'
import Header from '../header/Header'
import Navbar from '../navbar/Navbar'

// import useBearStore from '../../store'
const Homepage = () => {
  // const storyFlag=useBearStore((state)=> state.storyFlag)
  return (
    <div className='home_container'>
      {/* {  storyFlag ?  <StoriesDailog /> : null} */}
      <Header/>
      <Stories/>
      <Navbar/>
    </div>
  )
}

export default Homepage