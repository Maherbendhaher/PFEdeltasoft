import { client } from 'src/model/client';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddDevisService } from 'src/services/add-devis.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr';

//import { jsPDF } from "jspdf";
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
  constructor(private ClientService:ClientService,private router: Router,private toaster:ToastrService,
    private addDevisService:AddDevisService){
    this.product=ClientService.produit;

    this.demande=ClientService.demande;
   //this.product=addDevisService.produit;




  }
  ngOnInit() {
    // If you want to pre-select some default values, you can set them here
    this.selectedQuantity = '';
    console.log(this.ClientService.demande)// For example, '1' is the default quantity

  }
  onSubmit(form: NgForm){

    console.log(form.value)


    if (form.valid) {
      this.client.nom=form.value['nom']
      this.client.prenom=form.value['prenom']
      this.client.numero=form.value['numero']
      this.client.email=form.value['email']
      this.client.adresse=form.value['adresse']
      this.client.gouvernorat=form.value['gouvernorat']
      this.client.Couleur=form.value['Couleur']
      this.client.Quantité=form.value['Quantité']





      // handle form submission logic
    this.addDevisService.sendData(this.client,this.demande)
    const pdf = new jsPDF();
    pdf.text('To: ' + this.client.nom, 10, 10);
    pdf.text('Subject: ' + "subjec", 10, 20);
    pdf.text('Message: ' +"body", 10, 30);

    // Add other form fields to the PDF
    // For example, add the 'name', 'age', and 'gender' fields
    pdf.text('Name: ' + this.client.adresse, 10, 40);



    // Save the PDF as a Blob
    const pdfBlob = pdf.output('blob');
    this.addDevisService.sendEmailWithPDF(pdfBlob,this.client.email,"sub","Devis vin").subscribe(
      (response) => {
        console.log('Email sent successfully!', response);
        this.toaster.success("email envoyé")
        // Handle the success response, e.g., display a success message to the user
      },
      (error) => {
        this.toaster.error("email n'est pas envoyé")
        console.error('Error sending email:', error);
        // Handle the error, e.g., display an error message to the user
      }
    );





    }


}


}
