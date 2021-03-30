import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerEteComponent } from './louer-ete.component';

describe('LouerEteComponent', () => {
  let component: LouerEteComponent;
  let fixture: ComponentFixture<LouerEteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerEteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerEteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
