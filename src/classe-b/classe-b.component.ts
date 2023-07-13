import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router } from '@angular/router';
import { ClasseBService } from 'src/services/classe-b.service';

@Component({
  selector: 'app-classe-b',
  templateUrl: './classe-b.component.html',
  styleUrls: ['./classe-b.component.css']
})
export class ClasseBComponent {

products: any[] = [];
product:any="";


constructor(private  classebService: ClasseBService,private clientService:ClientService,private router:Router){

}

ngAfterViewInit(){
  this.classebService.getProductsclassB()
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

