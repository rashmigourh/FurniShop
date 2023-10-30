import React from 'react'
import "../navbar/search.css"
import {BsSearch} from "react-icons/bs"
function Search() {
  return (
    <div className='search_container'>
      <div className="bar">
        <input type="text" placeholder='Search Furniture Here'/>
      </div>
      <div className="icon">
        <BsSearch/>
      </div>
    </div>
  )
}

export default Search
