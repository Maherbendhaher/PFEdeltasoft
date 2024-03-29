import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { produit } from './../model/produit';
import { ListeUser } from 'src/model/listeUser';
import { client } from 'src/model/client';
import { Toast, ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AddDevisService {
  produit={
    Location_Code:"",
    Make_Code:"",
    Model_Code:"",
    Serial_No:"",
    VIN:"",
    Model_Version_No:""

  }

  constructor(private http: HttpClient,private toaster:ToastrService) {

  }

  private options = {
    username: 'Maher',
    password: 'Maher@25'
  };

  public sendData(client:client,produit:produit) {

    const url = 'http://192.168.81.39:8048/MOBILE/ODataV4/Company(\'LE%20MOTEUR%20SA\')/DevisVIN';
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


};

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  Authorization: this.getAuthorizationHeader()
});

this.http.post(url, data, { headers }).subscribe(
  response => {
    console.log('Post success:', response);
    this.toaster.success("devis envoyé")


    // Handle the response here
  },
  error => {
    console.error('Post error:', error);
    this.toaster.error("devis non envoyé","error")
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

sendEmailWithPDF(pdfData: Blob, email: string, subject: string, message: string) {
  const formData = new FormData();
  formData.append('to', email);
  formData.append('subject', subject);
  formData.append('message', message);
  formData.append('pdf', pdfData, 'form_data.pdf');

  return this.http.post('http://localhost:7000/send-email', formData);
}


}

