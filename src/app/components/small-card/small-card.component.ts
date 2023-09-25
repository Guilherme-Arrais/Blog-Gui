import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
@Input()
imageSmallCard:string=''
@Input()
titleSmallCard:string=''
@Input()
descriptionSmallCard:string=''
@Input()
Id:string='0'
constructor(){

}
}
