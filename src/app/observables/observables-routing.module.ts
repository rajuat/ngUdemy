import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/observables/home/home.component";
import { UserComponent } from "src/app/observables/user/user.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'user/:id', component: UserComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]    
})

export class ObservablesRoutingModule {   

}