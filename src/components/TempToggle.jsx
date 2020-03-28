import React, { useState } from 'react';

function TempToggle(props) {

  const [value, setValue] = useState(props.value);
  const [isToggled, setToggled] = useState(props.unit);
  
  const toggleTrueFalse = () => {
    if (isToggled === "Celsius") {
      let toFarhenheit = (value * (9/5) + 32);
      setValue((Math.round((toFarhenheit + Number.EPSILON) * 100) / 100));
      setToggled("Farhenheit");

    } else if (isToggled === "Farhenheit") {
      let toCelsius = ((5/9) * (value-32));
      setValue((Math.round((toCelsius + Number.EPSILON) * 100) / 100));
      setToggled("Celsius");
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h3>{value}</h3>
        <button onClick={toggleTrueFalse}>
          <h3>{isToggled}</h3>
        </button>
      </div>
    </div>
  );
}

export default TempToggle