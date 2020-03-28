import React from 'react';

var sensorData = require('../sensors.json');
var readingData = require('../readings.json');

class SensorDisplay extends React.Component {
  
  
  dateLocalizer(date) {
    let dateObj = new Date (date)
    let localTime = dateObj.toLocaleTimeString();
    let localDay = dateObj.toLocaleDateString();
    return <h3>{localDay + " " + localTime}</h3>
  }

  // We want a function that takes in a sensor.

  sensorMapper(sensor) {

  //Now render out the readings with each specific sensor
  let currentSensor = sensor.id

  //Get the values from readings that match currentSensor
  const readingValues = readingData.map(data => {
    console.log(data.sensorId, ' reading data', currentSensor)
    if (data.sensorId === currentSensor) {
      return (
        <div>
          <p>{data.sensorId}</p>
          <p>{data.time}</p>
          <p>{data.value}</p>
        </div>
      )
    }
  })
    return (
    <div>
      <h2>Sensor</h2>
      <div>{sensor.id}</div>
      <div>{sensor.name}</div>
      <div>{sensor.type}</div>
      <div>{this.dateLocalizer(sensor.createdAt)}</div>
      <div>{sensor.units}</div>
      <h2>Reading Data</h2>
      <div>{readingValues}</div>
    </div>
    )
  }
  

  render() {
    return (
      <div>
        <h1>Here are our sensors</h1>
        {sensorData.map(sensor => 
          this.sensorMapper(sensor)
        )}
      </div>
    );
  }
}

export default SensorDisplay;