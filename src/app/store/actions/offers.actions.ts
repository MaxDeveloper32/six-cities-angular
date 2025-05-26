import { createAction } from '@ngrx/store';

export const setCity = createAction('[Offers] Set City', (city: string) => ({ city }));
export const setSortType = createAction('[Offers] SortType',  (sortType: string) => ({ sortType }))
