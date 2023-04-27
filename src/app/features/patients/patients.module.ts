import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients/patients.component";
import { StoreModule } from "@ngrx/store";
import { patientsFeatureKey } from "./patients.model";
import { patientsReducer } from "./patients.reducer";
import { EffectsModule } from "@ngrx/effects";
import { PatientsEffects } from "./patients.effects";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
    declarations: [PatientsComponent],
    imports: [
        CommonModule,
        SharedModule,
        PatientsRoutingModule,
        AgGridModule,
        StoreModule.forFeature(patientsFeatureKey, patientsReducer),
        EffectsModule.forFeature([PatientsEffects])
    ],
    providers: []
})
export class PatientsModule {
}
