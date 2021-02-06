import React from "react";
import {useHistory} from 'react-router-dom';


export default function HomeNavBar() {
  const history = useHistory();
    const myMouseOver=(e)=>{
        e.target.style.background = 'red';
    }
    const myMouseOut=(e)=>{
        e.target.style.background = 'black';
    }
    const myOnClick=()=>{
      history.push("/signup");
    }
    const myOnClick1=()=>{
      history.push("#");
    }

  return <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper  black" style={{color:"whitesmoke"}}>
      <p className="brand-logo" style={{marginLeft:80}}>CookBook</p>
      <ul id="nav-mobile" className="right hide-on-med-and-down" style={{marginRight:30,textAlign:'center'}}>
        {/* -------------------------------------------------------------------------------------------------LINK */}
        <li style={{width: 80}} ><p style={{fontSize:15}} onMouseOver={myMouseOver} onMouseOut={myMouseOut} onClick={myOnClick1}>About Us</p></li>
        <li style={{width: 80}} ><p style={{fontSize:15}} onMouseOver={myMouseOver} onMouseOut={myMouseOut} onClick={myOnClick} >Sign Up</p></li>
      </ul>
    </div>
    </nav>
  </div>;
}