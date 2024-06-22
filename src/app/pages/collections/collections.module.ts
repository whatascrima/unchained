import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { SideBarComponent } from 'src/app/_components/side-bar/side-bar.component';
import { BannerComponent } from '../home/banner/banner.component';
import { ContentComponent } from '../home/content/content.component';

@NgModule({
  declarations: [CollectionsComponent],

  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SideBarComponent,
    BannerComponent,
    ContentComponent,
  ],
})
export class CollectionsModule {}
