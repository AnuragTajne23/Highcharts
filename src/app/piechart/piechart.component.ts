import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

  highcharts= Highcharts;

  chartOptions:Highcharts.Options ={
    chart: {
      type:'pie',
      backgroundColor:'rgb(128, 175, 240)'
    },
    title:{
      text:'Pie Charts'
    },
    xAxis:{
      categories: ['2015','2016','2017','2018','2019','2020','2021','2022']
    },
    yAxis:{
      title:{
        text:'Runs of Virat Kohli'
      }
    },
    series: [{
      name: 'Runs',
      data:[
        {name:'2015', y: 450},
        {name:'2016', y: 967},
        {name:'2017', y: 610},
        {name:'2018', y: 550},
        {name:'2019', y: 440},
        {name:'2020', y: 300},
        {name:'2021', y: 439},
        {name:'2012', y: 336},
      ],
      type: 'pie'
    }]
  }
}
