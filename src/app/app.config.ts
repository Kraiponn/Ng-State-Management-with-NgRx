import {
   ApplicationConfig,
   provideZoneChangeDetection,
   isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { counterReducer } from '@/store/counter/counter.reducer';
import { ProductReducer } from '@/store/product/product.reducer';
import { ProductEffect } from '@/store/product/product.effect';

export const appConfig: ApplicationConfig = {
   providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(withFetch()),
      provideAnimationsAsync(),
      provideStore(),
      provideState({ name: 'counter', reducer: counterReducer }),
      provideState({ name: 'product', reducer: ProductReducer }),
      provideStoreDevtools({
         maxAge: 25,
         logOnly: !isDevMode(),
         autoPause: true, // Pauses recording actions and state changes when the extension window is not open
         trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
         traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
         connectInZone: true, // If set to true, the connection is established within the Angular zone
      }),
      provideEffects(ProductEffect),
   ],
};

// 7:27
