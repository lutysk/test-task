import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Store } from "@ngrx/store";
import { selectAllPatients } from "../patients.selectors";
import { Observable } from "rxjs";
import { togglePatientIsFavorite, getAllPatients, clearAllPatients } from "../patients.actions";
import { ColDef } from "ag-grid-community";
import { DisplayPatient } from "../patients.model";
import {
    TableFavoriteColumnComponent
} from "../../../shared/components/table-favorite-column/table-favorite-column.component";

@Component({
    selector: "st-patients",
    templateUrl: "./patients.component.html",
    styleUrls: ["./patients.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnDestroy {
    routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
    columnDefs: ColDef[] = [
        { field: 'firstName', headerName: 'First name', filter: true },
        { field: 'lastName', headerName: 'Last name' },
        { field: 'age', headerName: 'Age' },
        { field: 'sex', headerName: 'Sex' },
        {
            headerName: 'Favorite', cellRenderer: TableFavoriteColumnComponent
        },
    ];
    defaultColDef: ColDef = {
        sortable: true,
    };
    rowData$: Observable<DisplayPatient[]> = this.store.select(selectAllPatients);
    context: any;

    constructor(private store: Store) {
        this.context = { componentParent: this };
    }

    getPatientsList(): void {
        this.store.dispatch(getAllPatients());
    }

    toggleFavorite(id: number, isFavorite: boolean): void {
        const update = { id: id, changes: { isFavorite } }
        this.store.dispatch(togglePatientIsFavorite({ update }));
    }

    ngOnDestroy(): void {
        this.store.dispatch(clearAllPatients());
    }
}
