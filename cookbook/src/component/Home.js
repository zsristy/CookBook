import React from "react";
import backgroundimage1 from "../images/fusion-food.jpg";
import image1 from "../images/pizza.jpg"
import image2 from "../images/begun.jpg"
import image3 from "../images/fish.jpg"
import HomeNavBar from "./HomeNavBar";
import {Link} from 'react-router-dom';

export default function Home() {
  return <div>
    <HomeNavBar></HomeNavBar>
    <div
              className="backimage"
              style={{
                height:500,
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
      <div className="row" style={{marginTop:100, marginBottom:100}}>
              <div className="col s6">
                            <div className="row" style={{position:"relative", left:0, top:0}}>
                            <img style={{height:330,width:510,position:"relative", left:0, top:0}} src={image1}></img>
                            <img style={{height:330,width:330,position:"absolute", left:340, top:200}} src={image2}></img>
                            </div>
              </div>
              <div className="col s6" 
                            style={{margin:80,
                              background:"whitesmoke",
                              opacity:.6}}>
                            <h2 style={{marginTop:50,marginLeft:50}}>Welcome To CookBook</h2>
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
                            <Link><p style={{color:"goldenrod",marginLeft:50,marginBottom:50}}>| ABOUT US</p></Link>
              </div>
      </div>
      <div className="row" style={{marginTop:100, marginBottom:100}}>
              <div className="col s3" style={{borderColor:"goldenrod" ,borderRight:4}}>
              </div>                
              <div className="col s9">
                <div className="row">

                </div>
              </div>  
      </div>
      <div className="row" style={{marginTop:100, marginBottom:100}}>
              <div className="col s2">
                            <div className="row" style={{position:"relative", left:0, top:0}}>
                            <img style={{height:200,width:300,position:"relative", left:0, top:0}} src={image3}></img>
                            </div>
              </div>
              <div className="col s5" style={{backgroundColor:"goldenrod",height:200}}>
                            <Link><h1 style={{fontSize:40, textAlign:"center", marginTop:50, color:"black"}}><b>Sign Up <br></br> Now !</b></h1></Link>
              </div>
              <div className="col s5" style={{backgroundColor:"black",height:200, textAlign:"center",color:"whitesmoke"}}>
                            <i className="material-icons" style={{fontSize:120,marginTop:20}}>local_dining</i>
                            <i>CookBook.com</i>
              </div>
      </div>

  </div>
}
