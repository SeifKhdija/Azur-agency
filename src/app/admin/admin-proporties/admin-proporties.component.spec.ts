import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProportiesComponent } from './admin-proporties.component';

describe('AdminProportiesComponent', () => {
  let component: AdminProportiesComponent;
  let fixture: ComponentFixture<AdminProportiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProportiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProportiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
