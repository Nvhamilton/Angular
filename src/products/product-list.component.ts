import { Component,OnDestroy,OnInit } from "@angular/core";
import { Observable, range, Subscription } from "rxjs";
import {IProduct} from './IProduct'
import { ProductService } from "./product.service";
import{map,filter} from 'rxjs/operators'

@Component({
    selector:'pm-products',//use selector to insert object into our application 
    templateUrl:'./product-list.component.html'//we can call external templates by using the URL call
    //Since this component exists within the same file as the class, we can interpolate class object properties into the template or 
    //URL like we have done here

    ,styleUrls:[]
})
export class ProductListComponent implements OnInit{
//this is our class object which we call inside the module
constructor(private _productService:ProductService){}

filteredProducts:IProduct[]=[];
products :IProduct[] = [];
errorMessage:string=''
sub!: Subscription;
private _listFilter:string=''
pageTitle ="Product List";
imageWidth =50;
imageMargin =2;
showImage:boolean=false;//showimage member of type boolean = false;

get listfilter():string{
  return this._listFilter;
}

set listFilter(value:string){
    this._listFilter = value;
    console.log('in setter: ' , value)
    this.filteredProducts =  this.performFilter(value);
}

performFilter(value:string):IProduct[]{
  //change every value to lowercase for comparison
value = value.toLocaleLowerCase();

//returns this current product array but is filtered by the arrow function. true if product.productname includes whatever value we pass it
  return this.products.filter((product:IProduct )=> 
  product.productName.toLowerCase().includes(value))
}
        toggleImage():void{
          this.showImage=!this.showImage;//sets showImage to it's opposite value
        }

        ngOnInit(): void {/* async function. Runs getproducts method on our productservice class
                             .subscribe is our get method. Next,error,complete pattern
                              products get arrowed into whatever we get back from our emitter
                              Since our site only displays filtered products, we must set that equal as well.*/
            this._productService.getProducts().subscribe({
              next: products => {
                this.products= products;
                this.filteredProducts=this.products;
              },
              error: error=> this.errorMessage=error,

            });
          }





        onRatingClicked(event:string):void{
            this.pageTitle =  event
        }
}

