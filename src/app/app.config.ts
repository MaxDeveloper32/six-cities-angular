import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ActionReducerMap } from '@ngrx/store';
import { offersFeature, } from './store/reducers/offers.reducer';

export interface AppState {
   [offersFeature.name]: ReturnType<typeof offersFeature.reducer>;
}

export const rootReducer: ActionReducerMap<AppState> = {
  [offersFeature.name]: offersFeature.reducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(rootReducer),
    provideStoreDevtools(),
  ]
};

