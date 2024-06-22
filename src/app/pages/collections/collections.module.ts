import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { SideBarComponent } from 'src/app/_components/side-bar/side-bar.component';
import { BannerComponent } from '../home/banner/banner.component';
import { ContentComponent } from '../home/content/content.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';
import { MessageComponent } from '../home/message/message.component';

@NgModule({
  declarations: [CollectionsComponent],

  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SideBarComponent,
    BannerComponent,
    ContentComponent,
    MessageComponent,
    FooterComponent,
  ],
})
export class CollectionsModule {}
