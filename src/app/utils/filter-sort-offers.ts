import { TypePlace } from "../types/offers";

const filtersOffers = (offers: TypePlace[], cityName: string) => offers.filter((offer) => offer.city.name === cityName);

type SortFunction = (offers: TypePlace[]) => TypePlace[];

enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

const sortOffers: Record<SortType, SortFunction> = {
  [SortType.Popular]: (offers) => [...offers],
  [SortType.PriceLowToHigh] : (offers) => [...offers].sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price),
  [SortType.PriceHighToLow] : (offers) => [...offers].sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price),
  [SortType.TopRatedFirst] : (offers) => [...offers].sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating),
};

const sortingOffers = (offers: TypePlace[], key: string) => {
  const sortType = key as SortType;
  return sortOffers[sortType](offers);
};

export {filtersOffers, sortingOffers};
