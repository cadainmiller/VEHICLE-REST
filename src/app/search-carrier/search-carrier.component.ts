import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login-service";
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-search-carrier',
  templateUrl: './search-carrier.component.html',
  styleUrls: ['./search-carrier.component.scss']
})
export class SearchCarrierComponent implements OnInit {

  constructor(private loginInstance: LoginService,) { }

  searchCarrier = new FormGroup({
    id: new FormControl(''),
  })

  detailsCarrier = new FormGroup({
    cname: new FormControl(''),
    cemail: new FormControl(''),
    cstreet: new FormControl(''),
    ccity: new FormControl(''),
    cstate: new FormControl(''),
    czip: new FormControl('')
  })

  get username() {
    return this.searchCarrier.get('id')
  }

  getCarrier() {

    // var testCarrierID = 'a5349440-3674-4713-9fcd-22d946cf8ddf';
    var testCarrierID = this.searchCarrier.value.id;

    this.loginInstance.GetCarrierById(testCarrierID)
      .subscribe((data) => {
        console.log("Carrier", data);
        this.populateFormControl(data);
      })
  }

  populateFormControl(carrier){
    this.detailsCarrier.get('cname').setValue(carrier.Name);
    this.detailsCarrier.get('cemail').setValue(carrier.Address.Email);
    this.detailsCarrier.get('cstreet').setValue(carrier.Address.Street);
    this.detailsCarrier.get('ccity').setValue(carrier.Address.City);
    this.detailsCarrier.get('cstate').setValue(carrier.Address.State);
    this.detailsCarrier.get('czip').setValue(carrier.Address.Zip)
  }

  ngOnInit(): void {
  }

}
