import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccodComponent } from './accod.component';

describe('AccodComponent', () => {
  let component: AccodComponent;
  let fixture: ComponentFixture<AccodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
