import { ServiceService } from 'src/services/service.service';
import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [];
  product:any="";


 constructor(private serviceService: ServiceService,private clientService:ClientService,private router:Router){

 }

  ngOnInit() {
    this.serviceService.getProducts()
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
