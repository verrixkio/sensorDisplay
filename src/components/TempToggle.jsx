import React, { useState } from 'react';

//Temptoggle uses the useState react hook to handle the toggling between Celsius and Farhenheit.
function TempToggle(props) {

  const [value, setValue] = useState(props.value);
  const [isToggled, setToggled] = useState(props.unit);

  const toggleTrueFalse = () => {
    if (isToggled === "Celsius") {
      setValue(value * (9/5) + 32);
      setToggled("Farhenheit");

    } else if (isToggled === "Farhenheit") {
      setValue((5/9) * (value-32));
      setToggled("Celsius");
    }
  }

  if (props.unit === "Celsius" || props.unit === "Farenheit") {
    return (
      <td>
        <div className="temperature-toggle">
          <h4>{(Math.round((value + Number.EPSILON) * 100) / 100)}°{isToggled}</h4>
          <button onClick={toggleTrueFalse}>
            °C/F
          </button>
        </div>
      </td>
    )
  } else {
    return (
      <td>
        <div className="temperature-toggle">
          <h4>{(Math.round((value + Number.EPSILON) * 100) / 100)} {isToggled} H</h4>
        </div>
      </td>
    )
  };
}

export default TempToggle