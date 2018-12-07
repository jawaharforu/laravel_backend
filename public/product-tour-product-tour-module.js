(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-tour-product-tour-module"],{

/***/ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"back_img\">\n  <img src=\"../../../assets/img/crop1.png\" > \n</section>\n\n<section id=\"hed1\" class=\"regtitle\">\n  <div class=\"container detls\">\n      <h2>Sed perspiciatis \" unde omnis</h2>\n      <h3><strong>Lorem</strong> Ipsum perspiciatis </h3>\n      <p>Tempora, placeat ratione porro voluptate odit minima.</p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProductTourBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTourBannerComponent", function() { return ProductTourBannerComponent; });
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

var ProductTourBannerComponent = /** @class */ (function () {
    function ProductTourBannerComponent() {
    }
    ProductTourBannerComponent.prototype.ngOnInit = function () {
    };
    ProductTourBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-tour-banner',
            template: __webpack_require__(/*! ./product-tour-banner.component.html */ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.html"),
            styles: [__webpack_require__(/*! ./product-tour-banner.component.scss */ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductTourBannerComponent);
    return ProductTourBannerComponent;
}());



/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"customer\">\n  <div class=\"container\">\n    <!-- Content here -->\n    <div class=\"row\">\n      <div class=\"col-sm-8 main_head\">\n        <h3><span>360EPES</span> - Enterprise Edition</h3>\n        <h3>Experience what over 2 Million customer</h3>\n        <h3>choose <span>360EPES</span></h3>\n        <img src=\"{{content_image}}\" class=\"img-responsive\">\n\n        <div class=\"row\">\n          <div class=\"col-sm-6 sub_titels\" *ngFor=\"let content1 of registration_content1\">\n            <div class=\"col-sm-2 {{classmyclass}}\">\n              <i class=\"far {{ content1.fa_name }}\"></i>\n            </div>\n            <div class=\"col-sm-10\">\n              <h3>{{content1.title}}</h3>\n              <p>{{content1.description}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 sub_titels\" *ngFor=\"let content2 of registration_content2\">\n            <div class=\"col-sm-2 {{classmyclass}}\">\n              <i class=\"far {{content2.fa_name}}\"></i>\n            </div>\n            <div class=\"col-sm-10\">\n              <h3>{{content2.title}}</h3>\n              <p>{{content2.description}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"callus col-sm-12\">\n          <p>Lorem Ipsum perspiciatis?</p>\n          <p>Call Us at {{contact_us}}</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4 form_detail\">\n        <h3>Start your</h3>\n        <h3>Product Tour</h3>\n        <p>Please fill out all fields</p>\n        <form class=\"reg_form\" (ngSubmit)=\"producttourform()\">\n          <input type=\"text\" id=\"first_name\" class=\"form-control browser-default\" placeholder=\"First Name\" [(ngModel)]=\"field_first_name\"\n            name=\"field_first_name\">\n          <input type=\"text\" id=\"last_name\" class=\"form-control browser-default\" placeholder=\"Last Name\" [(ngModel)]=\"field_last_name\"\n            name=\"field_last_name\">\n          <select class=\"mdb-select browser-default\" [(ngModel)]=\"field_job\" name=\"field_job\">\n            <option value=\"\" hidden class=\"industry\">Industries</option>\n            <option *ngFor=\"let job of select_list_job\" [value]=\"job.label\">{{job.label}}</option>\n          </select>\n          <input type=\"email\" id=\"email\" class=\"form-control browser-default\" placeholder=\"Official Email Address\" [(ngModel)]=\"field_email\"\n            name=\"field_email\">\n          <div class=\"clearfix\"></div>\n          <div class=\"row\">\n            <div class=\"col-md-2\">\n              <select class=\"mdb-select browser-default country-code\" [(ngModel)]=\"field_country_code\" name=\"field_country_code\">\n                <option *ngFor=\"let job of countryList\" value=\"{{job.dial_code}}\">{{job.dial_code}}</option>\n              </select>\n            </div>\n            <div class=\"col-md-10\">\n              <input type=\"text\" id=\"Phone\" class=\"form-control browser-default\" placeholder=\"Official Phone Number\" [(ngModel)]=\"field_phone\"\n                name=\"field_phone\">\n            </div>\n          </div>\n          <input type=\"text\" id=\"Company\" class=\"form-control browser-default\" placeholder=\"Company Name\" [(ngModel)]=\"field_company\"\n            name=\"field_company\">\n          <select class=\"browser-default\" [(ngModel)]=\"field_no_of_employee\" name=\"field_no_of_employee\">\n            <option value=\"\" hidden class=\"Employees\">No. of Employees</option>\n            <option *ngFor=\"let employee of select_list_employee\" [value]=\"employee.label\">{{employee.label}}</option>\n          </select>\n          <select class=\"browser-default\" [(ngModel)]=\"field_select_country\" name=\"field_select_country\">\n            <option value=\"\" hidden class=\"Country\">Country</option>\n            <option *ngFor=\"let job of countryList\" [value]=\"job.name\">{{job.name}}</option>\n          </select>\n          <div class=\"clearfix\"></div>\n          <input for=\"checkbox\" type=\"checkbox\" id=\"checkbox\" class=\"form-control browser-default\" [(ngModel)]=\"field_agree\" name=\"field_agree\">\n          <div class=\"form-check mr-3\">\n            <input type=\"checkbox\" class=\"filled-in form-check-input\" id=\"inlineFormCheckbox2\" [(ngModel)]=\"field_agree\" name=\"field_agree\"\n              [checked]=\"field_agree\">\n            <label class=\"form-check-label Agreement_text\" for=\"inlineFormCheckbox2\">I agree to the <a href=\"#\">master subscription\n                Agreement\n              </a></label>\n          </div>\n          <div class=\"text-center mt-4 sub_btn\">\n            <button class=\"btn btn-unique\" type=\"submit\">Start Product Tour</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[type=\"radio\"] + label, [type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  color: #fff;\n  font-size: 14px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border-color: #fdb828;\n  background-color: #fdb828;\n  z-index: 0; }\n\n.form_detail form select {\n  background-color: #ffffffc7;\n  width: 100%;\n  margin-bottom: 15px;\n  height: 37px;\n  /* color: #E91E63; */\n  font-weight: 600;\n  padding-left: 8px; }\n\n.country-code {\n  width: 60px !important;\n  margin-top: 0px; }\n\n#Phone {\n  padding-left: 15px; }\n\n.form_detail[_ngcontent-c9] form[_ngcontent-c9] select[_ngcontent-c9] {\n  background-color: #ffffffc7;\n  width: 100%;\n  margin-bottom: 15px;\n  height: 37px;\n  font-weight: normal;\n  padding-left: 8px; }\n"

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductTourContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTourContentComponent", function() { return ProductTourContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _admin_frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/frontend/contactus/contactus.service */ "./src/app/admin/frontend/contactus/contactus.service.ts");
/* harmony import */ var _admin_frontend_producttour_producttour_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/frontend/producttour/producttour.service */ "./src/app/admin/frontend/producttour/producttour.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductTourContentComponent = /** @class */ (function () {
    function ProductTourContentComponent(_commonService, _validationsService, contactusService, producttourService, activatedRoute) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.contactusService = contactusService;
        this.producttourService = producttourService;
        this.activatedRoute = activatedRoute;
        this.producttourid = '';
        this.field_first_name = '';
        this.field_last_name = '';
        this.field_job = '';
        this.field_email = '';
        this.field_phone = '';
        this.field_company = '';
        this.field_no_of_employee = '';
        this.field_select_country = '';
        this.field_agree = false;
        this.field_country_code = '+91';
        this.content_image = '../../../assets/img/360 EPES.png';
        this.registration_content1 = [
            {
                id: 1,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-gavel'
            },
            {
                id: 2,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-globe'
            }
        ];
        this.registration_content2 = [
            {
                id: 1,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-share-alt'
            },
            {
                id: 2,
                title: 'Accusantinum dloremqu',
                description: 'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
                fa_name: 'fa-calculator'
            }
        ];
        this.classmyclass = "col-my-1";
        this.select_list_job = [
            { label: 'Agriculture & Forestry/Wildlife' },
            { label: 'Business & Information' },
            { label: 'Construction/Utilities/Contracting' },
            { label: 'Education' },
            { label: 'Finance & Insurance' },
            { label: 'Food & Hospitality' },
            { label: 'Gaming' },
            { label: 'Health Services' },
            { label: 'Motor Vehicle' },
            { label: 'Natural Resources/Environmental' },
            { label: 'Other' },
            { label: 'Personal Services' },
            { label: 'Real Estate & Housing' },
            { label: 'Safety/Security & Legal' },
            { label: 'Transportation' }
        ];
        this.select_list_employee = [
            { id: 0, label: '10-50' },
            { id: 1, label: '50-100' },
            { id: 2, label: '100-500' },
            { id: 3, label: '500-1000' },
            { id: 4, label: '1000-5000' },
            { id: 5, label: '5000 above' }
        ];
        this.contact_us = '0088 3325 5545';
    }
    ProductTourContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountryList();
        this.activatedRoute.params.subscribe(function (params) {
            _this.producttourid = params['producttourid'];
            if (!_this._validationsService.isEmpty(_this.producttourid)) {
                _this.getProducttourById(_this.producttourid);
            }
        });
    };
    ProductTourContentComponent.prototype.getProducttourById = function (producttourid) {
        var _this = this;
        this.producttourService.getProducttourById(producttourid)
            .subscribe(function (res) {
            _this.field_first_name = res.data.firstname;
            _this.field_last_name = res.data.lastname;
            _this.field_job = res.data.industry;
            _this.field_email = res.data.email;
            _this.field_phone = res.data.contact;
            _this.field_no_of_employee = res.data.noofemployees;
            _this.field_company = res.data.company;
            _this.field_select_country = res.data.country;
            _this.field_country_code = res.data.countrycode;
            _this.producttourid = res.data._id;
        });
    };
    ProductTourContentComponent.prototype.getCountryList = function () {
        var _this = this;
        this.contactusService.getCountryList()
            .subscribe(function (res) {
            console.log(res);
            _this.countryList = res.data;
        });
    };
    ProductTourContentComponent.prototype.producttourform = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.field_first_name)) {
            this._commonService.showMessage('error', 'First Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_last_name)) {
            this._commonService.showMessage('error', 'Last Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_job)) {
            this._commonService.showMessage('error', 'Job Name should not be empty!');
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
        // tslint:disable-next-line:one-line
        if (this._validationsService.isEmpty(this.field_country_code)) {
            this._commonService.showMessage('error', 'Please select the Country Code');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone Number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone number Should have only Digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone number Should have atleast 10 digits!');
            return false;
        }
        if (!this._validationsService.isEmail(this.field_email)) {
            this._commonService.showMessage('error', 'Enter valide Email Address!');
            return false;
        }
        if (this._validationsService.isMaximum(this.field_phone)) {
            this._commonService.showMessage('error', 'Phone number Should not exceed 13 digits!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_company)) {
            this._commonService.showMessage('error', 'Company Name field should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_no_of_employee)) {
            this._commonService.showMessage('error', 'No. of Employee should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.field_select_country)) {
            this._commonService.showMessage('error', 'Country should not be empty!');
            return false;
        }
        if (!this.field_agree) {
            this._commonService.showMessage('error', 'Please Accept Terms and Conditions!');
            return false;
        }
        var fieldproducttourid;
        if (!this._validationsService.isEmpty(this.producttourid)) {
            fieldproducttourid = {
                firstname: this.field_first_name,
                lastname: this.field_last_name,
                industry: this.field_job,
                email: this.field_email,
                contact: this.field_phone,
                noofemployees: this.field_no_of_employee,
                company: this.field_company,
                country: this.field_select_country,
                countrycode: this.field_country_code,
                _id: this.producttourid
            };
            console.log(fieldproducttourid);
        }
        else {
            fieldproducttourid = {
                firstname: this.field_first_name,
                lastname: this.field_last_name,
                industry: this.field_job,
                email: this.field_email,
                contact: this.field_phone,
                noofemployees: this.field_no_of_employee,
                company: this.field_company,
                country: this.field_select_country,
                countrycode: this.field_country_code,
            };
        }
        this.producttourService.addProducttour(fieldproducttourid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.field_first_name = '';
                _this.field_last_name = '';
                _this.field_job = '';
                _this.field_email = '';
                _this.field_phone = '';
                _this.field_no_of_employee = '';
                _this.field_company = '';
                _this.field_phone = '';
                _this.field_select_country = '';
                _this.field_country_code = '+91';
                _this._commonService.redirectTo('/product-tour');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ProductTourContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-tour-content',
            template: __webpack_require__(/*! ./product-tour-content.component.html */ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.html"),
            styles: [__webpack_require__(/*! ./product-tour-content.component.scss */ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_1__["ValidationsService"],
            _admin_frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_3__["ContactusService"],
            _admin_frontend_producttour_producttour_service__WEBPACK_IMPORTED_MODULE_4__["ProducttourService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductTourContentComponent);
    return ProductTourContentComponent;
}());



/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-product-tour-banner></app-product-tour-banner>\n<app-product-tour-content></app-product-tour-content>   "

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductTourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTourComponent", function() { return ProductTourComponent; });
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

var ProductTourComponent = /** @class */ (function () {
    function ProductTourComponent() {
    }
    ProductTourComponent.prototype.ngOnInit = function () {
    };
    ProductTourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-tour',
            template: __webpack_require__(/*! ./product-tour.component.html */ "./src/app/frontend/product-tour/product-tour.component.html"),
            styles: [__webpack_require__(/*! ./product-tour.component.scss */ "./src/app/frontend/product-tour/product-tour.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductTourComponent);
    return ProductTourComponent;
}());



/***/ }),

/***/ "./src/app/frontend/product-tour/product-tour.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/frontend/product-tour/product-tour.module.ts ***!
  \**************************************************************/
/*! exports provided: ProductTourModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTourModule", function() { return ProductTourModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _product_tour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-tour.component */ "./src/app/frontend/product-tour/product-tour.component.ts");
/* harmony import */ var _product_tour_banner_product_tour_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-tour-banner/product-tour-banner.component */ "./src/app/frontend/product-tour/product-tour-banner/product-tour-banner.component.ts");
/* harmony import */ var _product_tour_content_product_tour_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-tour-content/product-tour-content.component */ "./src/app/frontend/product-tour/product-tour-content/product-tour-content.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _product_tour_component__WEBPACK_IMPORTED_MODULE_5__["ProductTourComponent"] },
];
var ProductTourModule = /** @class */ (function () {
    function ProductTourModule() {
    }
    ProductTourModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _product_tour_component__WEBPACK_IMPORTED_MODULE_5__["ProductTourComponent"],
                _product_tour_banner_product_tour_banner_component__WEBPACK_IMPORTED_MODULE_6__["ProductTourBannerComponent"],
                _product_tour_content_product_tour_content_component__WEBPACK_IMPORTED_MODULE_7__["ProductTourContentComponent"]
            ]
        })
    ], ProductTourModule);
    return ProductTourModule;
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
//# sourceMappingURL=product-tour-product-tour-module.js.map