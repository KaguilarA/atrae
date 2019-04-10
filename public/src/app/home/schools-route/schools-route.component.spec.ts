import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsRouteComponent } from './schools-route.component';

describe('SchoolsRouteComponent', () => {
  let component: SchoolsRouteComponent;
  let fixture: ComponentFixture<SchoolsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
