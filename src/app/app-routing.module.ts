import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseBComponent } from 'src/classe-b/classe-b.component';
import { ClasseCLAComponent } from 'src/classe-cla/classe-cla.component';
import { ClasseEComponent } from 'src/classe-e/classe-e.component';
import { ClasseGLAComponent } from 'src/classe-gla/classe-gla.component';
import { ClasseGLBComponent } from 'src/classe-glb/classe-glb.component';

import { ClientComponent } from 'src/client/client.component';
import { HomeComponent } from 'src/home/home.component';
import { ProductsComponent } from 'src/products/products.component';
import { SigninComponent } from 'src/signin/signin.component';
import { SignupComponent } from 'src/signup/signup.component';

const routes: Routes = [

  {path: 'products', component: ProductsComponent },
  {path:'client',component:ClientComponent},
  {path:'', component:HomeComponent},
  {path:'signin',component:SigninComponent},

  {path:'ClasseC',component:ClasseBComponent},
  {path:'ClasseCLA',component:ClasseCLAComponent},
  {path:'ClasseE',component:ClasseEComponent},
  {path:'ClasseGLA',component:ClasseGLAComponent},
  {path:'ClasseGLB',component:ClasseGLBComponent},
  {path:'Signup',component:SignupComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
