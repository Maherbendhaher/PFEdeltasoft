import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from 'src/products/products.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from 'src/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from 'src/signin/signin.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ClientComponent,
    SigninComponent

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
