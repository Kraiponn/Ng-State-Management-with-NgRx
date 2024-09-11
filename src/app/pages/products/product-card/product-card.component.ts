import { IProduct } from '@/shared/interfaces/product.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
   selector: 'app-product-card',
   standalone: true,
   imports: [],
   templateUrl: './product-card.component.html',
   styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
   @Input({ required: true }) product?: IProduct;
   @Output() handleAdd = new EventEmitter();

   constructor() {
      // console.log('On Product Card ', this.product)
   }

   addToCart(productId: number) {
      this.handleAdd.emit(productId);
   }
}
