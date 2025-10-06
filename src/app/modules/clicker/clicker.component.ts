import { Component } from '@angular/core';
import { Subject, throttleTime, timer } from 'rxjs';
import { ClickerService } from 'src/app/core/clicker.service';

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
  popups: Popup[] = [];

  private click$ = new Subject<MouseEvent>();

  constructor(public clicker: ClickerService) {

    this.click$
      .pipe(throttleTime(50))
      .subscribe((event) => this.handleIncrement(event))
  }

  increment(event: MouseEvent) {
    this.click$.next(event);
  }

  private handleIncrement(event: MouseEvent) {
    this.clicker.increment()

    const target = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - target.left - 10;
    const y = event.clientY - target.top - 20;


    const newPopup: Popup = {
      id: Date.now(),
      value: this.clicker.coinBonus$.getValue(),
      x,
      y
    }
    this.popups.push(newPopup);

    timer(1000).subscribe(() => {
      this.popups = this.popups.filter(p => p.id !== newPopup.id);
    });


  }
}
