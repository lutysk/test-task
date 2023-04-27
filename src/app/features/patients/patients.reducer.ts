import { Action, createReducer, on } from "@ngrx/store";
import { patientsEntityAdapter, PatientsState } from "./patients.model";
import * as patientsActions from './patients.actions';

export const initialState: PatientsState = patientsEntityAdapter.getInitialState({});

const reducer = createReducer(
    initialState,
    on(patientsActions.getAllPatientsSuccess, (state, { patients }) => patientsEntityAdapter.setAll(patients, state)),
    on(patientsActions.togglePatientIsFavorite, (state, { update }) => patientsEntityAdapter.updateOne(update, state)),
    on(patientsActions.clearAllPatients, (state) => patientsEntityAdapter.removeAll(state))
);

export function patientsReducer(state: PatientsState | undefined, action: Action) {
    return reducer(state, action);
}