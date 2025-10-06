import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideUpgradeComponent } from './aside-upgrade.component';

describe('AsideUpgradeComponent', () => {
  let component: AsideUpgradeComponent;
  let fixture: ComponentFixture<AsideUpgradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideUpgradeComponent]
    });
    fixture = TestBed.createComponent(AsideUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
