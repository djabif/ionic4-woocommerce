import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { WoocommerceService } from '../service/woocommerce.service';

@Injectable()
export class DetailsResolver implements Resolve<any> {

  constructor(
    public woocommerceService: WoocommerceService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ) {

    return new Promise((resolve, reject) => {
      let productId = route.paramMap.get("id");
      this.woocommerceService.getProduct(productId)
      .then(
        res => {
          resolve(res)
      }, err => reject(err))
    })
  }


}
