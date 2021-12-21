import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductListApiService } from 'src/app/services/product-list-api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private id: any;
  productDetails: any;
  constructor(private route: ActivatedRoute, private apiService: ProductListApiService) { 
    this.id = this.route.snapshot.params['id'];

    this.apiService.getProductById(this.id).subscribe(res => {
      this.productDetails = res;
      console.log(this.productDetails);
    })
  }
 
  ngOnInit(): void {
    
  }

}
