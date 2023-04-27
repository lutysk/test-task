import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: 'st-table-favorite-column',
  templateUrl: './table-favorite-column.component.html',
  styleUrls: ['./table-favorite-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableFavoriteColumnComponent implements ICellRendererAngularComp {
  isFavorite = false;
  params;

  agInit(params: ICellRendererParams) {
    this.params = params;
    this.isFavorite = this.params.data.isFavorite;
  }

  refresh(params: ICellRendererParams): boolean {
    return false
  }

  toggle() {
    this.params.context.componentParent.toggleFavorite(this.params.data.id, !this.params.data.isFavorite);
  }
}
