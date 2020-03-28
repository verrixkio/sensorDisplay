import React from 'react';

var sensorData = require('../sensors.json');

class SensorDisplay extends React.Component {
  
  
  dateLocalizer(date) {
    let dateObj = new Date (date)
    let localTime = dateObj.toLocaleTimeString();
    let localDay = dateObj.toLocaleDateString();
    return <h1>{localDay + " " + localTime}</h1>
  }

  render() {
    return (
      <div>

        {sensorData.map(data => 
        <div>
          <div>{data.id}</div>
          <div>{data.name}</div>
          <div>{data.type}</div>
          <div>{this.dateLocalizer(data.createdAt)}</div>
          <div>{data.units}</div>
        </div>
        )}
      </div>
    );
  }
}

export default SensorDisplay;