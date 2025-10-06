import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private _myCoins = new BehaviorSubject<number>(0);
  private _coinBonus = new BehaviorSubject<number>(1);
  private _autoBonus = new BehaviorSubject<number>(0)
  private _priceStrongClick = new BehaviorSubject<number>(12);
  private _priceAutoClick = new BehaviorSubject<number>(30)

  myCoins$ = this._myCoins.asObservable();
  coinBonus$ = this._coinBonus;
  autoBonus$ = this._autoBonus.asObservable();
  priceStrongClick$ = this._priceStrongClick.asObservable();
  priceAutoClick$ = this._priceAutoClick;

  constructor() {
    this.startAutoSave()
    this.initSaveData()

    interval(2000).subscribe(() => {
      this._myCoins.next(this._myCoins.value + this._autoBonus.value)
    })
  }

  private initSaveData() {
    const savedCoins = localStorage.getItem('myCoins')
    if (savedCoins) this._myCoins.next(+savedCoins);

    const savedCoinBonus = localStorage.getItem('coinBonus')
    if (savedCoinBonus) this._coinBonus.next(+savedCoinBonus);

    const savedPriceStrongClick = localStorage.getItem('priceStrongClick')
    if (savedPriceStrongClick) this._priceStrongClick.next(+savedPriceStrongClick);

    const savedAutoBonus = localStorage.getItem('autoBonus')
    if (savedAutoBonus) this._autoBonus.next(+savedAutoBonus);

    const savedPriceAutoClick = localStorage.getItem('priceAutoClick')
    if (savedPriceAutoClick) this._priceAutoClick.next(+savedPriceAutoClick);
  }

  private startAutoSave() {
    interval(5000).subscribe(() => {
      localStorage.setItem('myCoins', this._myCoins.value.toString());
      localStorage.setItem('coinBonus', this._coinBonus.value.toString());
      localStorage.setItem('priceStrongClick', this._priceStrongClick.value.toString())

      localStorage.setItem('autoBonus', this._autoBonus.value.toString())
      localStorage.setItem('priceAutoClick', this._priceAutoClick.value.toString())
    })
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

  buyAutoClick() {
    if (this._myCoins.value >= this._priceStrongClick.value) {
      this._myCoins.next(this._myCoins.value - this._priceAutoClick.value)
      this._autoBonus.next(this._autoBonus.value + 1);
      this._priceAutoClick.next(Math.floor(this._priceAutoClick.value * 1.1));
    }
  }
}
