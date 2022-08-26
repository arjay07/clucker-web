import { Component, OnInit } from '@angular/core';
import {LandingFormService} from '../../services/landing-form.service';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {SignUpData} from '@interfaces/sign-up-data';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.sass']
})
export class SignUpFormComponent implements OnInit {

  submitErrorMessage = '';
  signingUp = false;

  passwordRegex = "^" +
    "(?=.*[0-9])" +         // At least one digit
    "(?=.*[a-z])" +         // At least one lowercase letter
    "(?=.*)" +              // At least one capital letter
    "(?=.*[@#$%^&+=_!./?*])" +  // At least one symbol
    ".{8,}$";               // At least 8 characters in length

  signUpFormGroup = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: [ '', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordRegex)
    ]],
    confirmPassword: [ '', [
      Validators.required
    ]]
  });

  constructor(public landingFormService: LandingFormService, private fb: FormBuilder) {
    this.landingFormService.checkRoute();

    // Add confirm password validator
    const passwordControl = this.signUpFormGroup.controls.password;
    const confirmPasswordControl = this.signUpFormGroup.controls.confirmPassword;
    confirmPasswordControl.addValidators(this.valuesMatch(passwordControl))

  }

  valuesMatch(compareControl: AbstractControl<any, any>): ValidatorFn {
    return (fc) => {
      if (fc.value !== compareControl.value)
        return { doesNotMatch: true };
      return null;
    };
  }

  ngOnInit(): void {
  }

  signUp() {

    this.submitErrorMessage = '';

    this.signingUp = true;

    const formData: SignUpData = {
      username: this.landingFormService.username,
      email: this.signUpFormGroup.value.email!,
      password: this.signUpFormGroup.value.password!,
      confirmPassword: this.signUpFormGroup.value.confirmPassword!
    }

    this.landingFormService.submitForm('signup', formData)
      .subscribe({
        next: () => {
          this.landingFormService.loginAndRedirectToApp(
            this.landingFormService.username,
            this.signUpFormGroup.controls.password.value!,
            {
              successfulLogin: () => {
                this.signingUp = false;
              }
            });
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 400) {
              this.submitErrorMessage = err.error;
            }
          }
        },
        complete: () => {
          this.signingUp = false;
        }
      });
  }

}
