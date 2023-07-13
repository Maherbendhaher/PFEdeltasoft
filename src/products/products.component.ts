import { ServiceService } from 'src/services/service.service';
import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [];
  product:any="";



 constructor(private serviceService: ServiceService,private clientService:ClientService,private router:Router,private activatedRoute: ActivatedRoute){

 }

 // ngOnInit() {
    //this.serviceService.getProducts()
     // .then(products => {
      //  this.products = products;

    //  })
     /// .catch(error => {
       // console.error(error);
      //});

  //}
  //ngOnInit() {
    //this.activatedRoute.queryParams.subscribe(params => {
      //const filter = params['filter'];

      //if (filter === 'ClasseA') {
        //this.loadProducts2();
      //} else {
        //this.serviceService.getProducts()
          //.then(products => {
            //this.products = products;
          //})
          //.catch(error => {
            //console.error(error);
          //});
     // }
    //});
  //}

  loadProducts2() {
    this.serviceService.getProducts2()
      .then(products => {
        this.products = products;
      })
      .catch(error => {
        console.error(error);
      });
      this.activatedRoute.queryParams.subscribe(params => {
        const filter = params['filter'];

        if (filter === 'ClasseA') {
          // Effectuez le filtrage pour la Classe A ici
        } else {
          // Chargez tous les produits par défaut
        }
      });
  }


  demandeDevis(product:produit){
    console.log(product)
    this.clientService.p=product
    this.router.navigate(['/client']);


  }
}
