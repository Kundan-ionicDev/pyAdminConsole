import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponcreateComponent } from './couponcreate.component';

describe('CouponcreateComponent', () => {
  let component: CouponcreateComponent;
  let fixture: ComponentFixture<CouponcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
