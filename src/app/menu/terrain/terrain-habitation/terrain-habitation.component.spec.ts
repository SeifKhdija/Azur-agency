import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainHabitationComponent } from './terrain-habitation.component';

describe('TerrainHabitationComponent', () => {
  let component: TerrainHabitationComponent;
  let fixture: ComponentFixture<TerrainHabitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainHabitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainHabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
