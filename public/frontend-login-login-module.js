(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-login-login-module"],{

/***/ "./src/app/frontend/login/login.component.html":
/*!*****************************************************!*\
  !*** ./src/app/frontend/login/login.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"ccontainer-fuild login_main\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-6 col-sm-12 login_image hidden-sm-down\">\n    </div>\n    <!-- <div class=\"col-lg-4 col-md-6 col-sm-12 form-container\">\n      <a [routerLink]=\"['/']\"><img src=\"../../../assets/img/epes-logo-footer.png\" class=\"logo_login\"></a>\n      <form class=\"login-form\" id=\"login-form\" (ngSubmit)=\"getOTP()\">\n        <h3 class=\"login-heading\">Login</h3>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1\" name=\"groupOfMaterialRadios\">\n            <label class=\"form-check-label\" [(ngModel)]=\"loginType\" for=\"materialGroupExample1\" value=\"admin\">Admin</label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample2\" name=\"groupOfMaterialRadios\"\n              [(ngModel)]=\"loginType\" value=\"employee\">\n            <label class=\"form-check-label\" for=\"materialGroupExample2\">Employee</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input placeholder=\"Email Address\" type=\"text\" id=\"defaultForm-email\" [(ngModel)]=\"field_username\" name=\"field_username\"\n            class=\"form-control waves-light\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-default btn_login\" value=\"Get OTP\">\n    </div>\n    </form> -->\n    <div class=\"col-lg-4 col-md-6 col-sm-12 form-container\">\n      <a [routerLink]=\"['/']\"><img src=\"../../../assets/img/epes-logo-footer.png\" class=\"logo_login\"></a>\n      <form class=\"login-form\" id=\"login-form\" (ngSubmit)=\"getOTP()\">\n        <h3 class=\"login-heading\">Login</h3>\n        <div class=\"form-group\">\n          <!-- <label class=\"login-label\">Enter your email address</label> -->\n          <input placeholder=\"Email Address\" type=\"text\" id=\"defaultForm-email\" [(ngModel)]=\"field_username\" name=\"field_username\"\n            class=\"form-control waves-light\">\n        </div>\n\n        <div class=\"form-group\">\n          <!-- <label class=\"login-label\">Enter your Password</label> -->\n          <input placeholder=\"Password\" type=\"password\" id=\"defaultForm-pass\" [(ngModel)]=\"field_password\" name=\"field_password\"\n            class=\"form-control waves-light\">\n        </div>\n\n        <div class=\"text-center\">\n          <input type=\"submit\" class=\"btn btn-default btn_login\" value=\"Login\">\n          <!-- <a class=\"sign-up-link\" [routerLink]=\"['/registration']\">Sign Up</a> -->\n        </div>\n\n      </form>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</section>\n\n<div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden()\" mdbModal\n  #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\" style=\"overflow: auto;\">\n  <div class=\"modal-login modal-dialog modal-notify modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden()\">\n        <span aria-hidden=\"true\" class=\"black-text close-btn\">×</span>\n      </button>\n      <div class=\"modal-body\">\n        <form (ngSubmit)=\"loginForm()\">\n          <div class=\"\">\n            <label class=\"label-otp\">Enter OTP</label>\n            <input type=\"hidden\" name=\"otpid\" [(ngModel)]=\"otpid\" />\n            <input class=\"input-otp\" type=\"text\" name=\"otp\" [(ngModel)]=\"otp\" />\n          </div>\n          <a (click)=\"getOTP()\" class=\"rotp\">Resend OTP</a>\n          <input type=\"submit\" class=\"btn btn-default btn-otp-submit\" value=\"Login\">\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/frontend/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/frontend/login/login.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_image img {\n  max-width: 100%;\n  height: 100vh; }\n\n.login_main {\n  padding: 0px 15px 0px 0px;\n  background: url('bg-contact.jpg');\n  background-size: cover;\n  min-height: 100vh;\n  color: aliceblue; }\n\n.form-container {\n  padding-top: 100px;\n  height: 100%;\n  padding-left: 0;\n  width: 100%;\n  display: inline-block;\n  position: relative; }\n\n.login-heading {\n  color: #fff;\n  font-weight: 500;\n  font-size: 20px; }\n\np {\n  margin: 0 0 10px; }\n\n.login-form {\n  max-width: 60%;\n  margin-left: 10%; }\n\n.login-label {\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.btn_login,\n.btn-default:not([disabled]):not(.disabled):active,\n.btn-default:not([disabled]):not(.disabled).active,\n.show > .btn-default.dropdown-toggle {\n  background-color: #fcb827 !important;\n  color: #000 !important;\n  font-size: 15px;\n  font-weight: 300;\n  padding: 7px 25px;\n  border-radius: 5px;\n  float: left;\n  box-shadow: none; }\n\nimg.logo_login {\n  /* width: 150px;\n    margin-top: 25px;\n    margin-left: 10%;*/\n  width: 170px;\n  margin-top: -25px;\n  margin-left: 10%;\n  margin-bottom: 44px; }\n\n@media only screen and (max-width: 767px) {\n  .hidden-sm-down {\n    display: none; } }\n\n/*------logo-img-size setting---*/\n\n.login_image img {\n  max-width: 100%;\n  height: auto; }\n\n.sign-up-link {\n  color: #fff;\n  display: block;\n  padding-top: 10px;\n  font-weight: 500;\n  text-decoration: none;\n  margin-top: 5px;\n  float: right;\n  margin-right: 15px; }\n\n#login-form {\n  margin-top: 30px; }\n\n.sign-up-link:hover {\n  text-decoration: underline; }\n\n.input-otp {\n  width: 100%;\n  border: 1px solid #ccc;\n  height: 35px;\n  border-radius: 5px;\n  padding: 0px 15px; }\n\n.label-otp {\n  font-size: 15px;\n  color: #555; }\n\n.btn-otp-submit {\n  background: #fcb827 !important;\n  padding: 8px 20px;\n  box-shadow: none;\n  float: right;\n  margin-right: 0px; }\n\n.rotp {\n  padding-top: 15px;\n  display: block;\n  float: left;\n  font-size: 13px; }\n\n.modal-sm {\n  margin-top: 10%; }\n\n.close {\n  color: #555;\n  z-index: 9999; }\n"

/***/ }),

/***/ "./src/app/frontend/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/frontend/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { UserService } from '../../admin/user/user.service';


var LoginComponent = /** @class */ (function () {
    function LoginComponent(_validationsService, _commonService, userService) {
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.userService = userService;
        this.field_username = '';
        this.field_password = '';
        this.otpid = '';
        this.otp = '';
        this.loginType = '';
        this.isModalShown = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.getOTP = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.field_username)) {
            this._commonService.showMessage('error', 'Email should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_username)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_password)) {
            this._commonService.showMessage('error', 'Password should not be empty!');
            return false;
        }
        var fields = {
            email: this.field_username,
            password: this.field_password
        };
        this.userService.getToken(fields)
            .subscribe(function (otpres) {
            if (otpres.login_status === 'OK') {
                _this.otpid = otpres.id;
                // this._commonService.redirectTo(otpres.redirect);
                //window.location.href = 'http://localhost:8000/ng/ver1';
                // this.showModal();
            }
            else {
                _this._commonService.showMessage('error', otpres.message);
                // this._commonService.showMessage('error', otpres.msg);
            }
        });
    };
    LoginComponent.prototype.showModal = function () {
        this.isModalShown = true;
    };
    LoginComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    LoginComponent.prototype.onHidden = function () {
        this.isModalShown = false;
    };
    LoginComponent.prototype.loginForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.field_username)) {
            this._commonService.showMessage('error', 'Username should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_username)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        // if (this._validationsService.isEmpty(this.otp)) {
        //   this._commonService.showMessage('error', 'OTP should not be empty!');
        //   return false;
        // }
        // if (this._validationsService.isEmpty(this.otpid)) {
        //   this._commonService.showMessage('error', 'Click resend otp to get new OTP');
        //   return false;
        // }
        if (this._validationsService.isEmpty(this.field_password)) {
            this._commonService.showMessage('error', 'Password should not be empty!');
            return false;
        }
        // if (this._validationsService.isPassword(this.field_password)) {
        // tslint:disable-next-line:max-line-length
        //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
        //   return false;
        // }
        var otpField = {
            otpid: this.otpid,
            otp: this.otp
        };
        this.userService.checkOTP(otpField)
            .subscribe(function (resotp) {
            if (resotp.success) {
                var user = {
                    email: _this.field_username,
                    password: _this.field_password
                };
                _this.userService.authenticateUser(user).subscribe(function (res) {
                    if (res.success) {
                        _this.userService.storeUserData(res.token, res.user);
                        _this._commonService.showMessage('success', 'Your Successfully Logged In');
                        _this._commonService.redirectTo('/admin');
                    }
                    else {
                        _this._commonService.showMessage('error', res.msg);
                    }
                });
            }
            else {
                _this._commonService.showMessage('error', resotp.msg);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoShownModal'),
        __metadata("design:type", _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], LoginComponent.prototype, "autoShownModal", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/frontend/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/frontend/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validations_service__WEBPACK_IMPORTED_MODULE_1__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_cms_service__WEBPACK_IMPORTED_MODULE_4__["CmsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/frontend/login/login.module.ts":
/*!************************************************!*\
  !*** ./src/app/frontend/login/login.module.ts ***!
  \************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/frontend/login/login.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/services/validations.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/validations.service.ts ***!
  \*************************************************/
/*! exports provided: ValidationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationsService", function() { return ValidationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidationsService = /** @class */ (function () {
    function ValidationsService() {
    }
    ValidationsService.prototype.isEmpty = function (input) {
        if (input === undefined ||
            input === null ||
            (typeof input === 'object' && Object.keys(input).length === 0) ||
            (typeof input === 'string' && input.trim().length === 0)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isEmail = function (email) {
        // tslint:disable-next-line:max-line-length
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidationsService.prototype.isMobile = function (mobile) {
        var mob = /[0-9]+/;
        /[^0-9]/g;
        if (!mob.test(mobile)) {
            return 'Mobile field shoud have only number';
        }
        else if (mobile.length !== 10) {
            return 'Mobile field should contain only 10 numbers';
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isDigit = function (digit) {
        var dig = /[^0-9]/g;
        if (!dig.test(digit)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isPassword = function (digit) {
        // const dig = /[^0-9]/g;
        var regpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;
        if (!regpassword.test(digit)) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isMinimum = function (mobile) {
        if (mobile.length >= 10) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isMaximum = function (mobile) {
        if (mobile.length <= 13) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationsService.prototype.isNumber = function (input) {
        if (typeof Number(input) === 'number') {
            return true;
        }
        else {
            return false;
        }
    };
    ValidationsService.prototype.isPercentage = function (input) {
        if (typeof Number(input) === 'number') {
            if (input <= 100) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    ValidationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidationsService);
    return ValidationsService;
}());



/***/ })

}]);
//# sourceMappingURL=frontend-login-login-module.js.map