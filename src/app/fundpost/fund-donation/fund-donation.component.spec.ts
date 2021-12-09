import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundDonationComponent } from './fund-donation.component';

describe('FundDonationComponent', () => {
  let component: FundDonationComponent;
  let fixture: ComponentFixture<FundDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
