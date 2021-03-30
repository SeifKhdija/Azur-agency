import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterBureauxComponent } from './acheter-bureaux.component';

describe('AcheterBureauxComponent', () => {
  let component: AcheterBureauxComponent;
  let fixture: ComponentFixture<AcheterBureauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterBureauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterBureauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
