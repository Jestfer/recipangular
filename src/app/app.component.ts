import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Banana Bread', 'My fav recipe', null, null, '/assets/Banana-Bread.png'),
      new Recipe('Nutella Bread', 'My second fav recipe', null, null, null)
    ];
  }
}
