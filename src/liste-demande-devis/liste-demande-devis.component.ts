import { ListeDemandeDevisService } from './../services/liste-demande-devis.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-demande-devis',
  templateUrl: './liste-demande-devis.component.html',
  styleUrls: ['./liste-demande-devis.component.css']
})
export class ListeDemandeDevisComponent {

  ListeDemande:any=[]
  constructor(private ListeDemandeDevisService: ListeDemandeDevisService,
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
}
