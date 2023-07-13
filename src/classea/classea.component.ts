import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router } from '@angular/router';
import { ClasseaService } from 'src/services/classea.service';

@Component({
  selector: 'app-classea',
  templateUrl: './classea.component.html',
  styleUrls: ['./classea.component.css']
})
export class ClasseaComponent {

  products: any[] = [];
  product:any="";


 constructor(private  classeaService: ClasseaService,private clientService:ClientService,private router:Router){

 }

  ngOnInit() {
    this.classeaService.getProductsclassA()
      .then(products => {
        this.products = products;

        console.log(products);
      })
      .catch(error => {
        console.error(error);
      });
  }
  demandeDevis(product:produit){
    console.log(product)
    this.clientService.p=product
    this.router.navigate(['/client']);


  }
}
