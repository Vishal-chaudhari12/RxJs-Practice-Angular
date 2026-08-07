import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsReactiveForms } from './rxjs-reactive-forms';

describe('RxjsReactiveForms', () => {
  let component: RxjsReactiveForms;
  let fixture: ComponentFixture<RxjsReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsReactiveForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
