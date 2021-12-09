import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundpostComponent } from './fundpost.component';

describe('FundpostComponent', () => {
  let component: FundpostComponent;
  let fixture: ComponentFixture<FundpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
