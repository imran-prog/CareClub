import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDonateComponent } from './fund-donate.component';

describe('FundDonateComponent', () => {
  let component: FundDonateComponent;
  let fixture: ComponentFixture<FundDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundDonateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
