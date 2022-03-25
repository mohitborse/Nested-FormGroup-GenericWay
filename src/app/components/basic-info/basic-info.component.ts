import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
})
export class basicInfoComponent {
  form: FormGroup;
  @Input() formGroupName: string;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
     this.form = this.rootFormGroup.control;
     this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
