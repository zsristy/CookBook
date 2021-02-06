import React from "react";

import backgroundimage1 from "../images/foodtable.jpg";
import image1 from "../images/pizza.jpg"
import image2 from "../images/begun.jpg"
import HomeNavBar from "./HomeNavBar";
import HomeFooter from "./HomeFooter";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import photo6 from "../images/photo6.jpg";
import photo7 from "../images/photo7.jpg";
import photo8 from "../images/photo8.jpg";
import photo9 from "../images/photo9.jpg";
import {Link,useHistory} from 'react-router-dom';

export default function Home() {
  const photos=[photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8,photo9]
  const history = useHistory();
  const myMouseOver=(e)=>{
    e.target.style.opacity=.5;
  }
  const myMouseOut=(e)=>{
    e.target.style.opacity=1;
  }

  const myClick=()=>{
    history.push("/signup");
  }
  return <div>
    <HomeNavBar></HomeNavBar>
    <div
              className="backimage"
              style={{
                height:500,
                width:"100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "url(" + backgroundimage1 + ")",
              }}>
              <div style={{backgroundColor:"whitesmoke", opacity:.6, height:380}}>
                            <h1 style={{color:'black',marginLeft:600}}><i ><br></br>Let's Share Recipe<br></br> &ensp;&ensp;&ensp;&ensp; Let's Share Food</i></h1>
                            <i className="material-icons" style={{marginLeft:650,fontSize:200}}>local_dining</i>
              </div>
      </div>
      <div className="row" style={{marginTop:100, marginBottom:100, width:'100%'}}>
              <div className='col s6'>
                            <div className="row" style={{position:"relative", left:0, top:0}}>
                            <img style={{height:330,width:510,position:"relative", left:0, top:0}} src={image1}></img>
                            <img style={{height:330,width:330,position:"absolute", left:340, top:200}} src={image2}></img>
                            </div>
              </div>
              <div className='col s6'
                            style={{margin:80,
                              background:"whitesmoke",
                              opacity:.6}}>
                            <h2 style={{marginTop:50,marginLeft:50}}><i>Welcome To CookBook</i></h2>
                            <p style={{textAlign:"justify", margin:50}}>
                              Cookbook is a kitchen reference containing recipes. 
                              Cookbook may be general or may specialize in a particular 
                              cuisine or category of food. Recipes in cookbook are 
                              organized in various ways: by course, by main ingredient, 
                              by cooking technique, alphabetically, by region or country, 
                              and so on. It may include illustrations of finished dishes 
                              and preparation steps; discussions of cooking techniques, 
                              advice on kitchen equipment, ingredients, substitutions; 
                              historical, cultural notes and so on.</p>
                              {/* -------------------------------------------------------------------------------------------------LINK */}
                            <Link to="#"><p style={{color:"goldenrod",marginLeft:50,marginBottom:50}}>| ABOUT US</p></Link>
              </div>
      </div>
      <div className='row' style={{marginTop:100, marginBottom:100, width:'100%'}}>
        <div className='col s12'>
              <div className='col s3' style={{backgroundColor:'goldenrod',height:60,textAlign:'center',fontSize:35}}>
                <b><i>Our Recipes</i></b>
              </div>                
              <div className='col s9'>
                <div className='row' style={{position:"relative", left:0, top:0,marginLeft:40}}>
                            {photos.map((image)=>{
                            return(
                              <img style={{
                              height:330,
                              width:330,
                              margin:1}} 
                              onMouseOver={myMouseOver} 
                              onMouseOut={myMouseOut}                              
                              onClick={myClick}
                              src={image}></img>
                              )
                            })}                           
                </div>
              </div> 
              </div> 
      </div>
      <HomeFooter></HomeFooter>
  </div>
}
