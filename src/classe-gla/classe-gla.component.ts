import { ClasseGLAService } from './../services/classe-gla.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';
@Component({
  selector: 'app-classe-gla',
  templateUrl: './classe-gla.component.html',
  styleUrls: ['./classe-gla.component.css']
})
export class ClasseGLAComponent {
   products: any[] = [];
   product:any="";

constructor(private  ClasseGLAService: ClasseGLAService,private clientService:ClientService,private router:Router){

}

ngOnInit() {
  this.ClasseGLAService.getProductsclassGLA()
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
