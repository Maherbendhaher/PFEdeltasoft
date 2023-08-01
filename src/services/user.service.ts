import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

const API_URL = 'http://localhost:7000/api/test/';
const baseUrl = 'http://localhost:7000/api/findAll';
@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  suprimerUser=(id : Number)=>{
           return this.http.delete(API_URL+`user+/${id}`)
  }



 
}
