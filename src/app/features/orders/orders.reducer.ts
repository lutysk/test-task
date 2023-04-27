import { Action, createReducer, on } from "@ngrx/store";
import { ordersEntityAdapter, OrdersState } from "./orders.model";
import * as ordersActions from './orders.actions';

export const initialState: OrdersState = ordersEntityAdapter.getInitialState({});

const reducer = createReducer(
    initialState,
    on(ordersActions.getAllOrdersSuccess, (state,
        { orders }) => {
        return ordersEntityAdapter.setAll(orders, state);
    }),
    on(ordersActions.clearAllOrders, (state) => ordersEntityAdapter.removeAll(state)),
);

export function ordersReducer(state: OrdersState | undefined, action: Action) {
    return reducer(state, action);
}