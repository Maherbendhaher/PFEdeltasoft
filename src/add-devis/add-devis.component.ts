import { client } from 'src/model/client';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddDevisService } from 'src/services/add-devis.service';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent implements OnInit {
  quantities: string[] = ['1','2'];
  product:any;
  selectedQuantity!: string;
  demande!:any;



  client:client ={
    nom: '',
    prenom: '',
    numero: '',
    email: '',
    adresse: '',
    gouvernorat: '',
    Quantité: '',
    Couleur: ''
  }
  constructor(private ClientService:ClientService,private router: Router,
    private addDevisService:AddDevisService){
    this.product=ClientService.produit

    this.demande=ClientService.demande
   //this.product=addDevisService.produit


  }
  ngOnInit() {
    // If you want to pre-select some default values, you can set them here
    this.selectedQuantity = '';
    console.log(this.ClientService.demande)// For example, '1' is the default quantity
  }
  onSubmit(form: NgForm){
    console.log("*********=====***********")
    console.log(form.value)
    console.log("********************")

    if (form.valid) {
      this.client.nom=form.value['nom']
      console.log("************************")

      console.log("--------------------------")


      console.log("--------------------------")
      console.log("************************")

      this.client.prenom=form.value['prenom']
      this.client.numero=form.value['numero']
      this.client.email=form.value['email']
      this.client.adresse=form.value['adresse']
      this.client.gouvernorat=form.value['gouvernorat']
      this.client.Couleur=form.value['Couleur']
      this.client.Quantité=form.value['Quantité']




      // handle form submission logic
    this.addDevisService.sendData(this.client,this.demande)

    }

}

}
