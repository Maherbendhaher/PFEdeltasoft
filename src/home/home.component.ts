import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from 'src/model/produit';
import { ClientService } from 'src/services/client.service';
import { ServiceService } from 'src/services/service.service';
import { SharedService } from 'src/services/shared-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent {
  title = 'angular-projectPFE';
  Queryparam:String=""
  products: any[] = [];
  isLoggedIn= false;

  constructor(private serviceService: ServiceService, private router: Router,private sharedService: SharedService) {

  }

  loadProductsByModelCode(modelCode: string) {
    this.serviceService.findByModelCode(modelCode)
      .then(products => {
        this.products = products;

        this.Queryparam=products[0].Model_Code
        console.log()
        this.router.navigate(['/products'],{ queryParams: { filter: this.Queryparam } })



      })
      .catch(error => {
        console.error(error);
      });
  }
  login() {
    // Ici, vous devrez vérifier les identifiants de l'utilisateur
    // et définir la variable isLoggedIn en fonction du résultat.
    // Pour cet exemple, nous allons simplement supposer que l'utilisateur est connecté avec succès.

    // Simulation de la connexion réussie en définissant isLoggedIn sur true.
    this.isLoggedIn = true;

    // Après le succès de la connexion, redirigez l'utilisateur vers la page "CLASSE A"
    this.router.navigate(['/CLASSE A']);
  }
  redirectToSignIn() {
    if (!this.isLoggedIn) {
      this.router.navigate(['signin']);
      this.isLoggedIn = true;
    }
}



}




