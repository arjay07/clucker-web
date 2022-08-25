import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LandingFormService} from '../../services/landing-form.service';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.sass']
})
export class UsernameFormComponent implements OnInit {

  checking = false;

  constructor(public landingFormService: LandingFormService, private router: Router) { }

  ngOnInit(): void {
  }

  sendUsername() {
    this.checking = true;
    const username = this.landingFormService.landingForm.username;

    this.landingFormService.checkUsernameAvailability(username)
      .subscribe({
        next: available => {
          if (!available) {
            this.router.navigateByUrl('/login');
          } else {
            this.router.navigateByUrl('/sign-up');
          }
        },
        complete: () => {
          this.checking = false;
        }
      });

  }

}
