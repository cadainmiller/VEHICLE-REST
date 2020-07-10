import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { LoginComponent } from './login/login.component';
import { SearchCarrierComponent } from './search-carrier/search-carrier.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  {
    component: AddVehicleComponent,
    path: 'add-vehicle',
    canActivate: [AuthGuard]
    
  },
  {
    component: UpdateVehicleComponent,
    path: 'update-vehicle',
    canActivate: [AuthGuard]
  },
  {
    component: ListVehicleComponent,
    path: 'list-vehicle',
    canActivate: [AuthGuard]
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SearchCarrierComponent,
    path: 'search',
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
