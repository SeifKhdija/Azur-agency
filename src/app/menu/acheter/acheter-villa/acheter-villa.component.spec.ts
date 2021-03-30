import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterVillaComponent } from './acheter-villa.component';

describe('AcheterVillaComponent', () => {
  let component: AcheterVillaComponent;
  let fixture: ComponentFixture<AcheterVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
