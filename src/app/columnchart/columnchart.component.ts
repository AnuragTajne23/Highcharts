import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-columnchart',
  templateUrl: './columnchart.component.html',
  styleUrls: ['./columnchart.component.css'],
})
export class ColumnchartComponent {
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
      backgroundColor: 'rgb(247, 149, 149)',
    },
    title: {
      text: 'Column Charts',
    },
    xAxis: {
      categories: [
        'Rohit Sharma',
        'Virat Kohli',
        'Chris Gayle',
        'AB Develiers',
        'Suresh Raina',
        'David Warner',
        'Shikar Dhawan',
      ],
    },
    yAxis: {
      // categories: ['1000','2000','3000','4000','5000','6000','7000','8000'],
      title: {
        text: 'Runs',
      },
    },
    series: [
      {
        data: [5745, 7786, 6025, 6500, 6700, 6352, 7501],
        type: 'column',
      },
    ],
  };
}
