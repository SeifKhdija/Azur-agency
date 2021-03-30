import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerBureauxComponent } from './louer-bureaux.component';

describe('LouerBureauxComponent', () => {
  let component: LouerBureauxComponent;
  let fixture: ComponentFixture<LouerBureauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerBureauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
