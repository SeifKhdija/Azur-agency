import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainAgricoleComponent } from './terrain-agricole.component';

describe('TerrainAgricoleComponent', () => {
  let component: TerrainAgricoleComponent;
  let fixture: ComponentFixture<TerrainAgricoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainAgricoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainAgricoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
