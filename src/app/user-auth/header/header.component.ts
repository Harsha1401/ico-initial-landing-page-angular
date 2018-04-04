import { Component, OnInit } from '@angular/core';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showHeader: boolean=true;
  headerClass: string="hero-area";
  constructor(router:Router,) {
    router.events.subscribe((event:any) => {
      if(event.url == "#/home" || event.url == "/") {
        this.headerClass = "hero-area";
        this.showHeader = true;  
      } else {
        this.headerClass ="";
        this.showHeader = false;  
      }
    });
  }

  ngOnInit() {
  }

}
