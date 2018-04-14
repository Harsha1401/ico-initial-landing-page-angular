import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ConnectionBackend, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
 import {ProgressHudComponent} from "./progress-hud/progress-hud.component";
 import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
 import {BaseComponent} from "./base-component/base.component";
 import {DropdownModule} from "primeng/primeng";
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
 import { SharedService } from "./shared-service/shared-service";

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
     ProgressHudComponent,
     PageNotFoundComponent,
     BaseComponent,
  ],
  providers: [
     SharedService,
  ],
  exports: [
     ProgressHudComponent,
     PageNotFoundComponent,
     BaseComponent,
  ]
})

export class UtilityModule {
}
