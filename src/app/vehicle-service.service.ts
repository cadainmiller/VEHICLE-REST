import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VehicleServiceService {

  url = "http://localhost:4000/vehicle";

  constructor(private http: HttpClient) { }

  getList() {
    {
      return this.http.get(this.url);
      console.warn("Get List Service");
    }
  }

  saveVehicle(data)
  {
    return this.http.post(this.url,data).subscribe((data) => {
      console.warn("Result", data)
    })
   }
}
