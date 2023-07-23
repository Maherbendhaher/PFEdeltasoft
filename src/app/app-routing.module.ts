import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDevisComponent } from 'src/add-devis/add-devis.component';

import { ClientComponent } from 'src/client/client.component';
import { HomeComponent } from 'src/home/home.component';
import { ListeDemandeDevisComponent } from 'src/liste-demande-devis/liste-demande-devis.component';
import { ListeUserComponent } from 'src/liste-user/liste-user.component';
import { ProductsComponent } from 'src/products/products.component';
import { ProfileComponent } from 'src/profile/profile.component';
import { SigninComponent } from 'src/signin/signin.component';
import { SignupComponent } from 'src/signup/signup.component';

const routes: Routes = [

  {path: 'products', component: ProductsComponent },
  {path:'client',component:ClientComponent},
  {path:'home', component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'Signup',component:SignupComponent},
  {path:'ListeDEmandeDevis',component:ListeDemandeDevisComponent},
  {path:'ListeUsers',component:ListeUserComponent},
  {path:'addDevis',component:AddDevisComponent},
  {path:'Profile', component:ProfileComponent},
  { path: '', redirectTo: 'signin', pathMatch: 'full' }, // Redirige par défaut vers la page "login"


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
