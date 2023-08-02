import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardService, UserAuthGuard } from 'src/AuthGuard/admin-auth-guard.service';
import { CombinedAuthGuardService } from 'src/AuthGuard/combined-auth-guard.service';
import { AddDevisComponent } from 'src/add-devis/add-devis.component';

import { ClientComponent } from 'src/client/client.component';
import { DetailsComponent } from 'src/details/details.component';
import { HomeComponent } from 'src/home/home.component';
import { ListeDemandeDevisComponent } from 'src/liste-demande-devis/liste-demande-devis.component';
import { ListeUserComponent } from 'src/liste-user/liste-user.component';
import { ProductsComponent } from 'src/products/products.component';
import { ProfileComponent } from 'src/profile/profile.component';
import { SigninComponent } from 'src/signin/signin.component';
import { SignupComponent } from 'src/signup/signup.component';
import { StockVinComponent } from 'src/stock-vin/stock-vin.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent },
  {path:'client',component:ClientComponent},
  {path:'home', component:HomeComponent},
  {path:'signin',component:SigninComponent},
  {path:'Signup',component:SignupComponent},
  {path:'ListeDEmandeDevis',canActivate: [AdminAuthGuardService],component:ListeDemandeDevisComponent},
  {path:'ListeUsers',canActivate: [AdminAuthGuardService],component:ListeUserComponent},
  {path:'addDevis',canActivate: [AdminAuthGuardService], component:AddDevisComponent},
  {path:'Profile', component:ProfileComponent},
  {path:'StockVIN',canActivate: [AdminAuthGuardService], component:StockVinComponent},
  {path:'details',component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
