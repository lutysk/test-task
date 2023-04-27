import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { DisplayPatient } from "../patients/patients.model";
import { Order } from "../../shared/models/order.model";

export const favoritesFeatureKey = 'favorites';

export interface FavoritesState extends EntityState<DisplayPatient> {
}

// TODO add Order to a type
export function selectFavoritesId(a: DisplayPatient): number {
    return a.id;
}

export const favoritesEntityAdapter: EntityAdapter<DisplayPatient> = createEntityAdapter<DisplayPatient>({
    selectId: selectFavoritesId,
    sortComparer: false,
});