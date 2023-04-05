import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinechartsComponent } from './linecharts/linecharts.component';
import { ColumnchartComponent } from './columnchart/columnchart.component';

const routes: Routes = [
  // {path:'', component:LinechartsComponent},
  // {path:'columnchart', component:ColumnchartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
