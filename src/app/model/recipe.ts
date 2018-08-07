export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Instruction {
  instruction: string;
  pic: string;
}

export class Recipe {
  public title: string;
  public description: string;
  public ingredients: Ingredient[];
  public instructions: Instruction[];
  public pic: string;

  constructor(t: string, d: string, ingr: Ingredient[], instr: Instruction[], p: string) {
    this.title = t;
    this.description = d;
    this.ingredients = ingr;
    this.instructions = instr;
    this.pic = p;
  }

  // Add static class?? to allow user to create new recipe, and bind it with [(ngModel)] to allow it to be a recipe in Model and display it
}
