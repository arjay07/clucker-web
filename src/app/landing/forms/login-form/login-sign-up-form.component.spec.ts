import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignUpFormComponent } from './login-sign-up-form.component';

describe('LoginFormComponent', () => {
  let component: LoginSignUpFormComponent;
  let fixture: ComponentFixture<LoginSignUpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignUpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignUpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
