import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideUpgradeComponent } from './aside-upgrade.component';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';

@NgModule({
  declarations: [
    AsideUpgradeComponent
  ],
  imports: [
    CommonModule, ButtonModule
  ],
  exports: [
    AsideUpgradeComponent
  ]
})
export class AsideUpgradeModule { }
