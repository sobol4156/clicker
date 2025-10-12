import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClickerModule } from 'src/app/modules/clicker/clicker.module';
import { MainRoutingModule } from './main-routing.module';
import { StoreModule } from 'src/app/modules/store/store.module';
import { AuthModule } from 'src/app/modules/auth/auth.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule, ClickerModule,
    StoreModule, AuthModule
  ],
})
export class MainModule { }
