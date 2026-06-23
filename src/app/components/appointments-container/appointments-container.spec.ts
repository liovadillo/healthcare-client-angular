import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsContainer } from './appointments-container';

describe('AppointmentsContainer', () => {
  let component: AppointmentsContainer;
  let fixture: ComponentFixture<AppointmentsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
