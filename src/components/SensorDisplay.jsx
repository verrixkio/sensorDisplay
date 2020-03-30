import React from 'react';
import TableBuilder from './TableBuilder';

var sensorData = require('../sensors.json');

function SensorDisplay() {

    return (
      <div>
        {sensorData.map(sensor => 
          <TableBuilder key={"sensor-map" + sensor.id} sensor={sensor}/>
        )}
      </div>
    );
};

export default SensorDisplay;