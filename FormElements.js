import React from "react";
import "./style.css";
const FormElement = ({ name, onClick, value }) => {
  return (
    <div>
      <h3>{name}</h3>
      <input
        className="btn-primary"
        type={"button"}
        value={value}
        onClick={onClick}
      />
    </div>
  );
};

export default FormElement;