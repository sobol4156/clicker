import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormInputModule } from 'src/app/shared/ui/form-input/form-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormInputModule, ReactiveFormsModule, ButtonModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
