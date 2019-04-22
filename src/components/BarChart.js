import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
      label: 'Inspections',
      data: [12, 15, 4, 10, 8, 5],
      fill: false,
      backgroundColor: '#5792f4',
      borderColor: 'white',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C',
    }]
};

export default class BarChart extends Component {

  render() {
    return (
      <div>
        <Bar
          data={data}
          width={300}
          height={170}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
}