import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;

  constructor() {}
  
  updateName() {
    this.name.setValue('Nancy');
  }



}
