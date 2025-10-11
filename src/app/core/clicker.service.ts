import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickerService {
  private _myCoins = new BehaviorSubject<number>(0);
  private _coinBonus = new BehaviorSubject<number>(1);
  private _autoBonus = new BehaviorSubject<number>(0)
  private _priceStrongClick = new BehaviorSubject<number>(12);
  private _priceAutoClick = new BehaviorSubject<number>(30)
  private _ratioGame = new BehaviorSubject<number>(1)
  private _resetGamePrice = new BehaviorSubject<number>(5000)

  myCoins$ = this._myCoins.asObservable();
  coinBonus$ = this._coinBonus;
  autoBonus$ = this._autoBonus;
  priceStrongClick$ = this._priceStrongClick.asObservable();
  priceAutoClick$ = this._priceAutoClick;
  ratioGame$ = this._ratioGame
  resetGamePrice$ = this._resetGamePrice

  constructor() {
    this.startAutoSave()
    this.initSaveData()

    interval(2000).subscribe(() => this.autoClick())
  }

  autoClick() {
    const autoIncome = this._autoBonus.value * this._ratioGame.value;
    this._myCoins.next((parseFloat((this._myCoins.value + autoIncome).toFixed(2))))
  }

  private initSaveData() {
    const get = (key: string, fallback: number) =>
      +(localStorage.getItem(key) || fallback);

    this._myCoins.next(get('myCoins', 0));
    this._coinBonus.next(get('coinBonus', 1));
    this._autoBonus.next(get('autoBonus', 0));
    this._priceStrongClick.next(get('priceStrongClick', 12));
    this._priceAutoClick.next(get('priceAutoClick', 30));
    this._ratioGame.next(get('ratioGame', 1));
    this._resetGamePrice.next(get('resetGamePrice', 5000))
  }

  private startAutoSave() {
    interval(5000).subscribe(() => this.saveProgress())
  }

  saveProgress() {
    localStorage.setItem('myCoins', this._myCoins.value.toString());
    localStorage.setItem('coinBonus', this._coinBonus.value.toString());
    localStorage.setItem('autoBonus', this._autoBonus.value.toString());
    localStorage.setItem('priceStrongClick', this._priceStrongClick.value.toString());
    localStorage.setItem('priceAutoClick', this._priceAutoClick.value.toString());
    localStorage.setItem('ratioGame', this._ratioGame.value.toString());
    localStorage.setItem('resetGamePrice', this._resetGamePrice.value.toString());
  }

  increment() {
    const incrementValue = this._coinBonus.value * this._ratioGame.value;
    const newTotal = this._myCoins.value + incrementValue;

    this._myCoins.next(parseFloat(newTotal.toFixed(2)));
  }

  buyStrongClick() {
    if (this._myCoins.value >= this._priceStrongClick.value) {
      this._myCoins.next(parseFloat((this._myCoins.value - this._priceStrongClick.value).toFixed(2)));
      this._coinBonus.next(parseFloat((this._coinBonus.value + 1 * this._ratioGame.value).toFixed(2)));
      this._priceStrongClick.next(Math.floor(this._priceStrongClick.value * 1.15));
    }
  }

  buyAutoClick() {
    if (this._myCoins.value >= this._priceAutoClick.value) {
      this._myCoins.next(parseFloat((this._myCoins.value - this._priceAutoClick.value).toFixed(2)));
      this._autoBonus.next(parseFloat((this._autoBonus.value + 1 * this._ratioGame.value).toFixed(2)));
      this._priceAutoClick.next(Math.floor(this._priceAutoClick.value * 1.1));
    }
  }

  resetProgress() {
    if (this._resetGamePrice.value > this._myCoins.value) return
    this._myCoins.next(0);
    this._autoBonus.next(0);
    this._coinBonus.next(1)
    this._priceAutoClick.next(12);
    this._priceStrongClick.next(30);

    this._resetGamePrice.next(Math.floor(this._resetGamePrice.value * 2.5))
    this._ratioGame.next(Number((this._ratioGame.value * 1.15).toFixed(2)));

    this.saveProgress()
  }
}
