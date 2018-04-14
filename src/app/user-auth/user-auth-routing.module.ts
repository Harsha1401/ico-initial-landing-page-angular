import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RouteConstants} from "../utility/constants/routes";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsPageComponent } from "./contact-us-page/contact-us-page.component";
import { ServicesComponent } from "./services/services.component";
import { OurWorkComponent } from "./our-work/our-work.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent,
  },
  {
    path: RouteConstants.HOME,
    component: LandingPageComponent,
  },
  {
    path: RouteConstants.CONTACT_US,
    component: ContactUsPageComponent,
  },
  {
    path: RouteConstants.SERVICES,
    component: ServicesComponent,
  },
  {
    path: RouteConstants.ABOUT_US,
    component: AboutUsComponent,
  },
  {
    path: RouteConstants.OUR_WORK,
    component: OurWorkComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class UserAuthRoutingModule {

}
