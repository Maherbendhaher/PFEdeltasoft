import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],

})
export class SigninComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

  }

  constructor( private authService: AuthService ,private tokenStorage: TokenStorageService,
    private router: Router){


  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log('');

    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['home']);


      },
      err => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
        this.isLoginFailed = true;
        alert('Échec de la connexion. Veuillez vérifier vos informations d\'identification.');

      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }



}
