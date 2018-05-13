import { Component } from '@angular/core';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('Banana Bread', 'My fav recipe', null, null, '/assets/Banana-Bread.png'),
      new Recipe('Nutella Bread', 'My second fav recipe', null, null, null)
    ];
  }
}
