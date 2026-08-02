import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineOps } from './combine-ops';

describe('CombineOps', () => {
  let component: CombineOps;
  let fixture: ComponentFixture<CombineOps>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineOps]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineOps);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
