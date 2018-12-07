(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-information-company-information-module"],{

/***/ "./src/app/admin/settings/company-information/company-information.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/settings/company-information/company-information.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <div class=\"row\">\n        <div class=\" col-md-12 col-sm-12\">\n\n            <div class=\"card\">\n\n                <div class=\"card-body\">\n                    <form (ngSubmit)=\"companyinformationForm()\">\n\n\n\n                        <p class=\"h4 text-center py-4 admin-title\">Company Information</p>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-12 col-sm-12\">\n                                <div class=\"company-logo\">\n                                    <img [src]=\"logo\" />\n                                </div>\n                                <label for=\"\" class=\"label-logo\"> Company Logo</label>\n                                <input type=\"file\" class=\"btn file-choose \" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                                <button type=\"button\" class=\"btn btn-upload\" mdbWavesEffect (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                                    <i class=\"fa fa-cloud-upload mr-1\"></i> Upload</button>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">Company Name</label>\n                                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"companyname\" name=\"companyname\">\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">Job Title</label>\n                                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"jobtitle\" name=\"jobtitle\">\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">Industry</label>\n                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"industry\" name=\"industry\">\n                                    <option *ngFor=\"let industry of industries\" value=\"{{industry.industryname}}\">{{industry.industryname}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-6 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">No. of Employees</label>\n                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"noofemployees\" name=\"noofemployees\">\n                                    <option *ngFor=\"let employee of no_of_employees\" value=\"{{employee.employeesCount}}\">{{employee.employeesCount}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-6 col-sm-12 browser-default\">\n                                <label class=\"grey-text font-weight-light\" for=\"phonenumber\">Official Phone Number:</label>\n                                <div class=\"row\">\n                                    <div class=\"col-md-4 col-country-code\">\n                                        <select class=\" selectpicker form-control browser-default mdb-select browser-default country-code\" [(ngModel)]=\"countrycode\"\n                                            name=\"countrycode\">\n                                            <option *ngFor=\"let job of countryList\" value=\"{{job.dial_code}}\">{{job.dial_code}}</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"col-md-8\">\n                                        <input type=\"text\" class=\"waves-light form-control browser-default\" [(ngModel)]=\"companycontact\" name=\"companycontact\" id=\"phonenumber\"\n                                            maxlength=\"13\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-12 col-sm-12\">\n                                <label for=\"defaultFormCarddescEx\" class=\"grey-text font-weight-light control-label \">Company Address</label>\n                                <textarea type=\"text\" id=\"defaultFormCarddescEx\" class=\"md-textarea md-textarea-auto form-control\" mdbInputDirective [(ngModel)]=\"companyaddress\"\n                                    rows=\"5\" name=\"companyaddress\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"form-group col-md-4 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">Country</label>\n                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"country\" name=\"country\">\n                                    <option *ngFor=\"let job of countryList\" [value]=\"job.name\">{{job.name}}</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col-md-4 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">State</label>\n                                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"state\" name=\"state\">\n                            </div>\n                            <div class=\"form-group col-md-4 col-sm-12 \">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light\">City</label>\n                                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"city\" name=\"city\">\n                            </div>\n                        </div>\n\n                        <div class=\"field-button float-right\">\n                            <button type=\"submit\" class=\"btn btn-submit btn-save\">SUBMIT</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/admin/settings/company-information/company-information.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/settings/company-information/company-information.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.company-logo {\n  width: 130px;\n  float: left;\n  background: #ccc;\n  margin-right: 15px; }\n\n.company-logo img {\n  width: 100%; }\n\ninput.btn.file-choose {\n  width: 60%;\n  padding: 5px;\n  border: 1px solid #ccc;\n  box-shadow: none; }\n\nbutton.btn.btn-upload {\n  padding: 9px;\n  background: #ec9d08;\n  box-shadow: none;\n  padding-left: 0px;\n  cursor: pointer; }\n\n.label-logo {\n  width: 50%;\n  margin-top: 30px;\n  padding-left: 10px;\n  margin-bottom: 0px;\n  color: #666;\n  font-weight: 400;\n  font-size: 12px; }\n\n.btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\n  box-shadow: none; }\n\nlabel.grey-text.font-weight-light {\n  font-size: 13px;\n  color: #212529 !important;\n  font-weight: 400 !important; }\n\nbutton.btn.btn-submit.btn-save {\n  background: #f38e00;\n  padding: 5px 25px;\n  font-size: 15px;\n  margin-top: 15px;\n  text-transform: capitalize;\n  box-shadow: none; }\n\n.form-control {\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/admin/settings/company-information/company-information.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/settings/company-information/company-information.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanyInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInformationComponent", function() { return CompanyInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _company_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-information.service */ "./src/app/admin/settings/company-information/company-information.service.ts");
/* harmony import */ var _frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../frontend/contactus/contactus.service */ "./src/app/admin/frontend/contactus/contactus.service.ts");
/* harmony import */ var _company_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../company/company.service */ "./src/app/admin/company/company.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CompanyInformationComponent = /** @class */ (function () {
    function CompanyInformationComponent(_commonService, _validationsService, companyInformationService, contactusService, companyService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.companyInformationService = companyInformationService;
        this.contactusService = contactusService;
        this.companyService = companyService;
        this.countrycode = '+91';
        this.companycontact = '';
        this.companyaddress = '';
        this.country = '';
        this.state = '';
        this.city = '';
        this.logo = '';
        this.countryList = '';
        this.companyid = '';
        this.companyname = '';
        this.jobtitle = '';
        // tslint:disable-next-line:member-ordering
        this.industry = '';
        this.industries = [
            { industryname: 'Agriculture & Forestry/Wildlife' },
            { industryname: 'Business & Information' },
            { industryname: 'Construction/Utilities/Contracting' },
            { industryname: 'Education' },
            { industryname: 'Finance & Insurance' },
            { industryname: 'Food & Hospitality' },
            { industryname: 'Gaming' },
            { industryname: 'Health Services' },
            { industryname: 'Motor Vehicle' },
            { industryname: 'Natural Resources/Environmental' },
            { industryname: 'Other' },
            { industryname: 'Personal Services' },
            { industryname: 'Real Estate & Housing' },
            { industryname: 'Safety/Security & Legal' },
            { industryname: 'Transportation' }
        ];
        this.no_of_employees = [
            { employeesCount: '10-50' },
            { employeesCount: '50-100' },
            { employeesCount: '100-500' },
            { employeesCount: '500-1000' },
            { employeesCount: '1000-5000' },
            { employeesCount: '5000 above' }
        ];
        this.logo = this._commonService.serverUrl + 'sample-logo-design.jpg';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: this._commonService.uploadImage, itemAlias: 'file' });
    }
    CompanyInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCountryList();
        this.getCompanyInfo();
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (_item, response, _status, _headers) {
            var res = JSON.parse(response);
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.logo = _this._commonService.serverUrl + res.filename;
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        };
    };
    CompanyInformationComponent.prototype.getCountryList = function () {
        var _this = this;
        this.contactusService.getCountryList()
            .subscribe(function (res) {
            _this.countryList = res.data;
        });
    };
    CompanyInformationComponent.prototype.getCompanyInfo = function () {
        var _this = this;
        this.companyInformationService.getCompanyInfo()
            .subscribe(function (res) {
            _this.companyid = res.data._id;
            _this.companyname = res.data.companyname;
            _this.jobtitle = res.data.jobtitle;
            _this.industry = res.data.industry;
            _this.noofemployees = res.data.noofemployees;
            _this.countrycode = res.data.countrycode;
            _this.companycontact = res.data.companycontact;
            _this.companyaddress = res.data.companyaddress;
            _this.country = res.data.country;
            _this.state = res.data.state;
            _this.city = res.data.city;
            // tslint:disable-next-line:max-line-length
            _this.logo = (res.data.logo === '' || res.data.logo === undefined) ? _this._commonService.serverUrl + 'sample-logo-design.jpg' : _this._commonService.serverUrl + res.data.logo;
        });
    };
    CompanyInformationComponent.prototype.companyinformationForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.companyname)) {
            this._commonService.showMessage('error', 'Company Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.jobtitle)) {
            this._commonService.showMessage('error', 'Job Title should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.industry)) {
            this._commonService.showMessage('error', 'Please select Industry!');
            return false;
        }
        if (this._validationsService.isEmpty(this.noofemployees)) {
            this._commonService.showMessage('error', 'Please select Number of Employees!');
            return false;
        }
        if (this._validationsService.isEmpty(this.countrycode)) {
            this._commonService.showMessage('error', 'Please select countrycode!');
            return false;
        }
        if (this._validationsService.isEmpty(this.companycontact)) {
            this._commonService.showMessage('error', 'Phone Number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.companycontact)) {
            this._commonService.showMessage('error', 'Phone Number should have only digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.companycontact)) {
            this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
            return false;
        }
        if (this._validationsService.isMaximum(this.companycontact)) {
            this._commonService.showMessage('error', 'Phone Number should not exceed 13 digits!');
            return false;
        }
        if (this._validationsService.isEmpty(this.companyaddress)) {
            this._commonService.showMessage('error', 'Company Address should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.country)) {
            this._commonService.showMessage('error', 'Please select Country!');
            return false;
        }
        if (this._validationsService.isEmpty(this.state)) {
            this._commonService.showMessage('error', 'State should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.city)) {
            this._commonService.showMessage('error', 'City should not be empty!');
            return false;
        }
        var companyField = {
            jobtitle: this.jobtitle,
            companyname: this.companyname,
            industry: this.industry,
            noofemployees: this.noofemployees,
            companycontact: this.companycontact,
            companyaddress: this.companyaddress,
            country: this.country,
            state: this.state,
            city: this.city,
            countrycode: this.countrycode,
            status: true,
            logo: this.logo.replace(this._commonService.serverUrl, ''),
            companyid: this.companyid
        };
        this.companyService.addCompany(companyField)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    CompanyInformationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-information',
            template: __webpack_require__(/*! ./company-information.component.html */ "./src/app/admin/settings/company-information/company-information.component.html"),
            styles: [__webpack_require__(/*! ./company-information.component.scss */ "./src/app/admin/settings/company-information/company-information.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _company_information_service__WEBPACK_IMPORTED_MODULE_4__["CompanyInformationService"],
            _frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_5__["ContactusService"],
            _company_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]])
    ], CompanyInformationComponent);
    return CompanyInformationComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/company-information/company-information.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/settings/company-information/company-information.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CompanyInformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInformationModule", function() { return CompanyInformationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-information.component */ "./src/app/admin/settings/company-information/company-information.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/admin/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var router = [
    { path: '', component: _company_information_component__WEBPACK_IMPORTED_MODULE_6__["CompanyInformationComponent"] },
];
var CompanyInformationModule = /** @class */ (function () {
    function CompanyInformationModule() {
    }
    CompanyInformationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _company_information_component__WEBPACK_IMPORTED_MODULE_6__["CompanyInformationComponent"],
            ]
        })
    ], CompanyInformationModule);
    return CompanyInformationModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/company-information/company-information.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/settings/company-information/company-information.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CompanyInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInformationService", function() { return CompanyInformationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyInformationService = /** @class */ (function () {
    function CompanyInformationService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    CompanyInformationService.prototype.getCompanyInfo = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/companies/get/companyinfo", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    CompanyInformationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CompanyInformationService);
    return CompanyInformationService;
}());



/***/ })

}]);
//# sourceMappingURL=company-information-company-information-module.js.map