import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { PatientsService } from "./patients.service";
import * as patientsActions from './patients.actions';
import { catchError, exhaustMap, map, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { addToFavorite, removeFromFavorite } from "../favorites/favorites.actions";
import { selectPatientById } from "./patients.selectors";
import { Store } from "@ngrx/store";
import { selectAllEntities } from "../favorites/favorites.selectors";
import { DisplayPatient } from "./patients.model";
import { getAllPatientsFail } from "./patients.actions";

@Injectable()
export class PatientsEffects {
    getAllPatients$ = createEffect(() => this.actions$.pipe(
        ofType(patientsActions.getAllPatients),
        withLatestFrom(this.store.select(selectAllEntities)),
        exhaustMap(([action, favorites]) => this.patientsService.getAllPatients()
            .pipe(
                map((res) => {
                    return patientsActions.getAllPatientsSuccess(
                        { patients: res.map(patient => new DisplayPatient(patient, !!favorites[patient.code])) }
                    )
                }),
                catchError(() => of(getAllPatientsFail())))
            ))
    );

    togglePatientIsFavorite$ = createEffect(() => this.actions$.pipe(
        ofType(patientsActions.togglePatientIsFavorite),
        concatLatestFrom(action => this.store.select(selectPatientById, { id: action.update.id })),
        exhaustMap(([action, displayItem]) => {
            if (action.update.changes.isFavorite) {
                return of(addToFavorite({ item: displayItem }));
            }
            return of(removeFromFavorite({ id: +action.update.id }));
        }))
    );

    constructor(
        private actions$: Actions,
        private patientsService: PatientsService,
        private store: Store) {
    }
}