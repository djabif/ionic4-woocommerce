// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
// import { WoocommerceService } from '../service/woocommerce.service';
//
// @Injectable()
// export class FeedResolver implements Resolve<any> {
//
//   constructor(
//     public woocommerceService: WoocommerceService
//   ) { }
//
//   resolve(route: ActivatedRouteSnapshot) {
//
//     let items = [];
//
//     return new Promise((resolve, reject) => {
//       this.woocommerceService.getProducts(1)
//       .then( res => {
//         for(let item of  <Array<any>> res.body){
//           item.excerpt.rendered = item.excerpt.rendered.split('<a')[0] + "</p>";
//           items.push(item);
//         }
//         let postInfo = {
//           posts: items,
//           pages: res.headers.get('X-WP-TotalPages'),
//           totalPosts: res.headers.get('X-WP-Total')
//         }
//         return resolve(postInfo)
//       }, err => {
//         return reject(err);
//       })
//     })
//   }
// }
