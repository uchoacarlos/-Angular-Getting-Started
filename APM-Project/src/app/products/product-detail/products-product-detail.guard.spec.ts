import { TestBed } from '@angular/core/testing';

import { ProductsProductDetailGuard } from './products-product-detail.guard';

describe('ProductProductDetailGuard', () => {
  let guard: ProductsProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductsProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
