import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsReactiveForm } from './rxjs-reactive-form';

describe('RxjsReactiveForm', () => {
  let component: RxjsReactiveForm;
  let fixture: ComponentFixture<RxjsReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsReactiveForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
