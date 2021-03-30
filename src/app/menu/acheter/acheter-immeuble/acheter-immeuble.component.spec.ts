import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterImmeubleComponent } from './acheter-immeuble.component';

describe('AcheterImmeubleComponent', () => {
  let component: AcheterImmeubleComponent;
  let fixture: ComponentFixture<AcheterImmeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterImmeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
