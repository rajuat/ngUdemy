import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [
    new Recipe(
        "Chicken recipe", 
        "This is simply a chiken", 
        "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
        [
            new Ingredient('Meat', 20),
            new Ingredient('French fries', 20)
        ]
        ),
    new Recipe(
        "Fish recipe", 
        "This is simply a fish", 
        "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg",
        [
            new Ingredient('Fish', 20),
            new Ingredient('Potatoes', 20)
        ]
        )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService){}

  public getRecipes(){
      return this.recipes.slice();
  }

  public getRecipe(id: number){
      return this.recipes[id];
  }
  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}