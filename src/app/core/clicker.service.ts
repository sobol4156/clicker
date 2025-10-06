import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private _myCoins = new BehaviorSubject<number>(0);
  private _coinBonus = new BehaviorSubject<number>(1);
  private _priceStrongClick = new BehaviorSubject<number>(12);

  myCoins$ = this._myCoins.asObservable();
  coinBonus$ = this._coinBonus;
  priceStrongClick$ = this._priceStrongClick.asObservable();

  constructor() {
    interval(5000).subscribe(() => {
      localStorage.setItem('myCoins', this._myCoins.value.toString());
      localStorage.setItem('coinBonus', this._coinBonus.value.toString());
      localStorage.setItem('priceStrongClick', this._priceStrongClick.value.toString())
    })

    const savedCoins = localStorage.getItem('myCoins')
    if (savedCoins) this._myCoins.next(+savedCoins);
    const savedCoinBonus = localStorage.getItem('coinBonus')
    if (savedCoinBonus) this._coinBonus.next(+savedCoinBonus);
    const savedPriceStrongClick = localStorage.getItem('priceStrongClick')
    if (savedPriceStrongClick) this._priceStrongClick.next(+savedPriceStrongClick);
  }

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
