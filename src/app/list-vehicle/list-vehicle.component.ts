import { Component, OnInit } from '@angular/core';
import { VehicleServiceService } from '../vehicle-service.service'

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  constructor(private instanceService: VehicleServiceService) { }

  ngOnInit(): void {
  }

}
