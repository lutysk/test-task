import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ordersActions from './orders.actions';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { OrdersService } from "./orders.service";
import { DisplayOrder } from "./orders.model";

@Injectable()
export class OrdersEffects {
    getAllOrders$ = createEffect(() => this.actions$.pipe(
        ofType(ordersActions.getAllOrders),
        exhaustMap(() => this.ordersService.getAllOrders()
            .pipe(
                map((res) => ordersActions.getAllOrdersSuccess({ orders: res.map(order => new DisplayOrder(order)) })),
                catchError(() => of(ordersActions.getAllOrdersFail()))
            ))
    ))

    constructor(private actions$: Actions,
        private ordersService: OrdersService) {
    }
}