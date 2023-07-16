import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:7000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signIn', {
      email,
      password
    }, httpOptions);
  }

  register(nom: string, prenom: string,numero: string,email:string,adresse: string,gouvernorat:string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      nom,
      prenom,
      numero,
      email,
      adresse,
      gouvernorat,
      password
    }, httpOptions);
  }
}
