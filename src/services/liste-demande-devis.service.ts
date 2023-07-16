import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ListeDemandeDevisService {
  private url = 'http://192.168.122.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/CONTACTDEVIS';
  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };
  ListeDemande={
    Email:"",
    Nom:"",
    Prenom:"",
    NumeroTEL:"",
    Ville:"",
    Location_Code:"",
    Make_Code:"",
    Model_Code:"",
    Serial_No:"",
    VIN:"",
    Model_Version_No:"",
    Confirmation:""
  }
  constructor() { }
  private getAuthorizationHeader() {
    const auth = {
      username: this.options.username,
      password: this.options.password
    };
    return `Basic ${btoa(`${auth.username}:${auth.password}`)}`;
  }

  getListeDemande() {
    const headers = {
      Authorization: this.getAuthorizationHeader()
    };

    return axios.get(this.url, { headers })
      .then(response => {
        const ListeDemande = response.data.value;
        return ListeDemande;
      })
      .catch(error => console.error(error));
  }


}
