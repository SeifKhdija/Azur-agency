import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerImmeubleComponent } from './louer-immeuble.component';

describe('LouerImmeubleComponent', () => {
  let component: LouerImmeubleComponent;
  let fixture: ComponentFixture<LouerImmeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerImmeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
