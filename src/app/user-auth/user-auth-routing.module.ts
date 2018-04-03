import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
//import {LoginComponent} from "./login/login.component";
import {RouteConstants} from "../utility/constants/routes";
import {AuthGaurd} from "../auth-guards/auth.gaurds";
//import {RegisterComponent} from "./register/register.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { LoginComponent } from "./login/login.component";
//import {CompleteIcoComponent} from "./complete-ico/complete-ico.component";

const routes: Routes = [
  {
    path: RouteConstants.LOGIN,
    component: LoginComponent
  },
  // {
  //   path: RouteConstants.REGISTERATION,
  //   component: RegisterComponent,
  //   canActivate: [AuthGaurd]
  // },
  {
    path: "",
    component: LandingPageComponent,
    canActivate: [AuthGaurd]
  }
  // {
  //   path: RouteConstants.COMPLETE_ICO,
  //   component: CompleteIcoComponent,
  //   canActivate: [AuthGaurd]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class UserAuthRoutingModule {

}
