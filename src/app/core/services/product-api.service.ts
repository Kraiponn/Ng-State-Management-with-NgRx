import { IProduct } from '@/shared/interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ProductApiService {
   private http = inject(HttpClient);

   constructor() {}

   getProducts() {
      return this.http
         .get<IProduct[]>('https://fakestoreapi.com/products')
         .pipe(
            map((products) => {
               return products.map((product) => {
                  return { ...product, quantity: 1 };
               });
            })
         );
   }
}
