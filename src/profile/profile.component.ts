import { Component } from '@angular/core';
import { User } from 'src/model/user';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private tokenStorageService: TokenStorageService){

  }

  user: any | null;


  ngOnInit(): void {
    this.user=this.tokenStorageService.getUser()
    console.log(this.user);
  }
}
