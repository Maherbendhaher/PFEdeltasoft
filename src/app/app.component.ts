import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from 'src/footer/footer.component';
import { ServiceService } from 'src/services/service.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'angular-projectPFE';
  showProfileMenu: boolean = false;
  isLoggedIn: boolean = false;// Variable pour contrôler l'affichage de l'élément "Login"


  

 constructor(private serviceService: ServiceService,
  private tokenStorageService: TokenStorageService,
  private router: Router){
  this.isLoggedIn = !!this.tokenStorageService.getToken();

 }

 toggleProfileMenu() {
  this.showProfileMenu = !this.showProfileMenu;
  this.showProfileMenu =true;

}
logout(): void {
  this.tokenStorageService.signOut();
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



