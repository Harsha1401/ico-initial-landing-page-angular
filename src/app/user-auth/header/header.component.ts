import { Component, OnInit, Input } from '@angular/core';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Input() headerClass : string="hero-area";
  @Input() headerText:any ={};
 
  constructor(router:Router,) {
   
  }

  ngOnInit() {
  }

}
