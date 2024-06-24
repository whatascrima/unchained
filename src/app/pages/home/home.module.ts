import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideBarComponent } from 'src/app/_components/side-bar/side-bar.component';
import { BottomBarComponent } from 'src/app/_components/bottom-bar/bottom-bar.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarComponent,
    BottomBarComponent,
  ],
})
export class HomeModule {}
