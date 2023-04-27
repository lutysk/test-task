import { createFeatureSelector, createSelector } from "@ngrx/store";
import { favoritesEntityAdapter, favoritesFeatureKey, FavoritesState } from "./favorites.model";

const { selectAll, selectEntities } = favoritesEntityAdapter.getSelectors();

export const selectFavoritesState = createFeatureSelector<FavoritesState>(favoritesFeatureKey);

export const selectAllFavorites = createSelector(
    selectFavoritesState,
    selectAll
);

export const selectAllEntities = createSelector(
    selectFavoritesState,
    selectEntities
)

