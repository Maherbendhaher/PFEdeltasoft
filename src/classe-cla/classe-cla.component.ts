import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router } from '@angular/router';
import { ClasseCLAService } from 'src/services/classe-cla.service';

@Component({
  selector: 'app-classe-cla',
  templateUrl: './classe-cla.component.html',
  styleUrls: ['./classe-cla.component.css']
})
export class ClasseCLAComponent {
products: any[] = [];
product:any="";

constructor(private  classeCLAService: ClasseCLAService,private clientService:ClientService,private router:Router){

}

ngOnInit() {
  this.classeCLAService.getProductsclassCLA()
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
