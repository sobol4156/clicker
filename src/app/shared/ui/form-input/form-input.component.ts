import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {
  @Input() control!: AbstractControl;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type= 'text';
  @Input() submitted = false;

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}
