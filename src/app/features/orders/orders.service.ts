import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Order } from "../../shared/models/order.model";
import { OrdersListResponse } from "./orders.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<OrdersListResponse>('https://api.mocki.io/v2/79fb05cb')
        .pipe(
            map(res => res.order),
            catchError(() => of([]))
        );
  }
}
