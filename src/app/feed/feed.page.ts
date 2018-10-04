import { Component, OnInit, ViewChild } from '@angular/core';
import { WoocommerceService } from '../service/woocommerce.service';
import { concat } from 'rxjs/index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  products: any = [];
  page: number = 1;
  maxPage: number;

  constructor(
    public woocommerceService: WoocommerceService,
    private router: Router
    ) { }

  ngOnInit() {
    this.woocommerceService.getProducts(this.page)
    .then(
      res => {
        this.products = res.body;
        this.maxPage = res.headers.get('X-WP-TotalPages');
      },
      err => {
        console.log(err)
      }
    )
  }

  loadData(event){
    if(this.page < this.maxPage){
      console.log(event)
      setTimeout(() => {
        this.woocommerceService.getProducts(this.page + 1)
        .then(
          res => {
            const newList = this.products.concat(res.body);
            this.products = newList;
            this.page ++;
            event.target.complete();
          },
          err =>{
            console.log(err);
          }
        )
      }, 500);
    }
    else{
      event.target.disabled = true;
    }
  }

  viewDetails(productId){
    this.router.navigate(['/details/' + productId]);
  }

}
