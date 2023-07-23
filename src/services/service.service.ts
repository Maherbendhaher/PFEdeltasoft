import { Injectable } from '@angular/core';
import axios from 'axios';
import { produit } from 'src/model/produit';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  data:any="";
 // private url1 = 'http://192.168.122.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/vehiculeDisponible'
  private url1 = 'http://192.168.81.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/vehiculeDisponible?$filter=Make_Code%20eq%20%27MERCEDES%27';
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
  constructor() {}

  private getAuthorizationHeader() {
    const auth = {
      username: this.options.username,
      password: this.options.password
    };
    return `Basic ${btoa(`${auth.username}:${auth.password}`)}`;
  }




  getProducts(): Promise<any[]> {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url1, { headers })
      .then(response => response.data.value)
      .catch(error => {
        console.error(error);
        return []; // Return an empty array as a fallback value
      });
  }

  findByModelCode(modelCode: string): Promise<any[]> {
    return this.getProducts()
      .then(products => products.filter(product => product.Model_Code === modelCode))
      .catch(error => {
        console.error(error);
        return []; // Return an empty array as a fallback value
      });
  }
}
