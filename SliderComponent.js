import { useState } from "react";
import Step from "../step";
import Slider from "../Slider/slider";
import Form from "../Form";

import "../styles.css";

export default function SliderComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {
    setCurrentIndex(0)
  };

  return (
    <div className="App">
      <div className="container">
        <Step currentIndex={currentIndex} />
      </div>
      <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />

      <div className="form-container">
        <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
        />
      </div>
    </div>
  );
}

