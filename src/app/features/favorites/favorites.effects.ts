import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, tap, withLatestFrom } from "rxjs/operators";
import { addToFavorite, removeFromFavorite } from "./favorites.actions";
import { select, Store } from "@ngrx/store";
import { LocalStorageService } from "../../core/local-storage/local-storage.service";
import { selectFavoritesState } from "./favorites.selectors";
import { removePatientIsFavorite } from "../patients/patients.actions";
import { of } from "rxjs";

export const FAVORITES_KEY = "FAVORITES";

@Injectable()
export class FavoritesEffects {
    updateFavoritesInStorage$ = createEffect(() => this.actions$.pipe(
        ofType(
            addToFavorite,
            removeFromFavorite
        ),
        withLatestFrom(this.store.pipe(select(selectFavoritesState))),
        tap(([action, favorites]) => this.localStorageService.setItem(FAVORITES_KEY, favorites))
    ), { dispatch: false });

    removeFromFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(removeFromFavorite),
        exhaustMap((action) => {
            const update = { id: action.id, changes: { isFavorite: false } }
            return of(removePatientIsFavorite({ update }));
        }))
    )


    constructor(
        private actions$: Actions,
        private localStorageService: LocalStorageService,
        private store: Store) {
    }
}