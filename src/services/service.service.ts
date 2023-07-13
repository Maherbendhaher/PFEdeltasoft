import { Injectable } from '@angular/core';
import axios from 'axios';
import { produit } from 'src/model/produit';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:any="";
 // private url1 = 'http://192.168.122.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/vehiculeDisponible'
  private url1 = 'http://192.168.122.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/vehiculeDisponible?$filter=Make_Code%20eq%20%27MERCEDES%27';
  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };


  produit={
    Location_Code:"",
    Make_Code:"",
    Model_Code:"",
    Serial_No:"",
    VIN:"",
    Model_Version_No:""

  }
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

    return axios.get(this.url1+this.data, { headers })
      .then(response => {
        const products = response.data.value;
        return products;
      })
      .catch(error => console.error(error));
  }

  getProducts2() {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url1, { headers })
      .then(response => {
        const products = response.data.value;
        const filteredProducts = products.filter((product: any) => product.Model_Code === 'CLASSE A');
        return filteredProducts;
      })
      .catch(error => console.error(error));
  }

 getProducts3() {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url1, { headers })
      .then(response => {
        const products = response.data.value;
        const filteredProducts = products.filter((product: any) => product.Model_Code === 'CLASSE C');
        return filteredProducts;
      })
      .catch(error => console.error(error));
  }


  findByModelCode(prod: produit,modelCode: string): void {
    // Perform logic based on the model code received
    console.log('Model Code:', modelCode);
    // Perform specific actions or logic based on the model code
    // ...
  }


}

