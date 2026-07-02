import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsObsevables } from './rx-js-obsevables';

describe('RxJsObsevables', () => {
  let component: RxJsObsevables;
  let fixture: ComponentFixture<RxJsObsevables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsObsevables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsObsevables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
