import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService  implements CanActivate{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (user && user.roles.includes('ROLE_ADMIN')) {
      return true;
    }

    // If user is not an admin, navigate to the login page or any other unauthorized page.
    this.router.navigate(['/signin']);
    return false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();
    if (user && user.roles.includes('ROLE_ADMIN')) {
      return true;
    }

    // If user is not a regular user, navigate to the login page or any other unauthorized page.
    this.router.navigate(['/login']);
    return false;
  }
}

