import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from "src/app/routing/auth-guard.service";
import { CanDeactivateGuard } from "src/app/routing/servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "src/app/error-page/error-page.component";
import { ServerResolver } from "src/app/routing/servers/server/server-resolver.service";


const appRoutes: Route[] = [
  { path: '', component: HomeComponent, pathMatch: "full" },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  {
    path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: ':id/edit', canDeactivate: [CanDeactivateGuard], component: EditServerComponent }
    ]
  },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { 'message': "Damn! The page is not found!" } },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
