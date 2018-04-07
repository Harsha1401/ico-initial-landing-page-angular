import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { SharedService } from './utility/shared-service/shared-service';
import { FooterComponent } from '../app/user-auth/landing-page/footer/footer.component';
import { HeaderComponent } from '../app/user-auth/header/header.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router:Router,private sharedService:SharedService) {
    router.events.subscribe((event) => {
      this.sharedService.closeSideBar();
    });
  }
}
