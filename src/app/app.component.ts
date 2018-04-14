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
  headerClass: string;
  headerText:any={};
  constructor(router:Router,private sharedService:SharedService) {
    
    router.events.subscribe((event) => {
      this.headerClass = "hero-area";
      this.sharedService.closeSideBar();
      if(event instanceof NavigationStart) {
        console.log(event.url);
        if(event.url === "/about-us") {
          this.headerText.heading1="";
          this.headerText.heading2="ABOUT US";
          this.headerText.heading3="";
          this.headerText.p1="We noticed you taking a peek.";
          this.headerText.p2="Don’t worry,";
          this.headerText.p3=" we appreciate your curiosity.";
          this.headerText.p4="Scroll on down ";
          this.headerText.p5="to find out more.";
          this.headerText.bgurl="../../../assets/img/about-us.jpg";

        } else if(event.url ==="/contact-us-page") {

          this.headerText.heading1="";
          this.headerText.heading2="CONTACT US";
          this.headerText.heading3="";
          this.headerText.p1="We noticed you taking a peek.";
          this.headerText.p2="Don’t worry,";
          this.headerText.p3=" we appreciate your curiosity.";
          this.headerText.p4="Scroll on down ";
          this.headerText.p5="to find out more.";
          this.headerText.bgurl="../../../assets/img/contact-us.jpg";
          
        } else if(event.url ==="/services") {
          this.headerText.heading1="";
          this.headerText.heading2="Our Services";
          this.headerText.heading3="";
          this.headerText.p1="We noticed you taking a peek.";
          this.headerText.p2="Don’t worry,";
          this.headerText.p3=" we appreciate your curiosity.";
          this.headerText.p4="Scroll on down ";
          this.headerText.p5="to find out more.";
          this.headerText.bgurl="../../../assets/img/our-services.jpg";
        } else if(event.url ==="/our-work"){
          this.headerText.heading1="";
          this.headerText.heading2="OUR WORK";
          this.headerText.heading3="";
          this.headerText.p1="We noticed you taking a peek.";
          this.headerText.p2="Don’t worry,";
          this.headerText.p3=" we appreciate your curiosity.";
          this.headerText.p4="Scroll on down ";
          this.headerText.p5="to find out more.";
          this.headerText.bgurl="../../../assets/img/ourwork.jpg";
        } else{
          this.headerText.heading1="CREATIVE";
          this.headerText.heading2="TECHNOLOGY";
          this.headerText.heading3="COMPANY";
          this.headerText.p1="A unique breed of engineers";
          this.headerText.p2=", craftsmen ";
          this.headerText.p3="artists spread";
          this.headerText.p4="across";
          this.headerText.p5="Singapore, Indonesia, Malaysia, Thailand and Vietnam.";
          this.headerText.bgurl="../../../assets/img/home.jpg";
        }
      }
    });
  }
}
