import { Component } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-projectPFE';



 constructor(private serviceService: ServiceService){

 }
 



}

