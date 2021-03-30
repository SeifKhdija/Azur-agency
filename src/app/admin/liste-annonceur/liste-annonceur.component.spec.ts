import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAnnonceurComponent } from './liste-annonceur.component';

describe('ListeAnnonceurComponent', () => {
  let component: ListeAnnonceurComponent;
  let fixture: ComponentFixture<ListeAnnonceurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAnnonceurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAnnonceurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
