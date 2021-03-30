import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesclientComponent } from './annoncesclient.component';

describe('AnnoncesclientComponent', () => {
  let component: AnnoncesclientComponent;
  let fixture: ComponentFixture<AnnoncesclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
