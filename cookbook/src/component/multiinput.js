import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function MultiInput(props) {
    const onChange = props.onChange;
    const animatedComponents = makeAnimated()
    const customStyles1 = {
        control: (provided, state) => ({
          ...provided,
          background: "white",
          borderColor: 'white',
          borderRadius:"35px",
          boxShadow: state.isFocused ? null : null,
        })}
        return(
            <div>
                <div className="row">
                      <div className="col s12">
                              <div className="col s1" >
                              <label style={{fontSize:16,color:"black",paddingTop:"50%"}}> {props.title} </label>
                              </div>
                              <div className="col s11" style={{paddingLeft:"6%"}}>
                              <Select
                              onChange={onChange}
                              styles={customStyles1}
                              placeholder={props.title} 
                              closeMenuOnSelect={false}
                              components={animatedComponents}
                              isMulti
                              name="color"
                              options={props.options}
                              />
                              </div>
                      </div>
                </div>
            </div>
        )
}