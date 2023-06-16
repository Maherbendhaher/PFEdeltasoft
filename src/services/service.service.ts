import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url = 'http://192.168.124.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/vehiculeDisponible';
  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };

  private getAuthorizationHeader() {
    const auth = {
      username: this.options.username,
      password: this.options.password
    };
    return `Basic ${btoa(`${auth.username}:${auth.password}`)}`;
  }


  getProducts() {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url, { headers })
      .then(response => {
        const products = response.data.value;
        return products;
      })
      .catch(error => console.error(error));
  }


}

