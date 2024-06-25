import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { BlogReadModule } from './pages/blog-read/blog-read.module';
import { BlogReadComponent } from './pages/blog-read/blog-read.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: CollectionsComponent,
      },
      {
        path: 'blog-read',
        component: BlogReadComponent,
      },
      {
        path: 'product-details',
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
