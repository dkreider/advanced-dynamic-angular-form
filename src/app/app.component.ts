import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from './form-field';
import { FormfieldControlService } from './formfield-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormfieldControlService]
})
export class AppComponent {
  title = 'AngularDynamicForms';
  formFields: Observable<FormField<any>[]>;
  constructor(service: FormfieldControlService) {
    this.formFields = service.getFormFields();
  }
}
