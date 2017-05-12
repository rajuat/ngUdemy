import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Orange", 4)
    ];  

    public getIngredients(){
        return this.ingredients.slice();
    }

    public addIngredient(ingredient: Ingredient){
        console.log('service ' + ingredient);
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for( let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}