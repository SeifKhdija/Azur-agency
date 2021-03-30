import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerAppartementComponent } from './louer-appartement.component';

describe('LouerAppartementComponent', () => {
  let component: LouerAppartementComponent;
  let fixture: ComponentFixture<LouerAppartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerAppartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
