import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { CockpitComponent } from './data-binding/cockpit/cockpit.component';


const APP_ROUTE: Route[] = [
    { path: '', redirectTo: "/recipes", pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent},
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTE)
    ],
    exports: [
        RouterModule
    ]    
})

export class AppRouteModule {   

}