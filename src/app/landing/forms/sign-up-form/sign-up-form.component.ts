import { Component, OnInit } from '@angular/core';
import {LandingFormService} from '../../services/landing-form.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.sass']
})
export class SignUpFormComponent implements OnInit {

  passwordRegex = "^" +
    "(?=.*[0-9])" +         // At least one digit
    "(?=.*[a-z])" +         // At least one lowercase letter
    "(?=.*)" +              // At least one capital letter
    "(?=.*[@#$%^&+=_!])" +  // At least one symbol
    ".{8,}$";               // At least 8 characters in length

  signUpFormGroup = this.fb.group({
    email: ['', Validators.required, Validators.email ],
    password: [ '', Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)],
    confirmPassword: [ '', Validators.required ]
  });

  constructor(public landingFormService: LandingFormService, private fb: FormBuilder) {
    this.landingFormService.checkRoute();

    // Add confirm password validator
    const passwordControl = this.signUpFormGroup.get('password')!;
    const confirmPasswordControl = this.signUpFormGroup.get('confirmPassword')!;
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

  }

}
