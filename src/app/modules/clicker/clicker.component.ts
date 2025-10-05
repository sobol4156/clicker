import { Component } from '@angular/core';
import { timer } from 'rxjs';

interface Popup {
  id: number;
  value: number;
  x: number;
  y: number;
}

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
  myCoins = 0
  coinBonus = 1
  popups: Popup[] = [];

  increment(event: MouseEvent) {
    this.myCoins += this.coinBonus

    const target = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - target.left - 10;
    const y = event.clientY - target.top - 20;

    const newPopup: Popup = {
      id: Date.now(),
      value: 1,
      x,
      y
    }

    this.popups.push(newPopup)

    timer(1000).subscribe(() => {
      this.popups = this.popups.filter(p => p.id !== newPopup.id)
    })
  }

  
}
