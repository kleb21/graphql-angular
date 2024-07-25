import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styles: ``
})
export class FormValidatorComponent {
  @Input() fieldName!: string;

}
