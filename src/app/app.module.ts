import { ClasseBComponent } from './../classe-b/classe-b.component';
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
import { ClasseAComponent } from 'src/classe-a/classe-a.component';
import { ClasseaComponent } from 'src/classea/classea.component';
import { ClasseCLAComponent } from 'src/classe-cla/classe-cla.component';
import { ClasseEComponent } from 'src/classe-e/classe-e.component';
import { ClasseGLAComponent } from 'src/classe-gla/classe-gla.component';
import { ClasseGLBComponent } from 'src/classe-glb/classe-glb.component';
import { SignupComponent } from 'src/signup/signup.component';
import { NavbarComponent } from 'src/navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientComponent,
    SigninComponent,
    HomeComponent,
    ClasseAComponent,
    ClasseaComponent,
    ClasseBComponent,
    ClasseCLAComponent,
    ClasseEComponent,
    ClasseGLAComponent,
    ClasseGLBComponent,
    SignupComponent,
    NavbarComponent

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
