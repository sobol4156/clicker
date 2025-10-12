import { Component, ElementRef, inject, ViewChild, AfterViewInit } from '@angular/core';
import { Subject, throttleTime, timer } from 'rxjs';
import { ClickerService } from 'src/app/core/clicker/clicker.service';

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
export class ClickerComponent implements AfterViewInit {
  clicker = inject(ClickerService)
  popups: Popup[] = [];

  private click$ = new Subject<MouseEvent>();

  constructor() {
    this.click$
      .pipe(throttleTime(50))
      .subscribe((event) => this.handleIncrement(event))
  }

  increment(event: Event) {
    if (event instanceof KeyboardEvent) return;

    if (event instanceof MouseEvent) {
      this.click$.next(event);
    }
  }

  private handleIncrement(event: MouseEvent) {
    this.clicker.increment()

    const target = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = event.clientX - target.left - 10;
    const y = event.clientY - target.top - 20;

    const coinBonus = parseFloat((this.clicker.coinBonus$.value * this.clicker.ratioGame$.value).toFixed(2))

    const newPopup: Popup = {
      id: Date.now(),
      value: coinBonus,
      x,
      y
    }
    this.popups.push(newPopup);

    timer(1000).subscribe(() => {
      this.popups = this.popups.filter(p => p.id !== newPopup.id);
    });
  }

  @ViewChild('clickItem', { static: true }) clickItem!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    const clickItem = this.clickItem.nativeElement;

    const addActive = () => clickItem.classList.add('active');
    const removeActive = () => clickItem.classList.remove('active');

    clickItem.addEventListener('touchstart', addActive);
    clickItem.addEventListener('touchend', () => {
      removeActive();
    });

    clickItem.addEventListener('mousedown', addActive);
    clickItem.addEventListener('mouseup', () => {
      setTimeout(() => removeActive(), 100);
      removeActive();
    });

    clickItem.addEventListener('mouseleave', removeActive);
  }
}
