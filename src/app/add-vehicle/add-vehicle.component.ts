import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { VehicleServiceService } from '../vehicle-service.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  submitted= false;

  constructor(private vehicleInstance: VehicleServiceService) { }

  addVehicleForm = new FormGroup  ({
    make: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    year: new FormControl(),

  })

  get make() {
    return this.addVehicleForm.get('make')
  }

  get model() {
    return this.addVehicleForm.get('model')
  }
  get year(){
    return this.addVehicleForm.get('year')
  }

  collectVehicle(){
    this.vehicleInstance.saveVehicle(this.addVehicleForm.value);
  }

  ngOnInit(): void {
  }

}
