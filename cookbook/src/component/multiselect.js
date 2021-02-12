import React from "react";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function Multiselect(props) {
    const handleChange = props.handleChange;
    const animatedComponents = makeAnimated()
    const customStyles1 = {
        control: (provided, state) => ({
          ...provided,
          background: "white",
          opacity:'.7',
          borderColor: 'white',
          borderRadius:"35px",
          boxShadow: state.isFocused ? null : null,
        })}
        return (
          <div>
            <div className="row">
              <div className="col s12">
                <div className="col s1">
                  <label
                    style={{
                      fontSize: 16,
                      color: "whitesmoke",
                      paddingTop: "50%",
                    }}
                  >
                    {" "}
                    {props.title}{" "}
                  </label>
                </div>
                <div className="col s11">
                  <Select
                    onChange={handleChange}
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
        );
}