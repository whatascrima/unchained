import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { MarketplaceComponent } from './marketplace.component';
import { ProductComponent } from 'src/app/_components/product/product.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';
import { BottomBarComponent } from 'src/app/_components/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [MarketplaceComponent],
  imports: [
    CommonModule,
    ProductComponent,
    MarketplaceRoutingModule,
    FooterComponent,
    BottomBarComponent,
  ],
})
export class MarketplaceModule {}
