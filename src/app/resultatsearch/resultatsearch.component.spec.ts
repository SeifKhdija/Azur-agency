import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsearchComponent } from './resultatsearch.component';

describe('ResultatsearchComponent', () => {
  let component: ResultatsearchComponent;
  let fixture: ComponentFixture<ResultatsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
