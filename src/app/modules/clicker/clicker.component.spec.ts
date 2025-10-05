import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerComponent } from './clicker.component';

describe('ClickerComponent', () => {
  let component: ClickerComponent;
  let fixture: ComponentFixture<ClickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickerComponent]
    });
    fixture = TestBed.createComponent(ClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
