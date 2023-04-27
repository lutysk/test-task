import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Patient } from "../../shared/models/patient.model";

export interface PatientsListResponse {
    count: number;
    patient: Patient[];
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

export class DisplayPatient {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    isFavorite: boolean;
    sex: string;

    constructor(patient: Patient, isFavorite = false) {
        this.id = patient.code;
        this.firstName = patient.firstName;
        this.lastName = patient.lastName;
        this.isFavorite = isFavorite;
        this.age = patient.birthDate.dateTime ? this.calculateAge(patient.birthDate.formattedDate) : 0;
        this.sex = patient.sex.name || 'Unknown';
    }

    private calculateAge(date: string) {
        const dateDiff = Date.now() - new Date(date).getTime();

        return Math.abs(new Date(dateDiff).getUTCFullYear() - 1970);
    }
}

export const patientsFeatureKey = 'patients';

export interface PatientsState extends EntityState<DisplayPatient> {
}

export function selectPatientsId(a: DisplayPatient): number {
    return a.id;
}

export const patientsEntityAdapter: EntityAdapter<DisplayPatient> = createEntityAdapter<DisplayPatient>({
    selectId: selectPatientsId,
    sortComparer: false,
});