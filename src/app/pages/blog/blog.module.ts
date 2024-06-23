import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';
import { MessageComponent } from '../home/message/message.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, FooterComponent, MessageComponent],
})
export class BlogModule {}
