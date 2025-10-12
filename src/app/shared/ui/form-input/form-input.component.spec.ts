import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from './form-input.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInputComponent],
      imports: [ReactiveFormsModule]
    });
    
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;

    component.control = new FormControl('');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
