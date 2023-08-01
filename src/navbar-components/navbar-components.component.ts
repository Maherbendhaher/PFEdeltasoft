import { User } from 'src/model/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/services/service.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-navbar-components',
  templateUrl: './navbar-components.component.html',
  styleUrls: ['./navbar-components.component.css']
})
export class NavbarComponentsComponent  implements OnInit{
  showProfileMenu: boolean = false;
  isLoggedIn: boolean = false;
  user: any | null;


  ngOnInit(): void {
    this.user=this.tokenStorageService.getUser()
    console.log(this.user);
  }

 constructor(private serviceService: ServiceService,
  private authService:AuthService
  ,
  private tokenStorageService: TokenStorageService,
  private router: Router){
  this.isLoggedIn = !!this.tokenStorageService.getToken();

 }

 name = this.tokenStorageService.saveUser


 toggleProfileMenu() {
  this.showProfileMenu = !this.showProfileMenu;
  this.showProfileMenu =true;
  console.log(this.showProfileMenu);

}
logout(): void {
  this.tokenStorageService.signOut();
  this.authService.logout()

  this.isLoggedIn = false;
  window.location.reload();

}
redirectToSignIn() {
  if (!this.isLoggedIn) {
    this.router.navigate(['signin']);
    this.isLoggedIn = true;
  }
}

}
