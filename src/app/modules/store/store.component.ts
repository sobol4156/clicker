import { Component } from '@angular/core';
import { ClickerService } from 'src/app/core/clicker/clicker.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  isOpenStore = false;

  constructor(public clicker: ClickerService) {

  }

  buyStrongClick() {
    this.clicker.buyStrongClick()
  }
  buyAutoClick() {
    this.clicker.buyAutoClick()
  }

  resetProgress() {
    this.clicker.resetProgress()
  }

  toggleStore() {
    this.isOpenStore = !this.isOpenStore
  }
}
