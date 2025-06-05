import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { offersFeature } from '../../../store/reducers/offers.reducer';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-info',
  imports: [RouterLink],
  templateUrl: './user-info.component.html',
})
export class UserInfoComponent {
  private store = inject(Store);
  isLoggedIn = toSignal(this.store.select(offersFeature.selectIsLoggedIn));
}
