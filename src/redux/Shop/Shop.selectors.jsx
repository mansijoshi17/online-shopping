import { createSelector } from 'reselect';

const selectShop = State => State.shop;


export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)