import { Component, OnInit, Input } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { SharedService } from '../../utility/shared-service/shared-service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderNavbarComponent implements OnInit {
  @Input() classNames:string ="navbar navbar-inverse sticky-navigation navbar-fixed-top" ;
  menuState:string = 'out';
  constructor(private sharedService:SharedService) { 
    this.sharedService.sidebarToggleEventEmiter.subscribe(
      (data: any) => {
       this.menuState =  data;
      });
  }

  ngOnInit() {
  }
  toggleMenu() {
    this.sharedService.openSideBar();
  }

}
