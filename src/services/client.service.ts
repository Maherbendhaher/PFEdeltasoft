import { produit } from './../model/produit';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { client } from 'src/model/client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
  produit={
    Location_Code:"",
    Make_Code:"",
    Model_Code:"",
    Serial_No:"",
    VIN:"",
    Model_Version_No:""

  }

  constructor(private http: HttpClient) {

  }

  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };
  public sendData(client:client,produit:produit) {
    const url = 'http://192.168.124.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/CONTACTDEVIS';
    const data = {

        Nom:client.Nom,
        Prenom:client.Prenom,
        Email:client.Email,
        NumeroTEL:client.NumeroTEL,
        Ville:client.Ville,
        Location_Code:produit.Location_Code,
        Make_Code:produit.Make_Code,
        Model_Code:produit.Model_Code,
        Serial_No:produit.Serial_No,
        VIN:produit.VIN,
        Model_Version_No:produit.Model_Code

    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthorizationHeader()
    });

    this.http.post(url, data, { headers }).subscribe(
      response => {
        console.log('Post success:', response);
        // Handle the response here
      },
      error => {
        console.error('Post error:', error);
        // Handle errors here
      }
    );
  }

  private getAuthorizationHeader() {
    const auth = {
      username: this.options.username,
      password: this.options.password
    };
    return `Basic ${btoa(`${auth.username}:${auth.password}`)}`;
  }






  get p() {
    return this.produit;
  }

  set p(prod:produit) {
    this.produit = prod;
  }


}
