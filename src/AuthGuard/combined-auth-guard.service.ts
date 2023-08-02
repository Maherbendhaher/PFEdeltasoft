import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CombinedAuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.getUser();

    // Check if either AdminAuthGuard or UserAuthGuard condition is met
    if (user && (user.roles.includes('ROLE_ADMIN') || user.roles.includes('ROLE_USER'))) {
      return true;
    }

    // If neither condition is met, navigate to the login page or any other unauthorized page.
    this.router.navigate(['/home']);
    return false;
  }
}
