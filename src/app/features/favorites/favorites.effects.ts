import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap, withLatestFrom } from "rxjs/operators";
import { addToFavorite, removeFromFavorite } from "./favorites.actions";
import { select, Store } from "@ngrx/store";
import { LocalStorageService } from "../../core/local-storage/local-storage.service";
import { selectFavoritesState } from "./favorites.selectors";

export const FAVORITES_KEY = "FAVORITES";

@Injectable()
export class FavoritesEffects {
    getAllPatients$ = createEffect(() => this.actions$.pipe(
        ofType(
            addToFavorite,
            removeFromFavorite
        ),
        withLatestFrom(this.store.pipe(select(selectFavoritesState))),
        tap(([action, favorites]) => this.localStorageService.setItem(FAVORITES_KEY, favorites))
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private localStorageService: LocalStorageService,
        private store: Store) {
    }
}