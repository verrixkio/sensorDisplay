import React from 'react';

var sensorData = require('../sensors.json');

class SensorDisplay extends React.Component {
    
  render() {
    return (
      <div>
        {sensorData.map(data => 
        <div>
          <div>{data.id}</div>
          <div>{data.name}</div>
          <div>{data.type}</div>
          <div>{data.createdAt}</div>
          <div>{data.units}</div>
        </div>
        )}
      </div>
    );
  }
}

export default SensorDisplay;