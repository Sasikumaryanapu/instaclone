import React from 'react'
import SearchContent from './SearchContent'
import useBearStore from '../../store'
const SearchBar = ({search}) => {
    const posts =useBearStore.getState().posts
const flag=useBearStore.getState().flag


  return (
        <div className={flag?"Search_column":"Search_container"}>
      {
        search ? posts.filter(f => f.src.includes(search)).map((d,index)=>
          <SearchContent key={index} posts={d.src} />
            ):  <div className='Card_Container' >
            <img src={posts} className='images'  alt="" />
          </div>
              
      }
    </div>
  )
}

export default SearchBar