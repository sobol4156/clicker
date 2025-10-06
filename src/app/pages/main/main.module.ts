import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ClickerModule } from 'src/app/modules/clicker/clicker.module';
import { MainRoutingModule } from './main-routing.module';
import { AsideUpgradeModule } from 'src/app/modules/aside-upgrade/aside-upgrade.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule, ClickerModule,
    AsideUpgradeModule
  ],
})
export class MainModule { }
