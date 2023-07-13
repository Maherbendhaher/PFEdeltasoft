import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/services/service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})

export class HomeComponent {
  title = 'angular-projectPFE';
  products: any[] = [];
  product:any="";
  data:any="";
  @ViewChild('imageContainer')
  imageContainer!: ElementRef;

  constructor(private serviceService: ServiceService, private Router:Router){


  }

  loadProducts2() {
    this.serviceService.getProducts2()
      .then(products => {
        this.products = products;
        this.Router.navigate(['/ClasseA']);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
