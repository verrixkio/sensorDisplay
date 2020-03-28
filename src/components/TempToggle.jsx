import React, { useState } from 'react';

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

  return (
    <div className="App">
      <div className="container">
        <h3>{(Math.round((value + Number.EPSILON) * 100) / 100)}</h3>
        <button onClick={toggleTrueFalse}>
          <h3>{isToggled}</h3>
        </button>
      </div>
    </div>
  );
}

export default TempToggle