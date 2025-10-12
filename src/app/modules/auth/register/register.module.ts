import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { FormInputModule } from 'src/app/shared/ui/form-input/form-input.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { ButtonModule } from 'src/app/shared/ui/button/button.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule, FormInputModule, ReactiveFormsModule, ButtonModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
