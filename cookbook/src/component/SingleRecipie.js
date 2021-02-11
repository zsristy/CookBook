import React,{useEffect,useRef,useState} from "react";
import kiwi from "../images/kiwi.jpg";
import gallery3 from "../images/gallery3.jpg";
import DashboardHeader from "./DashboardHeader";
import 'semantic-ui-css/semantic.min.css'
import { Rating } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react'


export default function SingleRecipie() {
  const [state,setState] =useState({})

  const handleRate = (e, { rating, maxRating }) =>
    setState({ rating, maxRating })
   
  return (



    <div>
        <div
        style={{ 
            backgroundSize: "cover",
            height: 500,
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: "url(" + kiwi + ")",
    }}
  >
      <DashboardHeader></DashboardHeader>
      <div className="row" style={{margin:0}}>
        <div className="col s12">
          <div className="col s5" style={{display:"flex", justifyContent:"flex-end",padding:0}}>
          <img style={{height:380,width:"80%",borderStyle:"solid",border:4,borderColor:"goldenrod"}} src={gallery3}></img>
          </div>
          <div className="col s7" style={{flexDirection:"column",paddingLeft:"3%",paddingTop: 280}}>
                    
                    <Rating style={{height:20,paddingLeft:"4%"}} maxRating={5} icon='star' size='huge' onRate={handleRate} />
                    
                      <div className="row" style={{margin:0,paddingTop:10}}>
                        <div className="col s12">
                          <form>
                                <div className="col s9">                          
                                <input
                                  type="text"
                                  placeholder="Please leave a comment"
                                  style={{
                                    paddingLeft: "20px",
                                    backgroundColor: "white",
                                    fontWeight: "10px",
                                    border: "white",
                                    boxShadow: "none",
                                    borderRadius:"20px"
                                  }}
                                />
                                </div>
                            <div className="col s2">
                            <Button icon style={{height:"3rem"}}>
                              <Icon name='telegram plane large' />
                            </Button>
                            </div>
                            </form>
                      </div>
                      </div>

          </div>
        </div>
        </div>
      </div>

      <div  
      style={{            
            top: "500px",
            position: "absolute",
            height:800,
            width:"100%",
            backgroundColor:"white"}}>
                
      <div className="row" style={{margin:0}}>

          <div className="col s12">
              <div className="col s4">
                  

         <div
         style={{
            width:"87%",
            marginLeft:"14%",
            paddingBottom:50,
            paddingTop:50,
            justifyContent:"center",
             
         }}
         >
             <div
             style={{
             background:"whitesmoke",
             opacity:.8,
             borderRadius:30,
             paddingTop:50}}
             > 
     <div className="col s12 l6">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s2">
              <img src={kiwi} alt="" className="circle responsive-img"/> 
            </div>
            <div className="col s10">
              <span className="black-text">
                
              </span>
            </div>
          </div>
        </div>
      </div>
             
             </div>  
         

          </div>
          </div>
          <div className="col s8">
                  

                  <div
                  style={{
                     width:"93%",
                     marginRight:"7%",
                     paddingBottom:50,
                     paddingTop:50,
                     justifyContent:"center",
                      
                  }}
                  >
                      <form
                      style={{background:"whitesmoke",
                      opacity:.8,
                      borderRadius:30,
                      paddingTop:50}}
                      > 
                      River
                      </form>  
                  
         
                   </div>
                   </div>
          </div>
        
        </div>
        </div>
       
        
    </div>
  );
}