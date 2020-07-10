import { Component, OnInit,  Directive, ElementRef } from '@angular/core';
import { VehicleServiceService } from '../vehicle-service.service'

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {
 
  birthday = new Date(1988, 3, 15);

  constructor(private instanceService: VehicleServiceService, el: ElementRef) { }

  collection = {};

  ngOnInit(): void {
    this.instanceService.getList().subscribe((data) => {
      console.warn(data);
      this.collection = data;
    })
  }

  logOut(){
    localStorage.removeItem('key');localStorage.removeItem('body');
  }

}
