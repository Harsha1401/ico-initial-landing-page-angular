import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserAuthRoutingModule} from "./user-auth-routing.module";
import { RouterLink } from '@angular/router';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FooterComponent } from './landing-page/footer/footer.component';
import {ChartModule, DialogModule, DropdownModule, TooltipModule} from 'primeng/primeng';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./landing-page/slider/slider.component";
import { ImageGalleryComponent } from "./landing-page/image-gallery/image-gallery.component";
import { ContentDisplayComponent } from "./landing-page/content-display/content-display.component";
import { ContactUsComponent } from "./landing-page/contact-us/contact-us.component";
import { HeaderNavbarComponent } from "./header-navbar/header-navbar.component";
import { SharedService } from "../utility/shared-service/shared-service";
import { UtilityModule } from "../utility/utility.module";
import { ToastModule } from "ng2-toastr";
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactUsPageComponent } from "./contact-us-page/contact-us-page.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    DialogModule,
    TooltipModule,
    ChartModule,
    UtilityModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    UserAuthRoutingModule,
  ],
  declarations: [
    FooterComponent,
    LandingPageComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ImageGalleryComponent,
    ContentDisplayComponent,
    ContactUsComponent,
    HeaderNavbarComponent,
    FaqComponent,
    AboutUsComponent,
    ServicesComponent,
    OurWorkComponent,
    ContactUsPageComponent
  ],
  providers: [
    SharedService
  ],
  exports: [
    HeaderComponent,
    HeaderNavbarComponent,
    FooterComponent,
  ]
})

export class UserAuthModule {
}
