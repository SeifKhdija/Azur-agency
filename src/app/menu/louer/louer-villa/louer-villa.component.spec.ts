import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LouerVillaComponent } from './louer-villa.component';

describe('LouerVillaComponent', () => {
  let component: LouerVillaComponent;
  let fixture: ComponentFixture<LouerVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LouerVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LouerVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
