import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";



@Component({
  selector:'app-address',
  templateUrl:'./address.component.html'
})
export class AddressComponent implements OnInit{
  address: FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {

  }

  createForm(){
   debugger
     this.address= this.fb.group({
      street: [],
      number: [],
      postal: [],
      company: []
    })
    return this.address;
  }
}