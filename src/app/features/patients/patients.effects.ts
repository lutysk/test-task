import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PatientsService } from "./patients.service";
import * as patientsActions from './patients.actions';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class PatientsEffects {
    getAllPatients$ = createEffect(() => this.actions$.pipe(
        ofType(patientsActions.getAllPatients),
        exhaustMap(() => this.patientsService.getAllPatients()
            .pipe(
                map((patients) => patientsActions.getAllPatientsSuccess({ patients })),
                catchError(err => of(patientsActions.getAllPatientsFail()))
            ))
    ))

    constructor(private actions$: Actions,
        private patientsService: PatientsService) {
    }
}