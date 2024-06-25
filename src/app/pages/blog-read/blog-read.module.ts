import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogReadRoutingModule } from './blog-read-routing.module';
import { BlogReadComponent } from './blog-read.component';
import { BottomBarComponent } from 'src/app/_components/bottom-bar/bottom-bar.component';
import { FooterComponent } from 'src/app/_components/footer/footer.component';
import { BlogContentComponent } from 'src/app/_components/blog-content/blog-content.component';
import { RecentBlogComponent } from 'src/app/_components/recent-blog/recent-blog.component';

@NgModule({
  declarations: [BlogReadComponent],
  imports: [
    CommonModule,
    BlogReadRoutingModule,
    BottomBarComponent,
    FooterComponent,
    BlogContentComponent,
    RecentBlogComponent,
  ],
})
export class BlogReadModule {}
