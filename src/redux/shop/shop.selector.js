import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jactets: 3,
  womens: 4,
  mens: 5,
};

export const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (selectShop) => selectShop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollection], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
