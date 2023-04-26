import { createFeatureSelector, createSelector } from "@ngrx/store";
import { patientsEntityAdapter, patientsFeatureKey, PatientsState } from "./patients.model";

const { selectAll } = patientsEntityAdapter.getSelectors();

export const selectPatientsState = createFeatureSelector<PatientsState>(patientsFeatureKey);

export const selectAllPatients = createSelector(
    selectPatientsState,
    selectAll
);