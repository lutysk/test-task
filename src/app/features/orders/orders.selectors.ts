import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ordersEntityAdapter, ordersFeatureKey, OrdersState } from "./orders.model";

const { selectAll } = ordersEntityAdapter.getSelectors();

export const selectOrdersState = createFeatureSelector<OrdersState>(ordersFeatureKey);

export const selectAllOrders = createSelector(
    selectOrdersState,
    selectAll
);