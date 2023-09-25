import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
@Input()
imageBigCard:string=''
@Input()
titleBigCard:string=''
@Input()
descriptionBigCard:string=''
@Input()
Id:string='0'
  constructor(){

}
}
