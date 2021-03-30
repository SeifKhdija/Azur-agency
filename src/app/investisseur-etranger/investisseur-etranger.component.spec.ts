import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestisseurEtrangerComponent } from './investisseur-etranger.component';

describe('InvestisseurEtrangerComponent', () => {
  let component: InvestisseurEtrangerComponent;
  let fixture: ComponentFixture<InvestisseurEtrangerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestisseurEtrangerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestisseurEtrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
