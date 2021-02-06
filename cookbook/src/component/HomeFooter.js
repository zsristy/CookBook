import React from "react";
import image3 from "../images/fusion-food.jpg"
import {Link} from 'react-router-dom';

export default function HomeFooter() {
    return <div style={{width:'99%'}}>
    <div className='row' style={{marginTop:100, marginBottom:100}}>
              <div className='col s3' >
                            <div className="row" style={{position:"relative", left:0, top:0}}>
                            <img style={{height:200,position:"relative", left:0, top:0}} src={image3}></img>
                            </div>
              </div>
              <div className='col s4' style={{backgroundColor:"goldenrod",height:200}}>
                            <Link to="/signup"><h1 style={{fontSize:40, textAlign:"center", marginTop:50, color:"black"}}><b>Sign Up <br></br> Now !</b></h1></Link>
              </div>
              <div className='col s4' style={{backgroundColor:"black",height:200, textAlign:"center",color:"whitesmoke"}}>
                            <i className="material-icons" style={{fontSize:120, marginTop:40}}>local_dining</i>
                            <i>CookBook.com</i>
              </div>
              </div>
      </div>
}