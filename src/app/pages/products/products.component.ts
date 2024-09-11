import { ProductApiService } from '@/services/product-api.service';
import { IProduct } from '@/shared/interfaces/product.interface';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as ProductActions from '@/store/product/product.action';
import * as ProductSelectors from '@/store/product/product.selector';
import { ProductCardComponent } from '@/pages/products/product-card/product-card.component';

@Component({
   selector: 'app-products',
   standalone: true,
   imports: [AsyncPipe, JsonPipe, NgFor, NgIf, ProductCardComponent],
   templateUrl: './products.component.html',
   styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
   http = inject(HttpClient);
   productApi = inject(ProductApiService);
   products$!: Observable<IProduct[]>;
   error$!: Observable<string | null>;

   constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
      this.store.dispatch(ProductActions.loadProduct());
      this.products$ = this.store.select(ProductSelectors.selectAllProducts);
      this.error$ = this.store.select(ProductSelectors.selectProductError)
   }

   ngOnInit(): void {}

   ngOnDestroy(): void {}

   addItemToCart(event: any) {
      //
   }
}
