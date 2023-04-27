import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../../core/animations/route.animations";
import { ColDef } from "ag-grid-community";
import {
  TableFavoriteColumnComponent
} from "../../../../shared/components/table-favorite-column/table-favorite-column.component";
import { Observable } from "rxjs";
import { DisplayPatient } from "../../../patients/patients.model";
import { Store } from "@ngrx/store";
import { selectAllFavorites } from "../../favorites.selectors";
import { removeFromFavorite } from "../../favorites.actions";

@Component({
  selector: 'st-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoritesComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'First name', filter: true, floatingFilter: true },
    { field: 'lastName', headerName: 'Last name' },
    { field: 'age', headerName: 'Age' },
    { field: 'sex', headerName: 'Sex' },
    {
      headerName: 'Favorite', cellRenderer: TableFavoriteColumnComponent
    },
  ];
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  rowData$: Observable<DisplayPatient[]> = this.store.select(selectAllFavorites);
  context: any;
  gridApi: any;

  constructor(private store: Store) {
    this.context = { componentParent: this };
  }

  toggleFavorite(id: number, isFavorite: boolean): void {
    this.store.dispatch(removeFromFavorite({id}));
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
}
