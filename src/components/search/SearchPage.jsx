import React, { useState } from 'react'
// import {Pics} from "../../posts.js"
import "./SearchPage.css"
import { SearchOutlined } from '@mui/icons-material'

import useBearStore from "../../store"
import SearchContent from './SearchContent'

const SearchPage = () => {
  const [search,setSearch] =useState(null)
  const [flag,setFlag]=useState(false)

  const posts = useBearStore((state) => state.posts)

  return (
  <div className='Search_containe'>
    <div className='Search'><SearchOutlined/><input onChange={(e)=>setSearch(e.target.value)} placeholder='search'/></div> 
    <div className={flag ?"Search_column":"Search_container"}>
      {/* {
        search ? posts.filter(f => f.src.includes(search)).map((d,index)=>
          <SearchContent key={index} posts={d.src}  />
            ): posts.filter(f => f.src.includes(search)).map((d,index)=>
            <SearchContent key={index} posts={d.src} flag={flag} />
              )
      } */}
            <SearchContent search={search} />

    </div>
  </div>

  )
}

export default SearchPage