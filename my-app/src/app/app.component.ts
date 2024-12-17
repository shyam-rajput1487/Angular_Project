import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,AddEmployeeComponent],
  templateUrl: './app.component.html',
  template:'<div>hello</div>',
  styleUrl: './app.component.scss'
})
export class AppComponent 
{
title='my-app';
}
