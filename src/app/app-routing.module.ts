import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/client/client.component';
import { ProductsComponent } from 'src/products/products.component';

const routes: Routes = [

  {path:'products',component:ProductsComponent},
  {path:'client',component:ClientComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
