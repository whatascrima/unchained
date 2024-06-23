import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CollectionsModule } from './pages/collections/collections.module';
import { PreloaderComponent } from './_components/preloader/preloader.component';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [AppComponent, PreloaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CollectionsModule,
    LoginModule,
    RegisterModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
