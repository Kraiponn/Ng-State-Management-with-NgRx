import { Routes } from '@angular/router';

export const routes: Routes = [
   {
      path: '',
      loadComponent: () =>
         import('@/pages/home/home.component').then((a) => a.HomeComponent),
   },
   // {
   //    path: '',
   //    redirectTo: 'products',
   //    pathMatch: 'full',
   // },
   {
      path: 'counter',
      loadComponent: () =>
         import('@/pages/counter/counter.component').then(
            (a) => a.CounterComponent
         ),
   },
   {
      path: 'products',
      loadComponent: () =>
         import('@/pages/products/products.component').then(
            (a) => a.ProductsComponent
         ),
   },
   {
      path: 'cart',
      loadComponent: () =>
         import('@/pages/cart/cart.component').then((a) => a.CartComponent),
   },
   {
      path: '**',
      loadComponent: () =>
         import('@/pages/not-found/not-found.component').then(
            (a) => a.NotFoundComponent
         ),
   },
];
