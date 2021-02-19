import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  questionIndexes: Array<number> = [];

  constructor() {
		this.questionIndexes = new Array(38);
  }

}
