import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leadership } from './leadership';

describe('Leadership', () => {
  let component: Leadership;
  let fixture: ComponentFixture<Leadership>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Leadership],
    }).compileComponents();

    fixture = TestBed.createComponent(Leadership);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
