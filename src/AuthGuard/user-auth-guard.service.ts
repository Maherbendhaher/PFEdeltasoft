import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (user && user.roles.includes('ROLE_USER')) {
      return true;
    }

    // If user is not a regular user, navigate to the login page or any other unauthorized page.
    this.router.navigate(['/home']);
    return false;
  }
}
