import React,{useEffect,useRef,useState} from "react";
import kiwi from "../images/kiwi.jpg";
import gallery3 from "../images/gallery3.jpg";
import DashboardHeader from "./DashboardHeader";
import 'semantic-ui-css/semantic.min.css'
import { Item,Table} from 'semantic-ui-react'
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
             padding:40}}
             > 
             {/* profile card */}
             <Item.Group>
              <Item>
              <img src={kiwi} alt style={{width:90,height:90,borderRadius:"50%"}}></img>
              <Item.Content style={{paddingTop:40,paddingLeft:10}}>
              <Item.Header >Chef</Item.Header>
              </Item.Content>
              </Item>
              </Item.Group>
              <b>Comments</b>


              {/* comments */}
              <div style={{maxHeight:300, overflowY:"scroll",marginTop:20}}>
              <Item.Group divided>
                <Item>
                  <Item.Content>
                    <Item.Meta>Description</Item.Meta>
                    <Item.Description>
                      hibijabi
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                  </Item.Content>
                </Item>
                </Item.Group>
                              
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
                    {/* data from firebase */}
                      <form
                      style={{background:"whitesmoke",
                      opacity:.8,
                      borderRadius:30,
                      padding:50}}
                      > 
                      <Item.Group divided>
                      <Item> 
                        <img src={kiwi} alt style={{width:"45%",height:280}}></img>
                        <Item.Content style={{paddingLeft:"5%"}}>
                          <Item.Header ><h3 style={{color:"goldenrod"}}>Recipie name</h3></Item.Header>                         
                          <Item.Extra>
                            <Label>No suger</Label>
                          </Item.Extra>
                        </Item.Content>
                      </Item>
                      </Item.Group>
                      <div className="row" style={{margin:0}}>
                        <div className="col s12"style={{paddingTop:30,paddingBottom:30}}>
                          <div className="col s6"style={{paddingRight:"5%"}}>
                          <Table celled>
                              <Table.Header>
                                <Table.Row>
                                  <Table.HeaderCell>
                                    <Label ribbon style={{color:"goldenrod"}}><h4>Ingredients</h4></Label>
                                    </Table.HeaderCell>
                                </Table.Row>
                              </Table.Header>

                              <Table.Body>
                                <Table.Row>
                                  <Table.Cell>Cell</Table.Cell>
                                </Table.Row>
                              </Table.Body>
                            </Table>
                          </div>
                           
                          <div className="col s6">
                          <Item.Group>
                            <Item>
                              <Item.Content>
                                <Item.Header><h3 style={{color:"goldenrod"}}>Preparation</h3></Item.Header>
                                <Item.Description>
                                  <p>
                                    Many people also have their own barometers for what makes a cute
                                    dog.
                                  </p>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                            </Item.Group>
                          </div>

                        </div>
                      </div>
                      </form>  
                  
         
                   </div>
                   </div>
          </div>
        
        </div>
        </div>
       
        
    </div>
  );
}