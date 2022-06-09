import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from "./datasource/models/product.model"
import { ProductService } from "./services/product.services";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    public pageTitle: string = 'Product List';
    public imageWidth = 20;
    public buttomWidth = 150;
    public imageMarginLeft: number = 50;
    public paddingHeight: number = 10;
    public showImage: boolean = true;
    public errorMessage = '';
    public sub!: Subscription;

    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('Insetter:', value);
        this.filteredProducts = this.performFilter(value);

    }


    filteredProducts: IProduct[] = [];
    public products: IProduct[] = [];

    constructor(private productService: ProductService) {}

    // Filter and List //
    public performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    // Expand Image //
     public toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}
