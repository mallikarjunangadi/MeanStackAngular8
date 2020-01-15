import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  uri = "http://localhost:4000/products"

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };

    this.http.post(`${this.uri}/add`, obj).subscribe(res => console.log('Done'));
  }

  getProductsList() {
    return this.http.get(`${this.uri}`);
  }

  getProductById(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const updateData = {
      ProductName, ProductDescription, ProductPrice
    }

    return this.http.put(`${this.uri}/update/${id}`, updateData) //.subscribe(res => console.log("Updated Successfully"));
  }

  deleteProduct(id) {
    return this.http.delete(`${this.uri}/delete/${id}`);
  }
}
