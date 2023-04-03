import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class DashboardModule { }
