import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubBehShareReplay } from './sub-beh-share-replay';

describe('SubBehShareReplay', () => {
  let component: SubBehShareReplay;
  let fixture: ComponentFixture<SubBehShareReplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubBehShareReplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubBehShareReplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
