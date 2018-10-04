import { TestBed, inject } from '@angular/core/testing';

import { WoocommerceService } from './woocommerce.service';

describe('WoocommerceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WoocommerceService]
    });
  });

  it('should be created', inject([WoocommerceService], (service: WoocommerceService) => {
    expect(service).toBeTruthy();
  }));
});
