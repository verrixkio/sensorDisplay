import React, { useState } from 'react';
import TempToggle from './TempToggle';

var readingData = require('../readings.json');

//Function that takes a specific sensor and maps the reading data to that sensor.
function SensorMapper(props) {

const sensor = props.sensor

//Set State for the button that displays sensor.
const [hidden, setHidden] = useState("");
const [button, setButton] = useState("Hide Readings")


//Function that will return the local time and day from a date string.
const dateLocalizer = (date) => {
  let dateObj = new Date (date)
  let localTime = dateObj.toLocaleTimeString();
  let localDay = dateObj.toLocaleDateString();
  return localTime + " " + localDay
}

const hideTables = () => {
  console.log(hidden)
  if (hidden === "hidden") {
    setHidden("")
    setButton("Hide Readings")
} else {
    setHidden("hidden")
    setButton("Show Readings")
  }
};
  //Build the table data by mapping through the readings.
const readingValues = readingData.map(data => {
  if (data.sensorId === sensor.id) {
    return (
      <tr>
        <td>{dateLocalizer(data.time)}</td>
        <TempToggle unit={sensor.units} value={data.value}/>
      </tr>
    )
  } else {
      return null
  }
})

//Return the built table and sensor data to our original map.
return (
  <div>
    <div className="sensor-data">
      <h1>Sensor {sensor.id}</h1>
      <h3>{sensor.name}</h3>
      <h3>Type: {sensor.type}</h3>
      <h3>Created: {dateLocalizer(sensor.createdAt)}</h3>
      <button onClick={() => {hideTables(sensor.id)}}>{button}</button>
    </div>
    <div id ={hidden} className={"overflow-table"}>
      <table>
        <tbody>
        <tr>
          <th>Time of Reading</th>
          <th>Value</th>
        </tr>
          {readingValues}
        </tbody>
      </table>
    </div>
  </div>
  )
} export default SensorMapper