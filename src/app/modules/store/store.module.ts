import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule, ButtonModule
  ],
  exports: [
    StoreComponent
  ]
})
export class StoreModule { }
