import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Order } from "../../../shared/models/order.model";
import { selectAllOrders } from "../orders.selectors";
import { getAllOrders } from "../orders.actions";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  ordersList$: Observable<Order[]> = this.store.select(selectAllOrders);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getAllOrders())
  }
}
