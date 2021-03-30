import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterMaisonComponent } from './acheter-maison.component';

describe('AcheterMaisonComponent', () => {
  let component: AcheterMaisonComponent;
  let fixture: ComponentFixture<AcheterMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
