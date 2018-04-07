import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { HeaderNavbarComponent } from '../header-navbar/header-navbar.component';
import { SharedService } from '../../utility/shared-service/shared-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteConstants } from '../../utility/constants/routes';
import { CommonRegexp } from "../../utility/constants/validations";
import { transition, animate, style, trigger } from '@angular/animations';
import { BaseComponent } from '../../utility/base-component/base.component';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({transform: 'scale3d(.8, .8, .8)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'scale3d(.0, .0, .0)'}))
      ])
    ])
  ]
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm: FormGroup;
  otpForm: FormGroup;

  activeForm: number = 1;
  userId: string;
  userEmail: string;
  
  constructor(
    public vcr: ViewContainerRef,
    //private userAuthService: UserAuthService,
    private sharedService: SharedService,
    public toastr: ToastsManager,
    private router: Router,
    private formBuilder: FormBuilder) { 
      super(toastr, vcr);
    }

  ngOnInit() {
    this.createLoginForm();
   
  }
  viewRegisterForm() {
    this.router.navigate(["/" + RouteConstants.REGISTERATION]);
  }

    // Initialize form elements with validations and Methods
  // Initialize form elements with validations and Methods
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100), <any>Validators.pattern(CommonRegexp.EMAIL_ADDRESS_REGEXP)])),
      password: new FormControl('')
    });
  }

      // Login form submit method
  onLogin(formParams, isValidForm) {
    if (isValidForm) {
      console.log('User Loged in');
     // this.sharedService.setLoader(true);
      // this.sharedService.setPass(formParams.password);
      // formParams.password = this.commonFunctions.encryptPassword(formParams.password).toString();
      // this.apiManager.postAPI(API.Login, formParams).subscribe(response=> {
      //   if (response.payload.data.token) {
      //     this.sharedService.setUser(response.payload.data.user);
      //     this.checkProofAccountBalance("0x" + this.sharedService.getWalletAddress.address,response);
      //   } else {
      //     this.activeForm = 2;
      //     this.userId = response.payload.data.userId;
      //     this.userEmail = formParams.email;
      //   }
     // });
    }
  }

}
