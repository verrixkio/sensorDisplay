import React from 'react';
import SensorMapper from './SensorMapper';

var sensorData = require('../sensors.json');
class SensorDisplay extends React.Component { 

  render() {

    return (
      <div>
        {sensorData.map(sensor => 
          <SensorMapper key={"sensor-map" + sensor.id} sensor={sensor}/>
        )}
      </div>
    );
  }
}

export default SensorDisplay;