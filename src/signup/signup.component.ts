import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {
    nom: null,
    prenom:null,
    numero:null,
    email: null,
    adresse:null,
    gouvernorat:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
    private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {nom, prenom, numero, email, adresse, gouvernorat, password } = this.form;

    this.authService.register(nom, prenom, numero, email, adresse, gouvernorat, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['signin']);
        this.toastr.success("signup succesful")


      },
      err => {
        this.toastr.error("signup failed")

        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;

      }
    );
  }
}


