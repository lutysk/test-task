import { createAction, props } from "@ngrx/store";
import { Order } from "../../shared/models/order.model";

export const getAllOrders = createAction('[Orders page]: Get all orders');
export const getAllOrdersSuccess = createAction('[Orders page]: Get all orders success', props<{
    orders: Order[]
}>());
export const getAllOrdersFail = createAction('[Orders page]: Get all orders fail');