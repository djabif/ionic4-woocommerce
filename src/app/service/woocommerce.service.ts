import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {

  url: string = "https://wordpress.startapplabs.com/woocommerce/";
  key: string = "ck_cd8a844d9d9183032001740575a3baf436b5d4e9";
  secret_key: string = "cs_c713b81ec7ef33b8faf775bb91f75e5f79bdd6c1";

  constructor(
    private http: HttpClient
  ) { }

  getProducts(page: number){
    const params = new HttpParams().set('consumer_key', this.key)
                                   .set('consumer_secret', this.secret_key)
                                   .set('per_page', '6')
                                   .set('page', page.toString())
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products',{params, observe: 'response' }).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }

  getProduct(id){
    const params = new HttpParams().set('consumer_key', this.key)
                                   .set('consumer_secret', this.secret_key)
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'wp-json/wc/v2/products/' + id, {params}).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }

}
