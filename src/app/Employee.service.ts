import{HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Employee } from "./Employee";

@Injectable ({
    providedIn: "root"})

export class EmployeeService{
private apiServerUrl= 'http:localhost:8080';

    constructor(private http: HttpClient){}


    public getEmployee(): Observable<Employee[]>{
        // const url = `${this.apiServerUrl}/employees`
        // const url = `${this.apiServerUrl}/employees`

        return this.http.get<Employee[]>(`${this.apiServerUrl}/employees`);
    }
}