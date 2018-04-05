import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthGaurd } from './auth-guards/auth.gaurds';
import { UserAuthModule } from './user-auth/user-auth.module';
import { UtilityModule } from './utility/utility.module';
import {ToastModule} from "ng2-toastr";
//import {UserAuthModule} from "./user-auth/user-auth.module";
//import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    UserAuthModule,
    UtilityModule,
    AppRoutingModule
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
