import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from 'src/products/products.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from 'src/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from 'src/signin/signin.component';
import { HomeComponent } from 'src/home/home.component';

import { SignupComponent } from 'src/signup/signup.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { ListeDemandeDevisComponent } from 'src/liste-demande-devis/liste-demande-devis.component';
import { ListeUserComponent } from 'src/liste-user/liste-user.component';
import { ProfileComponent } from 'src/profile/profile.component';
import { NavbarComponentsComponent } from 'src/navbar-components/navbar-components.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponentsComponent,

    ClientComponent,
    SigninComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    ListeDemandeDevisComponent,
    ListeUserComponent,
    ProfileComponent

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
