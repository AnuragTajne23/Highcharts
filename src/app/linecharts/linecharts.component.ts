import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-linecharts',
  templateUrl: './linecharts.component.html',
  styleUrls: ['./linecharts.component.css']
})
export class LinechartsComponent {

  highcharts = Highcharts;

  chartOptions : Highcharts.Options= {
    chart: {
      type:'line',
      backgroundColor:'rgb(233, 226, 141)'
    },
    title: {
      text: 'Line Charts'
    },
    xAxis:{
      categories:['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    },
    yAxis:{
      // categories:['20', '40', '60', '80', '100',  '120', '140', '160',  '180'],
      title:{
        text: 'Runs Comparison'
      },
    },
    series:[{
      name:'India',
      data:[10, 18, 27, 33,44, 54, 60, 67,74, 82, 90, 96,107,116,125, 140, 149, 158,171, 184],
      type: 'line'
    },
    {
      name:'Australia',
      data:[9, 15, 24, 38,47, 56, 65, 64,74,79, 80, 86,95,100,112, 120, 129, 138,151],
      type: 'line'
    },
  ]
  }
}
