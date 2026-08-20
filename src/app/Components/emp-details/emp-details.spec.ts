import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetails } from './emp-details';

describe('EmpDetails', () => {
  let component: EmpDetails;
  let fixture: ComponentFixture<EmpDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
