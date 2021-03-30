import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerStudioComponent } from './louer-studio.component';

describe('LouerStudioComponent', () => {
  let component: LouerStudioComponent;
  let fixture: ComponentFixture<LouerStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
