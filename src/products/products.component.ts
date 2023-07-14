import { ServiceService } from 'src/services/service.service';
import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';
import { produit } from 'src/model/produit';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/services/shared-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any = [];

  constructor(private serviceService: ServiceService, private clientService: ClientService,
    private router: Router, private activatedRoute: ActivatedRoute,private sharedService: SharedService) {
      this.activatedRoute.queryParams.subscribe(params => {
        switch (params['filter']) {
          case 'CLASSE A':
            this.products=this.loadProductsByModelCode("CLASSE A");

            break;

          case 'CLA':
            this.products=this.loadProductsByModelCode("CLA");
            break;

          case 'CLASSE C':
            this.products=this.loadProductsByModelCode("CLASSE C");
            break;
            case 'CLASSE E':
              this.products=this.loadProductsByModelCode("CLASSE E");
              break;
              case 'GLB':
                this.products=this.loadProductsByModelCode("GLB");
                break;
                case 'GLA':
                this.products=this.loadProductsByModelCode("GLA");
                break;
          default:
            this.products=this.loadAllProducts();
                  }

      });


    }

  ngOnInit() {

  }

  loadProductsByModelCode(Model_Code: string) {
    this.serviceService.findByModelCode(Model_Code)
      .then(products => {
        this.products = products;
      })
      .catch(error => {
        console.error(error);
      });
  }

  loadAllProducts() {
    this.serviceService.getProducts()
      .then(products => {
        this.products = products;
      })
      .catch(error => {
        console.error(error);
      });
  }

  demandeDevis(product: produit) {
    console.log(product);
    this.clientService.p = product;
    this.router.navigate(['/client']);
  }
}
