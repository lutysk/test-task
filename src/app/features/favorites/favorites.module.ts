import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { favoritesFeatureKey } from "./favorites.model";
import { favoritesReducer } from "./favorites.reducer";
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { FavoritesRoutingModule } from "./favorites-routing.module";
import { AgGridModule } from "ag-grid-angular";
import { EffectsModule } from "@ngrx/effects";
import { FavoritesEffects } from "./favorites.effects";



@NgModule({
  declarations: [FavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule,
    EffectsModule.forFeature([FavoritesEffects]),
    AgGridModule,
  ]
})
export class FavoritesModule { }
