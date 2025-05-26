import { Component, inject, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { setCity } from '../../store/actions/offers.actions';
import { toSignal } from '@angular/core/rxjs-interop';
import { offersFeature } from '../../store/reducers/offers.reducer';

const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

@Component({
  selector: 'app-section-locations',
  imports: [CommonModule],
  templateUrl: './section-locations.component.html',
  styleUrl: './section-locations.component.css'
})

export class SectionLocationsComponent {
  cities = cities;
  private store = inject(Store);
  selectedCity = toSignal(this.store.select(offersFeature.selectCity));

  logCity(city: string) {
    this.store.dispatch(setCity(city));
  }
}
