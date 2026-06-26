import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientContainer } from './patient-container';

describe('PatientContainer', () => {
  let component: PatientContainer;
  let fixture: ComponentFixture<PatientContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
