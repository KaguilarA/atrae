import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContractComponent } from './register-contract.component';

describe('RegisterContractComponent', () => {
  let component: RegisterContractComponent;
  let fixture: ComponentFixture<RegisterContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
