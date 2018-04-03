import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConstants} from './utility/constants/routes';
import { LandingPageComponent } from './user-auth/landing-page/landing-page.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: RouteConstants.NOTFOUND,
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: RouteConstants.NOTFOUND,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
