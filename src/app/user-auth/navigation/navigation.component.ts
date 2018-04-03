import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteConstants } from '../../utility/constants/routes';
import { SharedService } from '../../utility/shared-service/shared-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(  private route: ActivatedRoute, private sharedService:SharedService,
     private router: Router) { }

  ngOnInit() {
  }

  closeBtnClicked() {
      this.sharedService.closeSideBar();
  }

}
