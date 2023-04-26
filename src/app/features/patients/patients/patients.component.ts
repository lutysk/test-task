import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Store } from "@ngrx/store";
import * as patientsActions from "./../patients.actions";
import { selectAllPatients } from "../patients.selectors";
import { Observable } from "rxjs";
import { Patient } from "../../../shared/models/patient.model";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  // patientsList$: Observable<Patient[]> = this.store.select(selectAllPatients);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(patientsActions.getAllPatients());
  }
}
