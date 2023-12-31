import React from 'react'
import './topbar.css';
const Topbar = () => {
  return (
    <div className='top'>
      <div className="topLeft">
      <i className="topIcon fa-brands fa-square-facebook"></i>
      <i className="topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-pinterest"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">Home</li>
            <li className="topListItem">about</li>
            <li className="topListItem">contact</li>
            <li className="topListItem">write</li>
            <li className="topListItem">logout</li>
        </ul>

      </div>
      <div className="topRight">
        <img 
        className='topImg'
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="" />
        <i class="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar;
