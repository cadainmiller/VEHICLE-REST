import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { HeaderInterceptor  } from './token.interceptor';
import { AppComponent } from './app.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { LoginComponent } from './login/login.component';
import { SearchCarrierComponent } from './search-carrier/search-carrier.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleComponent,
    UpdateVehicleComponent,
    ListVehicleComponent,
    LoginComponent,
    SearchCarrierComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
