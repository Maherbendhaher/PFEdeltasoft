import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormsModule } from '@angular/forms';



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
    mail: null,
    adresse:null,
    gouvernorat:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {nom, prenom, numero, mail, adresse, gouvernorat, password } = this.form;

    this.authService.register(nom, prenom, numero, mail, adresse, gouvernorat, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}


