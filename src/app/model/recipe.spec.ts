import { Recipe, Ingredient } from './recipe';

describe('Model: Recipe Class', () => {
  let recipe: Recipe;
  let IIng; // Ingredient interface
  let IInst; // Instruction interface

  const dish = 'Banana Bread';
  const descr = 'The best of the fruit and the wheat';
  const photo = 'xxxUrl';

  IIng = {
    ingredient: 'banana',
    measure: 'lots'
  };

  IInst = {
    instruction: 'mix bananas and bread',
    photo: 'like this'
  };

  beforeEach(() => {
    recipe = new Recipe(dish, descr, IIng, IInst, photo);
  });

  it('should instantiate a new Recipe with a title, a description and a pic', () => {
    expect(recipe.title).toEqual(dish);
    expect(recipe.description).toEqual(descr);
    expect(recipe.ingredients).toEqual(IIng);
    expect(recipe.instructions).toEqual(IInst);
    expect(recipe.pic).toEqual(photo);
  });
});
