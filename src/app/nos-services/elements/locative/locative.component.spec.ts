import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocativeComponent } from './locative.component';

describe('LocativeComponent', () => {
  let component: LocativeComponent;
  let fixture: ComponentFixture<LocativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
