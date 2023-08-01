import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { client } from 'src/model/client';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  user: any = {};
  product:any
  client: client={
    nom: '',
    prenom: '',
    email: '',
    numero: '',
    adresse: '',
    gouvernorat:'',
    Couleur:'',
    Quantité:''
  };
  constructor(private clientService:ClientService,private router: Router,
    private tokenStorageService: TokenStorageService,){
    this.product=clientService.produit

  }
  ngOnInit(): void {
    this.user=this.tokenStorageService.getUser()
    console.log(this.user);
  }
  onSubmit(form: NgForm){
    if (form.valid) {

      this.client.nom=form.value["nom"]
      this.client.prenom=form.value["prenom"]
      this.client.numero=form.value["numero"]
      this.client.email=form.value["email"]
     this.client.adresse=form.value["adresse"]
     this.client.gouvernorat=form.value["gouvernorat"]
      this.client.Couleur=form.value["Couleur"]
      this.client.Quantité=form.value["Quantité"]

      console.log(this.client);
      // handle form submission logic
      this.clientService.sendData(this.client,this.product)
    }

  }



}
