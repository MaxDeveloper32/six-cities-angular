import { Component, inject, Input } from '@angular/core';
import { OffersListComponent } from '../../components/offers-list/offers-list.component';
import { PlacesSortingComponent } from '../main-components/places-sorting/places-sorting';
import { toSignal } from '@angular/core/rxjs-interop';
import { offersFeature } from '../../store/reducers/offers.reducer';
import { Store } from '@ngrx/store';
import { MainEmptyComponent } from '../main-empty/main-empty.component';
import { selectProcessedOffers } from '../../store/selectors/offers.selectors';

@Component({
  selector: 'app-section-offers',
  imports: [OffersListComponent, PlacesSortingComponent, MainEmptyComponent],
  templateUrl: './section-offers.component.html',
  styleUrl: './section-offers.component.css'
})

export class SectionOffersComponent {
  private store = inject(Store);
  selectedCity = toSignal(this.store.select(offersFeature.selectCity));
  @Input() offers = toSignal(this.store.select(selectProcessedOffers), { initialValue: [] });
}
