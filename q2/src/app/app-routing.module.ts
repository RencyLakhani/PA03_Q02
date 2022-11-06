import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatAddComponent } from './cat-add/cat-add.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'Product-add',component:ProductAddComponent},
  {path:'Product-list',component:ProductListComponent},
  {path:'Product-edit/:id',component:ProductEditComponent},
  {path:'Add-Category',component:CatAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
