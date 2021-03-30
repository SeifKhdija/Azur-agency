import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcheterStudioComponent } from './acheter-studio.component';

describe('AcheterStudioComponent', () => {
  let component: AcheterStudioComponent;
  let fixture: ComponentFixture<AcheterStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcheterStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcheterStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
