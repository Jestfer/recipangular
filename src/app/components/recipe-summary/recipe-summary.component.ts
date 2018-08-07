import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent {

  @Input() // We will look for inputs of Type Recipe from the recipe-list component - Injection
  recipe: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter();

  public zoomInClicked() {
    this.zoomIn.emit(this.recipe);
  }

  constructor() { }
}
