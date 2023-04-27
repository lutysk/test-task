import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { DisplayPatient } from "../patients/patients.model";

export const favoritesFeatureKey = 'favorites';

export interface FavoritesState extends EntityState<DisplayPatient> {
}

export function selectFavoritesId(a: DisplayPatient): number {
    return a.id;
}

export const favoritesEntityAdapter: EntityAdapter<DisplayPatient> = createEntityAdapter<DisplayPatient>({
    selectId: selectFavoritesId,
    sortComparer: false,
});