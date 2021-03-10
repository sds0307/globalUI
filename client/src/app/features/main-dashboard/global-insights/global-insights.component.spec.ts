import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInsightsComponent } from './global-insights.component';

describe('GlobalInsightsComponent', () => {
  let component: GlobalInsightsComponent;
  let fixture: ComponentFixture<GlobalInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
