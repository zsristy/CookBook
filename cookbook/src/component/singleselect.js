import React from "react";
import Select from "react-select";

export default function Singleselect(props) {
  const handleChange = props.handleChange;
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      background: "white",
      opacity: ".7",
      borderColor: "white",
      borderRadius: "25px",
      minHeight: "50px",
      height: "50px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "50px",
      paddingLeft: "15px",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "50px",
    }),
  };
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="col s3">
            <label
              style={{ fontSize: 16, color: "whitesmoke", paddingTop: "25%" }}
            >
              {" "}
              {props.title}{" "}
            </label>
          </div>
          <div className="col s9">
            <Select
              styles={customStyles}
              onChange={handleChange}
              placeholder={props.title}
              isClearable
              isSearchable
              name="color"
              options={props.options}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
