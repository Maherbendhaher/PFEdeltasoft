import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/client/client.component';
import { HomeComponent } from 'src/home/home.component';
import { ProductsComponent } from 'src/products/products.component';
import { SigninComponent } from 'src/signin/signin.component';

const routes: Routes = [

  {path:'products',component:ProductsComponent},
  {path:'client',component:ClientComponent},
  {path:'', component:HomeComponent},
  {path:'signin',component:SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
