import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAsideComponent } from './recherche-aside.component';

describe('RechercheAsideComponent', () => {
  let component: RechercheAsideComponent;
  let fixture: ComponentFixture<RechercheAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
