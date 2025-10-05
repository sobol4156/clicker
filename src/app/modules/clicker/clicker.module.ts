import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickerComponent } from './clicker.component';

@NgModule({
  declarations: [ClickerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ClickerComponent
  ]
})
export class ClickerModule {

 }
