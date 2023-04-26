import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Patient } from "../../shared/models/patient.model";

export interface PatientListResponse {
    count: number;
    patient: Patient[];
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

export const patientsFeatureKey = 'patients';

export interface PatientsState extends EntityState<Patient> {
}

export function selectPatientsId(a: Patient): number {
    return a.code;
}

export const patientsEntityAdapter: EntityAdapter<Patient> = createEntityAdapter<Patient>({
    selectId: selectPatientsId,
    sortComparer: false,
});