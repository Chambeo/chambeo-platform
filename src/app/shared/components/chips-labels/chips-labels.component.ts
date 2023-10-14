import { Component } from '@angular/core';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-chips-labels',
  templateUrl: './chips-labels.component.html',
  styleUrls: ['./chips-labels.component.scss']
})
export class ChipsLabelsComponent {

  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];
}
