import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationadminComponent } from './applicationadmin.component';

describe('ApplicationadminComponent', () => {
  let component: ApplicationadminComponent;
  let fixture: ComponentFixture<ApplicationadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
