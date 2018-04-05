import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from '../../utility/shared-service/shared-service';
import { ToastsManager } from 'ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../utility/base-component/base.component';
import { transition, animate, style, trigger } from '@angular/animations';
import {CommonRegexp, CommonValidationMessages} from "../../utility/constants/validations";
import { User } from '../../utility/shared-model/shared-user.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
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
export class RegisterUserComponent extends BaseComponent implements OnInit {
  registerForm: FormGroup;
  
  registerFormValues: any;
 // commonFunctions = new CommonFunctions();
 
  email: string;
  user: User;
  mixpanel: any;
  constructor(public toastr: ToastsManager,
    public vcr: ViewContainerRef,
   // private userAuthService: UserAuthService,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
   
    private formBuilder: FormBuilder,
    ) { super(toastr, vcr);}

  ngOnInit() {
    this.createRegisterForm();
  }

  // Initialize form elements with validations and Methods
  createRegisterForm() {
   // let refer = this.sharedService.getRefer();
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(50)])),
      email: new FormControl(this.email ? this.email : '', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(100), <any>Validators.pattern(CommonRegexp.EMAIL_ADDRESS_REGEXP)])),
      password: new FormControl('', Validators.compose([Validators.minLength(8), Validators.maxLength(50), Validators.pattern(CommonRegexp.PASSWORD_REGEXP)])),
      confirmPassword: new FormControl(''),
      telephoneNumber: new FormControl(''),
      country: new FormControl(''),
      countryCode: new FormControl(''),
      encryptContainer: new FormControl(''),
      ethereumAddress: new FormControl(''),
     // referralCode: new FormControl(refer ? refer : '', [<any>Validators.minLength(8), <any>Validators.maxLength(8)])
    }, {validator: this.validPassword});
  }

  validPassword(fg: FormGroup) {
    let newPasswordValue = fg.value["password"]
    let confirmPasswordValue = fg.value["confirmPassword"]
    let valid = true;
    if (newPasswordValue != "" && (newPasswordValue !== confirmPasswordValue)) {
      valid = false;
    }
    return valid ? null : {'repeatPassword': true};
  }

  // Register form submit method
  onRegister(formParam, isValidForm, countryValue) {
    // formParam["country"] = countryValue;
    // if (countryValue == "United States") {
    //   this.toastr.error(this.translateService.instant('usNotResidentsParticipateMsg'));
    //   return false;
    // }
    // formParam.countryCode = '+' + this.countryCodeValue;
    // var mno = formParam.telephoneNumber.substr(0, 2).includes(formParam.countryCode) ? formParam.telephoneNumber : formParam.countryCode + formParam.telephoneNumber;
    // formParam["telephoneNumber"] = mno;
    // if (isValidForm) {
    //   this.sharedService.trackMixPanelEvent("When the Checkbox popup after registration");
    //   // console.log("Regiter form values :=>", formParam);
    //   this.registerFormValues = formParam;
    // }
  }

}
