import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule, RegisterModule, LoginModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
