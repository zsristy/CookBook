import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import nutsteak from "../images/nut-steak.jpg";
import DashboardHeader from "./DashboardHeader";





export default function AddRecipies() {
  const animatedComponents = makeAnimated();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "white",
      opacity:'.7',
      borderColor: 'white',
      borderRadius:"25px",
      minHeight: '50px',
      height: '50px',
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '50px',
      paddingLeft:"15px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '50px',
    }),
  };

  const customStyles1 = {
    control: (provided, state) => ({
      ...provided,
      background: "white",
      opacity:'.7',
      borderColor: 'white',
      borderRadius:"35px",
      boxShadow: state.isFocused ? null : null,
    })}


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
        
         <div
         style={{
            top: "450px",
            position: "absolute",
             height:1000,
             width:"80%",
             marginLeft:"10%",
             background:"whitesmoke",
            opacity:.9,
            justifyContent:"center",
             
         }}
         >
             <form
             >

             </form>
        </div>
        
    </div>
  );
}