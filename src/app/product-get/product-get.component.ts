import { Component, OnInit } from '@angular/core';
import Product from "../product";
import { ProductsService } from "./../products.service";
import { Navigation, Router } from "@angular/router";

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  products: Product[];

  constructor(private ps: ProductsService, private router: Router) { }

  ngOnInit() {
    this.ps.getProductsList().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  deleteProduct(id) {
    this.ps.deleteProduct(id).subscribe(res => {
      //this.products.splice(id, 1);
      //this.router.navigate(["products"]);
      this.ngOnInit()
    })
  }
}
