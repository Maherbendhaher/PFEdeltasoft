import { produit } from 'src/model/produit';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { client } from 'src/model/client';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _produit!: produit;
  private _client!: client ;
  private _demande!:any;

  constructor(private http: HttpClient, private toaster:ToastrService) {

  }

  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };
  public sendData(client:client,produit:produit) {


    const url = 'http://192.168.81.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/CONTACTDEVIS';
    const data = {

        nom:client.nom,
        prenom:client.prenom,
        email:client.email,
        numero:client.numero,
        adresse:client.adresse,
        gouvernorat:client.gouvernorat,
        Location_Code:produit.Location_Code,
        Make_Code:produit.Make_Code,
        Model_Code:produit.Model_Code,
        Serial_No:produit.Serial_No,
        VIN:produit.VIN,
        Model_Version_No:produit.Model_Code,
        Couleur:client.Couleur,
        Quantité:client.Quantité,

        Date: moment().format('YYYY-MM-DD')

    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.getAuthorizationHeader()
    });

    this.http.post(url, data, { headers }).subscribe(
      response => {
        console.log('Post success:', response);
        this.toaster.success("demande devis envoyé")

        // Handle the response here
      },
      error => {
        console.error('Post error:', error);
        this.toaster.error("demande devis non envoyé","error")

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

  get produit(): produit {
    return this._produit;
  }

  set produit(newProduit: produit) {
    this._produit = newProduit;
  }

  // Getter and Setter for 'client'
  get client(): client {
    return this._client;
  }

  set client(newClient: client) {
    this._client = newClient;
  }
  get demande(): any {
    return this._demande;
  }

  set demande(dem: client) {
    this._demande = dem;
  }




}
