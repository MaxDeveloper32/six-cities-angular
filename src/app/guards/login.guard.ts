import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { offersFeature } from '../store/reducers/offers.reducer';

export const loginGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(offersFeature.selectIsLoggedIn).pipe(
    map((isLoggedIn) => isLoggedIn ? router.createUrlTree(['/']) : true)
  );
};

export const authGuard: CanActivateFn = () => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(offersFeature.selectIsLoggedIn).pipe(
    map((isLoggedIn) => isLoggedIn ? true : router.createUrlTree(['/login']))
  );
};
