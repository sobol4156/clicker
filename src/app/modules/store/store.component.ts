import { Component, inject } from '@angular/core';
import { ClickerService } from 'src/app/core/clicker/clicker.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  isOpenStore = false;
  clicker = inject(ClickerService)

  buyStrongClick() {
    this.clicker.buyStrongClick()
  }
  buyAutoClick() {
    this.clicker.buyAutoClick()
  }

  resetProgress() {
    this.clicker.resetProgress()
  }

  toggleStore(event: Event) {
    if (event instanceof KeyboardEvent) return;
    this.isOpenStore = !this.isOpenStore
  }
}
