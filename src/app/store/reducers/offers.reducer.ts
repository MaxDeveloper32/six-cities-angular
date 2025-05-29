import { createReducer, on, createFeature } from '@ngrx/store';
import { setCity, setSortType } from '../actions/offers.actions';
import { TypePlace } from '../../types/offers';
import { mockOffers } from '../../mock-offers';

const CURRENT_CITY = 'Amsterdam';
const SORT_TYPE = 'Popular';

export interface OffersState {
  city: string;
  sortType: string;
  offers: TypePlace[];
}

const initialState: OffersState = {
  city: CURRENT_CITY,
  sortType: SORT_TYPE,
  offers: mockOffers,
};

export const offersFeature = createFeature({
  name: 'offers',
  reducer: createReducer(
    initialState,
    on(setCity, (state, { city }) => ({ ...state, city })),
    on(setSortType, (state, { sortType }) => ({ ...state, sortType }))
  ),
});
