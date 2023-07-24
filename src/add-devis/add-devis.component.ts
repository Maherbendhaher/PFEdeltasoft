import { ClientService } from 'src/services/client.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css']
})
export class AddDevisComponent {
  product:any
  constructor(private ClientService:ClientService,private router: Router){
    this.product=ClientService.produit

  }
  onSubmit(form: NgForm){
    if (form.valid) {


      console.log();
      // handle form submission logic
    //  this.clientService.sendData(this.client,this.product)

    }

}

}
