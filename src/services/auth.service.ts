import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';


const AUTH_API = 'http://localhost:7000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: any;

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signIn', {
      email,
      password
    }, httpOptions)
  }
  getUser(): any {
    return this.user;
  }

  setUser(user: any): void {
    this.user = user;
  }

  logout(): void {
    this.user = null;
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
