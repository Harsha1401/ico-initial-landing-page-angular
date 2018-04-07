import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
//import {LoginComponent} from "./login/login.component";
import {RouteConstants} from "../utility/constants/routes";
import {AuthGaurd} from "../auth-guards/auth.gaurds";
//import {RegisterComponent} from "./register/register.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { FaqComponent } from "./faq/faq.component";
import { TokenBuyersComponent } from "./token-buyers/token-buyers.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProspectiveIcoComponent } from "./prospective-ico/prospective-ico.component";
//import {CompleteIcoComponent} from "./complete-ico/complete-ico.component";

const routes: Routes = [
  {
    path: RouteConstants.LOGIN,
    component: LoginComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: RouteConstants.REGISTERATION,
    component: RegisterUserComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: "",
    component: LandingPageComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: RouteConstants.FAQ,
    component: FaqComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: RouteConstants.TOKEN_FOR_BUYERS,
    component: TokenBuyersComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: RouteConstants.ABOUT_US,
    component: AboutUsComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: RouteConstants.FOR_PROSPECTIVE_ICO,
    component: ProspectiveIcoComponent,
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
