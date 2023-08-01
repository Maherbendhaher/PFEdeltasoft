import { Router } from '@angular/router';
import { ListeDemandeDevisService } from './../services/liste-demande-devis.service';
import { Component } from '@angular/core';
import { ClientService } from 'src/services/client.service';

@Component({
  selector: 'app-liste-demande-devis',
  templateUrl: './liste-demande-devis.component.html',
  styleUrls: ['./liste-demande-devis.component.css']
})
export class ListeDemandeDevisComponent {

  ListeDemande:any=[]
  constructor(private ListeDemandeDevisService: ListeDemandeDevisService,
    private router : Router, private clientService: ClientService
    ){}
    ngOnInit() {
      this.ListeDemandeDevisService.getListeDemande()
        .then(ListeDemande => {
          this.ListeDemande = ListeDemande;

          console.log(ListeDemande);
        })
        .catch(error => {
          console.error(error);
        });
    }

    validation(ListeDemande:any){
      console.log("ùùùùùùùùùù")
      console.log(ListeDemande);
      console.log("ùùùùùùùùùù")
    this.clientService.demande = ListeDemande;

    this.router.navigate(['/addDevis']);

    }
}
