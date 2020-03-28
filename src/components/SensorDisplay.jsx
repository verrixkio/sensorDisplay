import React from 'react';
import TempToggle from './TempToggle';

var sensorData = require('../sensors.json');
var readingData = require('../readings.json');

class SensorDisplay extends React.Component { 

  dateLocalizer(date) {
    let dateObj = new Date (date)
    let localTime = dateObj.toLocaleTimeString();
    let localDay = dateObj.toLocaleDateString();
    return <div>{localDay + " " + localTime}</div>
  }
  
  sensorMapper(sensor) {
  let currentSensor = sensor.id
  const readingValues = readingData.map(data => {
    
    if (data.sensorId === currentSensor) {
      return (
        <div>
          <p>Sensor {data.sensorId}: {sensor.name}</p>
          <p>{this.dateLocalizer(data.time)}</p>
          <TempToggle unit={sensor.units} value={data.value}/>
        </div>
      )
    }
  })
    return (
    <div>
      <h1>Sensor {sensor.id}</h1>
      <div>Name: {sensor.name}</div>
      <div>Type: {sensor.type}</div>
      <div>Created: {this.dateLocalizer(sensor.createdAt)}</div>
      <h3>Reading Data:</h3>
      <div>{readingValues}</div>
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