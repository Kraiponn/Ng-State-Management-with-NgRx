import { CounterState } from '@/store/counter/counter.reducer';
import { ProuductState } from '@/store/product/product.reducer';

export interface AppState {
   counter: CounterState;
   product: ProuductState;
}
