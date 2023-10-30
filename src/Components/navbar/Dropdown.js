import React,{useState} from 'react'
import "../navbar/dropdown.css"
import {BsChevronDown} from "react-icons/bs"

function Dropdown() {
  const [active, setActive]=useState(false);
 
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={(e)=> setActive(!active)}>
        Furniture Categories
        <span><BsChevronDown/></span>
      </div>
      {
        active && (
          <div className="dropdown-content">
               <div className="dropdown-item">
                Sofa set
                <hr className='line'/>
             </div>
             <div className="dropdown-item">
               Bed Furniture
               <hr className='line'/>
             </div>
             <div className="dropdown-item">
                Table & Chair
                <hr className='line'/>
             </div>
             <div className="dropdown-item">
             Dinning Table
             <hr className='line'/>
             </div>
             <div className="dropdown-item">
             Kitchen Furniture
             <hr className='line'/>
             </div>
             <div className="dropdown-item">
                Almirah
                <hr className='line'/>
             </div>
        </div>
        ) }
    </div>
  );
}

export default Dropdown
