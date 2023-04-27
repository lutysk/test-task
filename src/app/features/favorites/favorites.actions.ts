import { createAction, props } from "@ngrx/store";
import { DisplayPatient } from "../patients/patients.model";

export const addToFavorite = createAction('[Favorites page]: Add to favorite', props<{ item: DisplayPatient }>());
export const removeFromFavorite = createAction('[Favorites page]: Remove from favorite', props<{
    id: number
}>());