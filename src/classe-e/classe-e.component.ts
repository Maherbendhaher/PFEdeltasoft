import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { produit } from 'src/model/produit';
import { ClasseEService } from 'src/services/classe-e.service';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-classe-e',
  templateUrl: './classe-e.component.html',
  styleUrls: ['./classe-e.component.css']
})
export class ClasseEComponent {
products: any[] = [];
product:any="";

constructor(private  classeEService: ClasseEService,private clientService:ClientService,private router:Router){

}

ngOnInit() {
  this.classeEService.getProductsclassE()
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
