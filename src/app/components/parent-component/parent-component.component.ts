import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AddressComponent } from "../other-info/address.component";


@Component({
  selector:'app-parent-component',
  templateUrl:'./parent-component.component.html'
})
export class parentComponentComponent implements OnInit{
  userForm: FormGroup;
 @ViewChild(AddressComponent,{static:true}) addressForm:AddressComponent;
  constructor(private fb:FormBuilder){

  }
ngOnInit(): void {
  this.userForm = this.fb.group({
    basicInfo: this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      age: []
    }),
    address:this.addressForm.createForm()
  });
}

  
}