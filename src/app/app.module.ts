import { ShortenPipe } from './pipes/shorten.pipe';
import { RecipeService } from './recipes/recipe.service';
import { ObservablesRoutingModule } from './observables/observables-routing.module';
import { ServersService } from './routing/servers/servers.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ServerComponent as BasicServerComponent } from './test/server/server.component';
import { ServersComponent as BasicServersComponent } from './test/servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CockpitComponent } from './data-binding/cockpit/cockpit.component';
import { ServerElementComponent } from './data-binding/server-element/server-element.component';
import { DirectivesComponent } from './directives/directives.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from "src/app/shared/dropdown.directive";
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { LoggingService } from "src/app/accounts/logging.service";
import { AccountsService } from "src/app/accounts/accounts.service";
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { ServersComponent } from './routing/servers/servers.component';
import { EditServerComponent } from './routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './routing/servers/server/server.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from "src/app/routing/app-routing.module";
import { AuthGuard } from "src/app/routing/auth-guard.service";
import { AuthService } from "src/app/routing/auth.service";
import { CanDeactivateGuard } from "src/app/routing/servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from "src/app/routing/servers/server/server-resolver.service";
import { AppRouteModule } from "src/app/app-routing.module";
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservablesComponent } from './observables/observables.component';
import { HomeComponent as ObservablesHomeComponent } from './observables/home/home.component';
import { UserComponent as ObservablesUserComponent } from './observables/user/user.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import { ServerService } from "./http/server.service";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService as FirebaseAuthService} from './auth/auth.service'
import { AuthGuard as FirebaseAuthGuard } from './auth/auth-guard.service';
import { AnimationsComponent } from './animations/animations.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BasicServerComponent,
    BasicServersComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DataBindingComponent,
    CockpitComponent,
    ServerElementComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountsComponent,
    AccountComponent,
    NewAccountComponent,
    RoutingComponent,
    HomeComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObservablesComponent,
    ObservablesHomeComponent,
    ObservablesUserComponent,
    FormsComponent,
    ReactiveFormsComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent,
    SignupComponent,
    SigninComponent,
    AnimationsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //AppRoutingModule,
    AppRouteModule,
    //ObservablesRoutingModule
  ],
  providers: [
    AccountsService,
    LoggingService,
    ShoppingListService,
    ServersService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    ServerResolver,
    RecipeService, 
    ServerService,
    DataStorageService,
    FirebaseAuthService,
    FirebaseAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
