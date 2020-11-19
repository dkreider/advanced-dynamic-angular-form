import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FormField } from './form-field';
import { InputCheckbox } from './input-checkbox';
import { InputDropdown } from './input-dropdown';
import { InputRadio } from './input-radio';
import { InputTextarea } from './input-textarea';
import { InputTextbox } from './input-textbox';

@Injectable({
  providedIn: 'root'
})
export class FormfieldControlService {

  constructor() { }

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      group[input.key] = input.required ? new FormControl(input.value || '', Validators.required)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  getQuestions() {

    const inputs: FormField<string>[] = [

      new InputTextbox({
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new InputTextbox({
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      }),

      new InputDropdown({
        key: 'country',
        label: 'Country',
        options: [
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'}
        ],
        order: 3
      }),

      new InputCheckbox({
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 4
      }),

      new InputRadio({
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        order: 5
      }),

      new InputTextarea({
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 6
      })
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
