import { ComponentFixture, TestBed } from '@angular/core/testing';

import {StoreComponent } from './store.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'src/app/shared/ui/button/button.module';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreComponent],
      imports: [CommonModule, ButtonModule]
    });
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
