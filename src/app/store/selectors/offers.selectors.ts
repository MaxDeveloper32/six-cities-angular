import { createSelector } from '@ngrx/store';
import { offersFeature } from '../reducers/offers.reducer';
import { filtersOffers, sortingOffers } from '../../utils/filter-sort-offers';

export const selectProcessedOffers = createSelector(
  offersFeature.selectOffers,
  offersFeature.selectCity,
  offersFeature.selectSortType,
  (offers, city, sort) => {
    console.log(11111);

    const filteredOffers = filtersOffers(offers, city);
    return sortingOffers(filteredOffers, sort);
  }
);
