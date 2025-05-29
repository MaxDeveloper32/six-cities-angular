import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { offersFeature } from '../../../store/reducers/offers.reducer';
import { setSortType } from '../../../store/actions/offers.actions';

const options = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

@Component({
  selector: 'app-places-sorting',
  imports: [CommonModule],
  templateUrl: './places-sorting.html',
})
export class PlacesSortingComponent {
  options = options;
  private store = inject(Store);
  selectedSortType = toSignal(this.store.select(offersFeature.selectSortType));
  isOpen = false;

  selectOption(option: string) {
    this.store.dispatch(setSortType(option));
    this.isOpen = false;
  }
}
