import { createReducer, on } from '@ngrx/store';
import { IProduct } from '@/shared/interfaces/product.interface';
import * as ProductActions from '@/store/product/product.action';

export interface ProuductState {
   products: IProduct[];
   error: string | null;
}

export const initalProductState: ProuductState = {
   products: [],
   error: null,
};

export const ProductReducer = createReducer(
   initalProductState,
   on(ProductActions.loadProductSuccess, (state, { products }) => ({
      ...state,
      products,
      error: null,
   })),
   on(ProductActions.loadProductFailure, (state, { errorMessage }) => ({
      ...state,
      error: errorMessage,
   }))
);
