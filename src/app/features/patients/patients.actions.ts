import { createAction, props } from "@ngrx/store";
import { DisplayPatient } from "./patients.model";
import { Update } from "@ngrx/entity";

export const getAllPatients = createAction('[Patients page]: Get all patients');
export const getAllPatientsSuccess = createAction('[Patients page]: Get all patients success', props<{
    patients: DisplayPatient[]
}>());
export const getAllPatientsFail = createAction('[Patients page]: Get all patients fail');

export const togglePatientIsFavorite = createAction('[Patients page]: Toggle patient favorite state', props<{
    update: Update<DisplayPatient>
}>());
export const removePatientIsFavorite = createAction('[Patients page]: Remove patient favorite state', props<{
    update: Update<DisplayPatient>
}>());