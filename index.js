import React from "react";
import FormElement from "./FormElements";
import "./style.css";
const formEls = ["Chennai", "Bengaluru", "Mysore", "Ooty", "Coimbatore"];
const Form = ({ currentIndex, handleNext, handleComplete }) => {
  return (
    <div className="form-container">
      <h3>The current Destination is:</h3>
      <h2>{formEls[currentIndex]}</h2>
      {currentIndex === formEls.length - 1 ? (
        <FormElement
          value={"Complete"}
          onClick={() => handleComplete(currentIndex)}
        />
      ) : (
        <FormElement value={"Next"} onClick={() => handleNext(currentIndex)} />
      )}
    </div>
  );
};

export default Form;