import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsContainer } from './doctors-container';

describe('DoctorsContainer', () => {
  let component: DoctorsContainer;
  let fixture: ComponentFixture<DoctorsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
