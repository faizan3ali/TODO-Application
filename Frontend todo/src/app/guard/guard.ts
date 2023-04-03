import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { TosterService } from '../services/toster.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService,
    private TosterService: TosterService,) {}

  canActivate():any {
    const token = localStorage.getItem('Authorization');

    if (!token ) {
   this.authService.logout();
   this.TosterService.showError(
    'Please login to continue'
  );
    } else {

      return true;
    }
  }
}
