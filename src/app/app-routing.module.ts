import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';


const routes: Routes = [
  {
    component: AddVehicleComponent,
    path: 'add-vehicle'
  },
  {
    component: UpdateVehicleComponent,
    path: 'update-vehicle'
  },
  {
    component: ListVehicleComponent,
    path: 'list-vehicle'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
