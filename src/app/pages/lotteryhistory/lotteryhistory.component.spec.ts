import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryhistoryComponent } from './lotteryhistory.component';

describe('LotteryhistoryComponent', () => {
  let component: LotteryhistoryComponent;
  let fixture: ComponentFixture<LotteryhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
