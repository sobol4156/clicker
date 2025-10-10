import { TestBed } from '@angular/core/testing';

import { ClickerService } from './clicker.service';

describe('ClickerService', () => {
  let service: ClickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickerService);

    const store: Record<string, string> = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string) => store[key] || null);
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string) => store[key] = value);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('increment должен увеличивать кол-во монет', () => {
    let coins = 0;
    service.myCoins$.subscribe(val => coins = val)

    service.increment();
    expect(coins).toBeGreaterThan(0)
  })

  it('buyStrongClick должен уменьшать монеты и увеличивать бонус, если хватает монет', () => {
    (service as any)._myCoins.next(100);
    const oldBonus = (service as any)._coinBonus.value;

    service.buyStrongClick();

    expect((service as any)._myCoins.value).toBeLessThan(100);
    expect((service as any)._coinBonus.value).toBeGreaterThan(oldBonus);
  })

  it('buyAutoClick должен увеличивать авто-бонус', () => {
    (service as any)._myCoins.next(100);
    const oldAutoBonus = (service as any)._autoBonus.value

    service.buyAutoClick();

    expect((service as any)._myCoins.value).toBeLessThan(100);
    expect((service as any)._autoBonus.value).toBeGreaterThan(oldAutoBonus)
  })

  it('resetProgress должен обнулять прогресс и увеличивать ratioGame при положительном балансе', () => {
    (service as any)._myCoins.next(6000);
    (service as any)._resetGamePrice.next(5000);
    const oldRatio = (service as any)._ratioGame.value

    service.resetProgress();

    expect((service as any)._myCoins.value).toBe(0);
    expect((service as any)._ratioGame.value).toBeGreaterThan(oldRatio);
  })

    it('resetProgress не должен обнулять прогресс и увеличивать ratioGame при недостаточном балансе', () => {
    (service as any)._myCoins.next(4000);
    (service as any)._resetGamePrice.next(5000);
    const oldRatio = (service as any)._ratioGame.value

    service.resetProgress();

    expect((service as any)._myCoins.value).toBe(4000);
    expect((service as any)._ratioGame.value).toBe(oldRatio)
  })

  it('saveProgress должен вызывать setItem для localStorage', () => {
    service.saveProgress();
    expect(localStorage.setItem).toHaveBeenCalled();
  })

    it('autoClick при вызове должен добавлять монеты', () => {
    (service as any)._myCoins.next(0);
    (service as any)._autoBonus.next(2);
    (service as any)._ratioGame.next(2);
    service.autoClick();

    expect((service as any)._myCoins.value).toBe(4)
  })
});
