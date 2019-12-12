import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweventsComponent } from './viewevents.component';

describe('VieweventsComponent', () => {
  let component: VieweventsComponent;
  let fixture: ComponentFixture<VieweventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieweventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
