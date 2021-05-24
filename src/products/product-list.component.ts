import { variable } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import {IProduct} from './IProduct'


@Component({
    selector:'pm-products',//use selector to insert object into our application 
    templateUrl:'./product-list.component.html'//we can call external templates by using the URL call
    //Since this component exists within the same file as the class, we can interpolate class object properties into the template or 
    //URL like we have done here

    ,styleUrls:[]
})


export class ProductListComponent{//this is our class object which we call inside the module
listFilter:string='cart'

  pageTitle ="Product List";

  imageWidth =50;
  imageMargin =2;
  showImage:boolean=false;//showimage member of type boolean = false;


    products :IProduct[] = [ {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price":   8.90,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      },
      {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2021",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "assets/images/saw.png"
      },
      {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "assets/images/xbox-controller.png"
        }
    ];




        toggleImage():void{
            this.showImage=!this.showImage;
        }
    
}