import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialVenteComponent } from './commercial-vente.component';

describe('CommercialVenteComponent', () => {
  let component: CommercialVenteComponent;
  let fixture: ComponentFixture<CommercialVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
