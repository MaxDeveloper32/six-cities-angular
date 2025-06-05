import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ActionReducerMap } from '@ngrx/store';
import { offersFeature, } from './store/reducers/offers.reducer';
import { userFeature } from './store/reducers/user.reducer';

export interface AppState {
   [offersFeature.name]: ReturnType<typeof offersFeature.reducer>;
   [userFeature.name]: ReturnType<typeof userFeature.reducer>;
}

export const rootReducer: ActionReducerMap<AppState> = {
  [offersFeature.name]: offersFeature.reducer,
  [userFeature.name]: userFeature.reducer,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(rootReducer),
    /* provideStoreDevtools({
      logOnly: true
    }), */
  ]
};

