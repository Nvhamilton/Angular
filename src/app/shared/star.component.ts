import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from "@angular/core";

@Component({
selector:'pm-star',
templateUrl:'./star.component.html',
styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{

@Input() rating:number = 0;


@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();/*output eventemitter in order to call the method within its
                                                                             parent component */


cropWidth =7.5;

ngOnChanges(): void {
this.cropWidth =this.rating * (75/5)
}


OnClick():void{
this.ratingClicked.emit(`the rating for: ${this.rating} was clicked`)
}

}