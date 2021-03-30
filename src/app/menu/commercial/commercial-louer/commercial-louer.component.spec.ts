import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialLouerComponent } from './commercial-louer.component';

describe('CommercialLouerComponent', () => {
  let component: CommercialLouerComponent;
  let fixture: ComponentFixture<CommercialLouerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialLouerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialLouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
