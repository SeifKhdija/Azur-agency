import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerMaisonComponent } from './louer-maison.component';

describe('LouerMaisonComponent', () => {
  let component: LouerMaisonComponent;
  let fixture: ComponentFixture<LouerMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
