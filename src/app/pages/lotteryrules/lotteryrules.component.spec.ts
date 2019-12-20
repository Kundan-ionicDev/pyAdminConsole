import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryrulesComponent } from './lotteryrules.component';

describe('LotteryrulesComponent', () => {
  let component: LotteryrulesComponent;
  let fixture: ComponentFixture<LotteryrulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryrulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
