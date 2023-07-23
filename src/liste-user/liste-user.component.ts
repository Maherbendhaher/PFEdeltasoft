import { Component } from '@angular/core';
import { ListeUserService } from 'src/services/liste-user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent {


  ListeUser:any=[]

  constructor(private ListeUserService: ListeUserService,
    ){}

    ngOnInit() {
      this.ListeUserService.getListeUser()
        .then(ListeUser => {
          this.ListeUser = ListeUser;

          console.log(ListeUser);
        })
        .catch(error => {
          console.error(error);
        });
    }


}
