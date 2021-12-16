import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundmeComponent } from './fundme.component';

describe('FundmeComponent', () => {
  let component: FundmeComponent;
  let fixture: ComponentFixture<FundmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
