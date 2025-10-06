import { Component } from '@angular/core';
import { ClickerService } from 'src/app/core/clicker.service';

@Component({
  selector: 'app-aside-upgrade',
  templateUrl: './aside-upgrade.component.html',
  styleUrls: ['./aside-upgrade.component.scss']
})
export class AsideUpgradeComponent {
  constructor(public clicker: ClickerService) {

  }

  buyStrongClick() {
    this.clicker.buyStrongClick()
  }
  buyAutoClick(){
   this.clicker.buyAutoClick()
  }
}
