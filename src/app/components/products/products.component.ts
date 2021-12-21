import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListApiService } from 'src/app/services/product-list-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList: any;

  constructor(private productService: ProductListApiService, private route: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.productsList = res;
    })
  }

  getProductDetail(id: any) {
    this.route.navigateByUrl(`products/${id}`);
  }

}
