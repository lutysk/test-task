import { Action, createReducer, on } from "@ngrx/store";
import * as favoritesActions from './favorites.actions';
import { favoritesEntityAdapter, FavoritesState } from "./favorites.model";

export const initialState: FavoritesState = favoritesEntityAdapter.getInitialState({});

const reducer = createReducer(
    initialState,
    on(favoritesActions.addToFavorite, (state, { item }) => favoritesEntityAdapter.addOne(item, state)),
    on(favoritesActions.removeFromFavorite, (state, { id }) => favoritesEntityAdapter.removeOne(id, state))
);

export function favoritesReducer(state: FavoritesState | undefined, action: Action) {
    return reducer(state, action);
}