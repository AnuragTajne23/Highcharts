import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-scatterchart',
  templateUrl: './scatterchart.component.html',
  styleUrls: ['./scatterchart.component.css']
})
export class ScatterchartComponent {

  highcharts= Highcharts;

  chartOptions:Highcharts.Options ={
    chart: {
      type:'scatter',
      backgroundColor:'rgb(238, 244, 129)'
    },
    title:{
      text:'Scatter Charts'
    },
    xAxis:{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis:{
      title:{
        text:'Wickets of M.Siraj'
      }
    },
    series:[{
      name:'Wickets',
      data:[1, 5, 7, 11,13, 19, 32, 37,14, 22, 34, 24],
      type:'scatter'
    }]
  }
}
