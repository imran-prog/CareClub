import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDonationsComponent } from './profile-donations.component';

describe('ProfileDonationsComponent', () => {
  let component: ProfileDonationsComponent;
  let fixture: ComponentFixture<ProfileDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
