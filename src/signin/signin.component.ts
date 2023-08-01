import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor( private authService: AuthService ,private tokenStorage: TokenStorageService,private toastr: ToastrService,
    private router: Router){


  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log('');

    this.authService.login(email, password).subscribe(
      data => {
        console.log("**************************")
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(['home']);
        this.toastr.success("login succesful")
        this.authService.setUser(data)


      },
      err => {
        this.toastr.error("login failed")
        this.errorMessage = err.error.message;
        console.log(this.errorMessage)
        this.isLoginFailed = true;


      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }



}
