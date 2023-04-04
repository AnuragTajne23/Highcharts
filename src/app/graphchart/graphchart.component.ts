import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-graphchart',
  templateUrl: './graphchart.component.html',
  styleUrls: ['./graphchart.component.css']
})
export class GraphchartComponent {

  highcharts=Highcharts;

  chartOptions:Highcharts.Options={
    chart:{
      type:'area',
      backgroundColor:'rgb(153, 245, 182 )',
    },
    title:{
      text:'Graph Charts'
    },
    xAxis:{
      categories:['2015','2016','2017','2018','2019','2020','2021','2022']
    },
    yAxis:{
      title:{
        text:'Sixes of Virat Kohli'
      }
    },
    series:[{
      name:'year',
      data:[30,45,34,25,15,18,11,24],
      type:'area'
    }]
  }
}
