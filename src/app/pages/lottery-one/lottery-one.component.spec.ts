import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryOneComponent } from './lottery-one.component';

describe('LotteryOneComponent', () => {
  let component: LotteryOneComponent;
  let fixture: ComponentFixture<LotteryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
