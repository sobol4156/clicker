import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private _myCoins = new BehaviorSubject<number>(0);
  private _coinBonus = new BehaviorSubject<number>(1);
  private _priceStrongClick = new BehaviorSubject<number>(12);

  myCoins$ = this._myCoins.asObservable();
  coinBonus$ = this._coinBonus.asObservable();
  priceStrongClick$ = this._priceStrongClick.asObservable();

  constructor() { }

  increment() {
    this._myCoins.next(this._myCoins.value + this._coinBonus.value);
  }

  buyStrongClick() {
    if (this._myCoins.value >= this._priceStrongClick.value) {
      this._myCoins.next(this._myCoins.value - this._priceStrongClick.value);
      this._coinBonus.next(this._coinBonus.value + 1);
      this._priceStrongClick.next(Math.floor(this._priceStrongClick.value * 1.15));
    }
  }
}
