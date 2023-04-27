import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Patient } from "../../shared/models/patient.model";
import { catchError, map } from "rxjs/operators";
import { PatientsListResponse } from "./patients.model";

@Injectable({
    providedIn: "root"
})
export class PatientsService {
    constructor(private http: HttpClient) {
    }

    getAllPatients(): Observable<Patient[]> {
        return this.http.get<PatientsListResponse>('https://api.mocki.io/v2/51597ef3')
            .pipe(
                map(res => res.patient),
                catchError(() => of([]))
            );
    }
}
