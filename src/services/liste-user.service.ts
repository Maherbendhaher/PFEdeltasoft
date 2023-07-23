import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListeUserService {

  private url = 'http://192.168.81.39:8048/Mobile/ODataV4/Company(\'LE%20MOTEUR%20SA\')/CreationContact';
  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };
  ListeUser={
  nom:"",
  prenom:"",
  numero:"",
  email:"",
  adresse:"",
  gouvernorat:""
  }
  constructor() { }
  private getAuthorizationHeader() {
    const auth = {
      username: this.options.username,
      password: this.options.password
    };
    return `Basic ${btoa(`${auth.username}:${auth.password}`)}`;
  }

  getListeUser() {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url, { headers })
      .then(response => {
        const ListeUser = response.data.value;
        return ListeUser;
      })
      .catch(error => console.error(error));
  }

}
