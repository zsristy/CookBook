import React from "react";
import {Link} from 'react-router-dom';

export default function HomeNavBar() {
    const myMouseOver=(e)=>{
        e.target.style.background = 'gray';
    }
    const myMouseOut=(e)=>{
        e.target.style.background = 'black';
    }
  return <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper  black" style={{color:"whitesmoke"}}>
      <p className="brand-logo" style={{marginLeft:80}}>CookBook</p>
      <ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight:30}}>
        {/* -------------------------------------------------------------------------------------------------LINK */}
        <li style={{width: 50}}><i className="material-icons center" onMouseOver={myMouseOver} onMouseOut={myMouseOut}>info_outline</i></li>
        <li style={{width: 50}}><i className="material-icons center" onMouseOver={myMouseOver} onMouseOut={myMouseOut}>person</i></li>
      </ul>
    </div>
    </nav>
  </div>;
}