import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesummaryComponent } from './statesummary.component';

describe('StatesummaryComponent', () => {
  let component: StatesummaryComponent;
  let fixture: ComponentFixture<StatesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
