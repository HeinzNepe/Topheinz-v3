import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

    public getAllProducts(): Observable<Product[]>
    {
        return this.http.get<Product[]>("https://api.shop.topheinz.com/products/all")
    }

}
