(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-us-contact-us-module"],{

/***/ "./src/app/frontend/contact-us/contact-us.component.html":
/*!***************************************************************!*\
  !*** ./src/app/frontend/contact-us/contact-us.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fuild contact-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-12\">\n        <h3 class=\"contact-page-title\">Contact Us</h3>\n        <h6 class=\"item-title\">Our Location</h6>\n        <div class=\"contact_address\">360 EPES #20, 452 holly Lane Hopewell, VA 23860 </div>\n        <h6 class=\"item-title\">Telephone</h6>\n        <div class=\"contact_telephone\">07448 685480 </div>\n        <h6 class=\"item-title\">Email</h6>\n        <div class=\"contact_email\">info@360epes.com</div>\n      </div>\n      <div class=\"col-md-6 col-sm-12\">\n        <h6 class=\"item-title\"> Get in touch with us</h6>\n        <p>Fill out this contact form and we will get back to you as soon as possible.</p>\n        <form class=\"contact-form\" id=\"contact-form\" (ngSubmit)=\"contactusForm()\">\n          <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"name\">\n          <input id=\"email\" name=\"field_email\" type=\"email\" class=\"form-control waves-light\" placeholder=\"Official Email Address\" [(ngModel)]=\"field_email\">\n          <div class=\"row\">\n            <div class=\"col-sm-2 col-country-code\">\n              <select class=\"selectpicker form-control browser-default mdb-select browser-default country-code\" [(ngModel)]=\"field_country_code\"\n                name=\"field_country_code\">\n                <option *ngFor=\"let job of countryList\" value=\"{{job.dial_code}}\">{{job.dial_code}}</option>\n              </select>\n            </div>\n            <div class=\"col-sm-10\">\n              <input id=\"phone\" name=\"field_phone\" type=\"text\" class=\"form-control waves-light\" placeholder=\"Official Phone Number\" [(ngModel)]=\"field_phone\">\n            </div>\n          </div>\n          <textarea id=\"message\" name=\"field_message\" class=\"form-control\" placeholder=\"Message\" [(ngModel)]=\"field_message\"></textarea>\n          <button type=\"submit\" class=\"btn_contactsubmit\">Send</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/contact-us/contact-us.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/frontend/contact-us/contact-us.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #000; }\n\n.contact-section {\n  background: #000;\n  padding: 50px 0px;\n  color: #fff;\n  background-image: url('contact_bg.jpg'); }\n\nh6.item-title {\n  font-size: 22px;\n  margin-bottom: 15px;\n  margin-top: 15px; }\n\nh3.contact-page-title {\n  font-size: 35px;\n  font-weight: 400; }\n\nh3.contact-page-title::after {\n  content: \"\";\n  display: block;\n  width: 150px;\n  height: 3px;\n  background: #fff;\n  margin-bottom: 25px; }\n\n.contact_address, .contact_telephone, .contact_email {\n  font-size: 15px;\n  font-weight: 300;\n  padding-left: 30px; }\n\n.contact_email::before, .contact_address::before, .contact_telephone::before {\n  content: \"\\f041\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-left: -30px;\n  margin-right: 15px; }\n\n.contact_address::before {\n  content: \"\\f041\"; }\n\n.contact_telephone::before {\n  content: \"\\f095\"; }\n\n.contact_email::before {\n  content: \"\\f0e0\"; }\n\n.contact-form .form-control {\n  background: transparent;\n  border: 1px solid #ccc;\n  margin-bottom: 25px;\n  color: #fff; }\n\n.txt_requid {\n  text-align: right;\n  margin-bottom: 10px;\n  font-size: 14px; }\n\n.btn_contactsubmit {\n  background: #fdb827;\n  border: none;\n  padding: 5px 27px;\n  border-radius: 4px;\n  float: right;\n  color: #000;\n  font-size: 16px;\n  cursor: pointer; }\n\nselect option {\n  margin: 40px;\n  background: #000;\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4); }\n\n.browser-default.country-code {\n  padding: 0px; }\n\n.col-country-code {\n  padding-right: 0px; }\n"

/***/ }),

/***/ "./src/app/frontend/contact-us/contact-us.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/frontend/contact-us/contact-us.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ActivatedRoute } from '../../../../node_modules/@angular/router';
// import { ContactusService } from '../../admin/frontend/contactus/contactus.service';

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(_validationsService, _commonService, contactusService) {
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.contactusService = contactusService;
        this.contactusid = '';
        this.name = '';
        this.field_email = '';
        this.field_phone = '';
        this.field_message = '';
        this.field_country_code = '+91';
        this.countryList = [];
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.getCountryList();
    };
    ContactUsComponent.prototype.contactusForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_email)) {
            this._commonService.showMessage('error', 'Email Address should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone Number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone Number should contain only digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
            return false;
        }
        if (this._validationsService.isMaximum(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone number should not exceed 13 digits!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_country_code)) {
            this._commonService.showMessage('error', 'Please Select Dialing Code!');
            return false;
        }
        var fieldcontactusid;
        if (!this._validationsService.isEmpty(this.contactusid)) {
            fieldcontactusid = {
                name: this.name,
                mobile: this.field_phone,
                email: this.field_email,
                message: this.field_message,
                countrycode: this.field_country_code,
                contactusid: this.contactusid
            };
        }
        else {
            fieldcontactusid = {
                name: this.name,
                mobile: this.field_phone,
                email: this.field_email,
                message: this.field_message,
                countrycode: this.field_country_code
            };
        }
        this.contactusService.addContactus(fieldcontactusid)
            .subscribe(function (res) {
            if (res.api_message == "success") {
                _this._commonService.showMessage('success', res.api_message);
                _this.name = '';
                _this.field_message = '';
                _this.field_email = '';
                _this.field_phone = '';
                _this.field_country_code = '+91';
                _this._commonService.redirectTo('/contact-us');
            }
            else {
                _this._commonService.showMessage('error', res.api_message);
            }
        });
    };
    ContactUsComponent.prototype.getCountryList = function () {
        this.countryList = this.contactusService.getCountryList();
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/frontend/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/frontend/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validations_service__WEBPACK_IMPORTED_MODULE_1__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_cms_service__WEBPACK_IMPORTED_MODULE_3__["CmsService"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/frontend/contact-us/contact-us.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/frontend/contact-us/contact-us.module.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/frontend/contact-us/contact-us.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] }
];
var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"]]
        })
    ], ContactUsModule);
    return ContactUsModule;
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
//# sourceMappingURL=contact-us-contact-us-module.js.map