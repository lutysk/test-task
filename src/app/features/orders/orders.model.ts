import { Order } from "../../shared/models/order.model";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface OrdersListResponse {
    count: number;
    order: Order[];
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

export const ordersFeatureKey = 'orders';

export interface OrdersState extends EntityState<Order> {
}

export function selectOrdersId(a: Order): number {
    return a.orderNum;
}

export const ordersEntityAdapter: EntityAdapter<Order> = createEntityAdapter<Order>({
    selectId: selectOrdersId,
    sortComparer: false,
});