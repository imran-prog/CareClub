import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDonateComponent } from './gen-donate.component';

describe('GenDonateComponent', () => {
  let component: GenDonateComponent;
  let fixture: ComponentFixture<GenDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
