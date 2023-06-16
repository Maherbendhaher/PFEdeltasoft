import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/model/client';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  product:any
  client: client={
    Nom: '',
    Prenom: '',
    Email: '',
    NumeroTEL: '',
    Ville: ""
  };

  constructor(private clientService:ClientService,private router: Router){
    this.product=clientService.produit



  }

  onSubmit(form: NgForm){
    if (form.valid) {
      this.client.Email=form.value['Email']
      this.client.Nom=form.value["Nom"]

      this.client.Prenom=form.value["Prenom"]
      this.client.NumeroTEL=form.value["NumeroTEL"]
      this.client.Ville=form.value["Ville"]
      console.log(this.client);
      // handle form submission logic
      this.clientService.sendData(this.client,this.product)
    }

  }



}
