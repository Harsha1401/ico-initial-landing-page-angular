import {Injectable, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {RouteConstants} from "../constants/routes";

@Injectable()
export class SharedService {

  @Output() sidebarToggleEventEmiter: EventEmitter<any> = new EventEmitter();
  menuState : string = 'in';  
  constructor(private router: Router) {

  }
 

  openSideBar() {
    this.menuState = 'in';
    this.sidebarToggleEventEmiter.emit(this.menuState);
  }

  closeSideBar() {
    this.menuState = 'out';
    this.sidebarToggleEventEmiter.emit(this.menuState);
  }

  getToggleSideBar():string {
    return this.menuState;
  }
}