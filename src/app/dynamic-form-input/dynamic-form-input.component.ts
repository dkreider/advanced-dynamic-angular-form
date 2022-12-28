import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { FormField } from '../form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent {

  @Input() input: FormField<string>;
  @Input() form: UntypedFormGroup;
  
  get isValid() { return this.form.controls[this.input.key].valid; }

}
