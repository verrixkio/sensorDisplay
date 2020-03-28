import React from 'react';

var sensorData = require('../sensors.json');
var readingData = require('../readings.json');

class SensorDisplay extends React.Component {
  
  
  dateLocalizer(date) {
    let dateObj = new Date (date)
    let localTime = dateObj.toLocaleTimeString();
    let localDay = dateObj.toLocaleDateString();
    return <div>{localDay + " " + localTime}</div>
  }

  // We want a function that takes in a sensor.

  sensorMapper(sensor) {
  //Now render out the readings with each specific sensor
  let currentSensor = sensor.id
  //Get the values from readings that match currentSensor
  const readingValues = readingData.map(data => {
    if (data.sensorId === currentSensor) {
      return (
        <div>
          <p>Sensor {data.sensorId}: {sensor.name}</p>
          <p>{this.dateLocalizer(data.time)}</p>
          <p>{data.value} {sensor.units}</p>
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