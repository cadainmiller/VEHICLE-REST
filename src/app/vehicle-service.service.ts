import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  //url = "http://localhost:4000/vehicle";

  constructor(private http: HttpClient) { }

  getList() {
    console.warn("Get List Service");
  }
}
