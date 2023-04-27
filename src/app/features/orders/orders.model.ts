import { Order } from "../../shared/models/order.model";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";

export interface OrdersListResponse {
    count: number;
    order: Order[];
    undisplayedMatches: boolean;
    moreUncountedMatches: boolean;
}

export const ordersFeatureKey = 'orders';

export interface OrdersState extends EntityState<DisplayOrder> {
}

export function selectOrdersId(a: DisplayOrder): number {
    return a.id;
}

export class DisplayOrder {
    id: number;
    status: string;
    orderName: string;
    creationDate: Date | string;

    constructor(order: Order) {
        this.id = order.orderNum;
        this.status = order.status.name;
        this.orderName = order.orderName;
        this.creationDate = new Date(order.creationDate.formattedDate).toLocaleDateString() || 'Unknown'
    }
}

export const ordersEntityAdapter: EntityAdapter<DisplayOrder> = createEntityAdapter<DisplayOrder>({
    selectId: selectOrdersId,
    sortComparer: false,
});