import { AuthService } from '../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { Http, Response } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, 
            private recipeService: RecipeService,
            private authService: AuthService){}

    storeRecipe(){
        const token = this.authService.getToken();
        return this.http.put('https://udemy-ng-http-10761.firebaseio.com/recipes.json?auth='+token
            , this.recipeService.getRecipes());
    }

    fetchRecipe() {
        const token = this.authService.getToken();
        return this.http.get('https://udemy-ng-http-10761.firebaseio.com/recipes.json?auth'+token)
            .map((response: Response)=> {
                const recipes: Recipe[] = response.json();
                for(let recipe of recipes){
                    if(!recipe['ingredients']){
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            })
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }

}