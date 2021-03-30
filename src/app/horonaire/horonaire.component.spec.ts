import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoronaireComponent } from './horonaire.component';

describe('HoronaireComponent', () => {
  let component: HoronaireComponent;
  let fixture: ComponentFixture<HoronaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoronaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoronaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
