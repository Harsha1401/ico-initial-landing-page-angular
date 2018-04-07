import {Injectable, Output, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {RouteConstants} from "../constants/routes";

@Injectable()
export class SharedService {

  @Output() sidebarToggleEventEmiter: EventEmitter<any> = new EventEmitter();
  menuState : string = 'in'; 
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private taskCount: number = 0; 
  constructor(private router: Router) {

  }
 

  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }

  setLoader(val: boolean): void {
    if (val) {
      this.taskCount += 1
    } else {
      this.taskCount -= 1
      this.taskCount != 0 ? val = true : "";
    }
    this.isLoading.next(val);
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