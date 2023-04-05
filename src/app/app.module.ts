import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ColumnchartComponent } from './columnchart/columnchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { GraphchartComponent } from './graphchart/graphchart.component';
import { ScatterchartComponent } from './scatterchart/scatterchart.component';
import { SplinechartComponent } from './splinechart/splinechart.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartsComponent,
    ColumnchartComponent,
    PiechartComponent,
    GraphchartComponent,
    ScatterchartComponent,
    SplinechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
