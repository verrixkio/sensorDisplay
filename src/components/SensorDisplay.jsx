import React from 'react';
import TempToggle from './TempToggle';

var sensorData = require('../sensors.json');
var readingData = require('../readings.json');

class SensorDisplay extends React.Component { 

  //Function that will return the local time and day from a date string.
  dateLocalizer(date) {
    let dateObj = new Date (date)
    let localTime = dateObj.toLocaleTimeString();
    let localDay = dateObj.toLocaleDateString();
    return localTime + " " + localDay
  }
  
  //Function that takes a specific sensor and maps the reading data to that sensor.
  sensorMapper(sensor) {

  let currentSensor = sensor.id

  const readingValues = readingData.map(data => {
    if (data.sensorId === currentSensor) {
      return (
        // <div className="reading-data">
        //   <p>{this.dateLocalizer(data.time)}</p>
        //   <TempToggle unit={sensor.units} value={data.value}/>
        // </div>

    <tr>
      <td>{this.dateLocalizer(data.time)}</td>
      <TempToggle unit={sensor.units} value={data.value}/>
    </tr>

      )
    } else {
        return null
    }
  })

  return (
<div>
  <div className="sensor-data">
    <h1>Sensor {sensor.id}</h1>
    <h3>{sensor.name}</h3>
    <h3>Type: {sensor.type}</h3>
    <h3>Created: {this.dateLocalizer(sensor.createdAt)}</h3>
  </div>
  <div className="overflow-table">
    <table>
      <thead>
        <th>Time of Reading</th>
        <th>Value</th>
      </thead>
        {readingValues}
    </table>
  </div>
</div>
    )
  }

  render() {
    return (
      <div>
        {sensorData.map(sensor => 
          this.sensorMapper(sensor)
        )}
      </div>
    );
  }
}

export default SensorDisplay;