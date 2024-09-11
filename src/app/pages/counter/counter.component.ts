import { AppState } from '@/store/app.state';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount } from '@/store/counter/counter.selector';
import { decrement, increment, reset } from '@/store/counter/counter.action';

@Component({
   selector: 'app-counter',
   standalone: true,
   imports: [AsyncPipe],
   templateUrl: './counter.component.html',
   styleUrl: './counter.component.scss',
})
export class CounterComponent {
   count$: Observable<number>;

   constructor(private store: Store<AppState>) {
      this.count$ = store.select(selectCount);
   }

   increment() {
      this.store.dispatch(increment());
   }

   decrement() {
      this.store.dispatch(decrement());
   }

   reset() {
      this.store.dispatch(reset());
   }
}
