import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ordersActions from './orders.actions';
import { catchError, exhaustMap, map } from "rxjs/operators";
import { of } from "rxjs";
import { OrdersService } from "./orders.service";

@Injectable()
export class OrdersEffects {
    getAllOrders$ = createEffect(() => this.actions$.pipe(
        ofType(ordersActions.getAllOrders),
        exhaustMap(() => this.ordersService.getAllOrders()
            .pipe(
                map((orders) => ordersActions.getAllOrdersSuccess({ orders })),
                catchError(err => of(ordersActions.getAllOrdersFail()))
                // TODO: check error handling
            ))
    ))

    constructor(private actions$: Actions,
        private ordersService: OrdersService) {
    }
}