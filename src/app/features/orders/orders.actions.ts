import { createAction, props } from "@ngrx/store";
import { DisplayOrder } from "./orders.model";

export const getAllOrders = createAction('[Orders page]: Get all orders');
export const getAllOrdersSuccess = createAction('[Orders page]: Get all orders success', props<{
    orders: DisplayOrder[]
}>());
export const getAllOrdersFail = createAction('[Orders page]: Get all orders fail');