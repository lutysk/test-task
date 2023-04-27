import { createFeatureSelector, createSelector } from "@ngrx/store";
import { patientsEntityAdapter, patientsFeatureKey, PatientsState } from "./patients.model";

const { selectAll, selectEntities } = patientsEntityAdapter.getSelectors();

export const selectPatientsState = createFeatureSelector<PatientsState>(patientsFeatureKey);

export const selectAllPatients = createSelector(
    selectPatientsState,
    selectAll
);

export const selectPatientsEntities = createSelector(
    selectPatientsState,
    selectEntities
);

export const selectPatientById = createSelector(
    selectPatientsEntities,
    (entities, props) => entities[props.id]
);