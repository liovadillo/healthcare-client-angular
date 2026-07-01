import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFormContainer } from './doctor-form-container';

describe('DoctorFormContainer', () => {
  let component: DoctorFormContainer;
  let fixture: ComponentFixture<DoctorFormContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorFormContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorFormContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
