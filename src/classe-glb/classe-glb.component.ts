import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/model/produit';
import { ClasseGLBService } from 'src/services/classe-glb.service';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-classe-glb',
  templateUrl: './classe-glb.component.html',
  styleUrls: ['./classe-glb.component.css']
})
export class ClasseGLBComponent {
  products: any[] = [];
   product:any="";

constructor(private  classeGLBService: ClasseGLBService,private clientService:ClientService,private router:Router){

}

ngOnInit() {
  this.classeGLBService.getProductsclassGLB()
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
