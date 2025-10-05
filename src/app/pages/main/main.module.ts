import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClickerModule } from 'src/app/modules/clicker/clicker.module';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule, ClickerModule
  ],
})
export class MainModule { }
