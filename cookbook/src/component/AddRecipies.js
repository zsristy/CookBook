import React,{useEffect,useRef} from "react";
import Singleselect from "./singleselect"
import Multiselect from "./multiselect";
import nutsteak from "../images/nut-steak.jpg";
import DashboardHeader from "./DashboardHeader";
import autosize from "autosize";




export default function AddRecipies() {
    const textarea=useRef();
    const style1 = {
        outline:"none",
        overflow:"auto",
        overflow:"hidden",
        minHeight: "200px",
        padding: "9px",
        boxSizing: "none",
        borderColor:"white",
        fontSize: "16px",
        backgroundColor:"white",
      };


    const mealoptions = [
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
    { value: 'Snack', label: 'Snack' },
    { value: 'Teatime', label: 'Teatime' },
      ]


      const cuisineoptions = [
        { value: 'American', label: 'American' },
        { value: 'Asian', label: 'Asian' },
        { value: 'Chinese', label: 'Chinese' },
        { value: 'French', label: 'French' },
        { value: 'Indian', label: 'Indian' },
        { value: 'Italian', label: 'Italian' },
        { value: 'Japanese', label: 'Japanese' },
        { value: 'Mexican', label: 'Mexican' },
          ]

          const dietoptions = [
            { value: 'balanced', label: 'Balanced' },
            { value: 'high-fiber', label: 'High-Fiber' },
            { value: 'high-protein', label: 'High-Protein' },
            { value: 'low-carb', label: 'Low-Carb' },
            { value: 'low-fat', label: 'Low-Fat' },
            { value: 'low-sodium', label: 'Low-Sodium' },
              ]

              const avoidoptions = [
                { value: 'alcohol-free', label: 'Alcohol free' },
                { value: 'crustacean-free', label: 'Crustacean free' },
                { value: 'dairy-free', label: 'Dairy free' },
                { value: 'egg-free', label: 'Egg free' },
                { value: 'fish-free', label: 'Fish free' },
                { value: 'No-oil-added', label: 'Oil free' },
                { value: 'peanut-free', label: 'Peanut free' },
                { value: 'pork-free', label: 'Pork free' },
                { value: 'red-meat-free', label: 'Red Meat free' },
                { value: 'soy-free', label: 'Soy free' },
                { value: 'vegan', label: 'Vegan' },
                { value: 'vegetarian', label: 'Vegetarian' },
                  ]

                  const uploadedImage = React.useRef(null);
                  const imageUploader = React.useRef(null);
                
                  const handleImageUpload = e => {
                    const [file] = e.target.files;
                    if (file) {
                      const reader = new FileReader();
                      const { current } = uploadedImage;
                      current.file = file;
                      reader.onload = e => {
                        current.src = e.target.result;
                      };
                      reader.readAsDataURL(file);
                    }
                  };
                  useEffect(() => {
                    textarea.current.focus();
                    autosize(textarea.current);
                  });

    
  return (



    <div>
        <div
        style={{ 
      backgroundSize: "cover",
      height:550,
      width:'100%',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: "url(" + nutsteak + ")",
    }}
  >
      <DashboardHeader></DashboardHeader>
      <h2
            style={{ 
            paddingTop:200, 
              color: "white",
              fontSize: " 40px",
              lineHeight: " 40px",
              textAlign:"center",
            }}
          >
            It is our honor if you share your recipe with us.<br></br>
            It is your recipie which makes our CookBook extraordinary.
          </h2>  
         

          
        </div>
        <div>
         <div
         style={{
            top: "450px",
            position: "absolute",
            width:"86%",
            marginLeft:"7%",
            paddingBottom:50,
            justifyContent:"center",
             
         }}
         >
             <form
             style={{background:"whitesmoke",
             opacity:.8,
             borderRadius:30,
             paddingTop:50}}
             > 
             <p style={{color:"goldenrod",fontSize:30,paddingLeft:"35%"}}>Please write the full recipe here</p>
             <div className="row" style={{padding:100,paddingBottom:0,paddingTop:50}}>
             
                 <div className="col s12">                 
                    <div className="col s5"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={imageUploader}
                        style={{
                        display: "none",
                        }}
                    />
                    <div
                        style={{
                        height: "320px",
                        width: "100%",
                        border: "solid",
                        borderColor:"goldenrod",
                        backgroundColor:"white",
                        }}
                        onClick={() => imageUploader.current.click()}
                    >
                        <img
                        ref={uploadedImage}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "acsolute"
                        }}
                        />
                    </div>
                    Click to upload Image
                    </div>
                    <div className="col s7">
                        <div className="row">
                        <div className="col s12">
                        <div className="col s1">
                        <label style={{fontSize:16,color:"black",paddingTop:"15%",paddingLeft:"35%"}}> Recipie</label>
                        </div>
                        <div className="col s11" style={{paddingLeft:"7%",paddingRight:"7%"}}>
                        <input
            type="text"
            placeholder="Recipie Name"
            required
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
                        </div>
                        </div>
                        <div className="row">
                        <div className="col s12">
                        <div className="col s6">
                        <Singleselect title="Meal" options={mealoptions} color="black"></Singleselect>
                        </div>
                        <div className="col s6">
                        <Singleselect title="Cuisine" options={cuisineoptions} color="black"></Singleselect>
                        </div>
                        </div>
                        </div>
                        <div className="col s12">
                        <Multiselect title="Diet" options={dietoptions} color="black"></Multiselect>
                        <Multiselect title="Health" options={avoidoptions} color="black"></Multiselect>
                        </div>
                    </div>
                    </div>
             </div>
                    <div className="row" style={{padding:100,paddingTop:0}}>
                        <div className="col s12">
                        <div className="col s5">
                        
                        <p style={{color:"goldenrod",fontWeight:"bold",fontSize:20}}>Ingredients</p>
                        
                        <textarea
                        required
                        style={style1}
                        ref={textarea}
                        placeholder="type some text"
                        rows={1}
                        defaultValue=""
                        />
                        </div>

                        <div className="col s7">
                        
                        <p style={{color:"goldenrod",fontWeight:"bold",fontSize:20}}>Preparation</p>
                        
                        <textarea
                        required
                        style={style1}
                        ref={textarea}
                        placeholder="type some text"
                        rows={1}
                        defaultValue=""
                        />
                        </div>
                    </div>
                    </div>
                    

             </form>
        </div>
        </div>
        
    </div>
  );
}