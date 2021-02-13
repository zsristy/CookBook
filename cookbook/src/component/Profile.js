import React, { useEffect, useRef, useState } from "react";
import gallery7 from "../images/gallery7.jpg";
import DashboardHeader from "./DashboardHeader";
import { Button } from "semantic-ui-react";
import uploadImage from "../firebase/uploadImage";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";


export default function Profile() {
  const { currentUser } = useAuth();
  const author = currentUser.displayName;
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("");

  const [state,setState]=useState({disabled : true})
  const editonClick = () =>{
    setState({disabled: false})}
    const okonClick = () =>{
        setState({disabled: true})}

  const style1 = {
    outline: "none",
    overflow: "auto",
    overflow: "hidden",
    minHeight: "200px",
    padding: "9px",
    boxSizing: "none",
    borderColor: "white",
    fontSize: "16px",
    backgroundColor: "white",
  };


  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);

  const handleImageUpload = async (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
    await uploadImage(file, setImageUrl);
  };

  return (
    <div>
      <div
        style={{
          backgroundSize: "cover",
          height: 550,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: "url(" + gallery7 + ")",
        }}
      >
        <DashboardHeader></DashboardHeader>
      <div className="row" 
      style={{
            top: "240px",
            position: "absolute",
            width: "86%",
            margin:0}}>
        <div className="col s12">
          <div className="col s4" style={{display:"flex", justifyContent:"flex-end",padding:0}}>
          <div
            style={{
              width:"86%",  
              background: "whitesmoke",
              opacity: 0.8,
              borderRadius: 30,
              paddingTop: 35,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
              <form>
          <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    disabled={state.disabled}
                    onChange={handleImageUpload}
                    ref={imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  <div
                    style={{
                      height: "250px",
                      width: "250px",
                      borderRadius:"50%",
                      border: "solid",
                      borderColor: "goldenrod",
                      backgroundColor: "white",
                    }}
                    onClick={() => imageUploader.current.click()}
                  >
                    <img
                      ref={uploadedImage}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "acsolute",
                        borderRadius:"50%",
                      }}
                    />
                  </div>
                  <div className="row" style={{margin:0,paddingLeft:"65%"}}>
                  <i
                              className="material-icons" onClick={okonClick}
                              style={{ cursor: "pointer"}}
                            >
                              check_circle
                            </i>
                            <i
                                className="material-icons" onClick={editonClick}
                                style={{ cursor: "pointer"}}
                              >
                                add_circle
                              </i>

                  </div>
                </div>

                </form>
                <div style={{display:"flex",justifyContent:"center",paddingBottom:30}}>
                <p><h4 >Name</h4><br></br>
                Email</p>
                </div>
                </div>
          </div>
          <div className="col s7" style={{display:"flex", justifyContent:"flex-end",padding:0}}>
              
          </div>
      </div>
    </div>
    </div>
    </div>
);
}