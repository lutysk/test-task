import { createAction, props } from "@ngrx/store";
import { Patient } from "../../shared/models/patient.model";

export const getAllPatients = createAction('[Patients page]: Get all patients');
export const getAllPatientsSuccess = createAction('[Patients page]: Get all patients success', props<{
    patients: Patient[]
}>());
export const getAllPatientsFail = createAction('[Patients page]: Get all patients fail');