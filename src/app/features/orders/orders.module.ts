import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { OrdersComponent } from "./orders/orders.component";
import { OrdersRoutingModule } from "./orders-routing.module";
import { StoreModule } from "@ngrx/store";
import { ordersFeatureKey } from "./orders.model";
import { ordersReducer } from "./orders.reducer";
import { EffectsModule } from "@ngrx/effects";
import { OrdersEffects } from "./orders.effects";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
    declarations: [OrdersComponent],
    imports: [
        CommonModule,
        SharedModule,
        OrdersRoutingModule,
        StoreModule.forFeature(ordersFeatureKey, ordersReducer),
        EffectsModule.forFeature([OrdersEffects]),
        AgGridModule
    ]
})
export class OrdersModule {
}
