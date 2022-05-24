import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './Employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  public dmployee: Employee[] = [];
  
  constructor(private employeeService : EmployeeService){}

  ngOnInit() {
    this.getEmployee();
  }

  public getEmployee(): void {
    this.employeeService.getEmployee().subscribe(
    (response: Employee[])=>{
      this.dmployee= response;
    },
    (error: HttpErrorResponse)=> {
      alert (error.message);
    }
    );
  }
}
