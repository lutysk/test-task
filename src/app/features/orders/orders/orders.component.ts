import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectAllOrders } from "../orders.selectors";
import { ColDef } from "ag-grid-community";
import { DisplayOrder } from "../orders.model";
import { getAllOrders } from "../orders.actions";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  columnDefs: ColDef[] = [
    { field: 'id', headerName: 'Identification number' },
    { field: 'status', headerName: 'Status' },
    { field: 'orderName', headerName: 'Order name' },
    { field: 'creationDate', headerName: 'Creation date' },
  ];
  defaultColDef: ColDef = {
    sortable: true,
  };
  rowData$: Observable<DisplayOrder[]> = this.store.select(selectAllOrders);
  context: any;
  gridApi: any;

  constructor(private store: Store) {}

  getAllOrders(): void {
    this.store.dispatch(getAllOrders());
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }
}
