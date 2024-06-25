import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';
import { BottomBarComponent } from 'src/app/_components/bottom-bar/bottom-bar.component';
import { ProductDetailsComponentComponent } from 'src/app/_components/product-details-component/product-details-component.component';
import { OtherProductsComponent } from 'src/app/_components/other-products/other-products.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    FooterComponent,
    BottomBarComponent,
    ProductDetailsComponentComponent,
    OtherProductsComponent,
  ],
})
export class ProductDetailsModule {}
