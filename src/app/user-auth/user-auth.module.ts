import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserAuthRoutingModule} from "./user-auth-routing.module";
import { RouterLink } from '@angular/router';
import {RouterModule} from "@angular/router";
//import {UserAuthService} from "./user-auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import {UtilityModule} from "../utility/utility.module";
//import {LoginComponent} from "./login/login.component";
//import {ToastModule} from "ng2-toastr";
//import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import {ChartModule, DialogModule, DropdownModule, TooltipModule} from 'primeng/primeng';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { ContentDisplayComponent } from "./content-display/content-display.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HeaderNavbarComponent } from "./header-navbar/header-navbar.component";
import { LoginComponent } from './login/login.component';
import { SharedService } from "../utility/shared-service/shared-service";
import { RegisterUserComponent } from './register-user/register-user.component';
import { UtilityModule } from "../utility/utility.module";
import { ToastModule } from "ng2-toastr";
//import { CompleteIcoComponent } from './complete-ico/complete-ico.component';
//import { ImageUploadComponent } from './image-upload/image-upload.component';

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
    //LoginComponent,
    //RegisterComponent,
    FooterComponent,
    LandingPageComponent,
    //CompleteIcoComponent,
    //ImageUploadComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ImageGalleryComponent,
    ContentDisplayComponent,
    ContactUsComponent,
    HeaderNavbarComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  providers: [
    //UserAuthService,
    SharedService
  ],
  exports: [
    LoginComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    FooterComponent,
    RegisterUserComponent
   // RegisterComponent
  ]
})

export class UserAuthModule {
}
