import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterAppartementComponent } from './acheter-appartement.component';

describe('AcheterAppartementComponent', () => {
  let component: AcheterAppartementComponent;
  let fixture: ComponentFixture<AcheterAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
