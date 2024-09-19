import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseProducts } from '../models/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponseProducts[]>{
    return this.http.get<ResponseProducts[]>('https://fakestoreapi.com/products');
  }
}
