import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from 'src/app/shared/star.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [ProductListComponent,ProductDetailComponent,ConvertToSpacesPipe,StarComponent],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild([
      {path:'products/:id',
      canActivate:[ProductDetailGuard],
    component:ProductDetailComponent},
    {path:'products',component:ProductListComponent}
    ])
  ]
})


export class ProductModule { }
