(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-template-email-template-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/admin/settings/email-template/email-template.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/email-template.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"row\">\n    <div class=\" col-md-12 col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <!-- Default form subscription -->\n          <form (ngSubmit)=\"emailTemplateForm()\" class=\"add-features\">\n            <p class=\"h4 text-center py-4 admin-title\">Email Template</p>\n            <p class=\"h4 text-right goto-email-template-list float-right\">\n              <a [routerLink]=\"['/admin/settings/email-template/list']\" class=\"btn btn-add-new\">View Email Templates</a>\n            </p>\n            <input type=\"hidden\" [(ngModel)]=\"emaitemplateIdid\" name=\"emaitemplateIdid\" />\n            <div class=\"float-none clearfix\">\n              <div class=\"form-group col-md-12 col-sm-12\">\n                  <div class=\"row\">\n                  <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3\">Name</label>\n                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                    </div>\n              </div>\n            </div>\n            <div class=\"form-group col-md-12 \">\n              <label for=\"defaultFormCarddesc\" class=\"grey-text font-weight-light\">Description</label>\n              <ckeditor [(ngModel)]=\"description\" name=\"description\" id=\"defaultFormCarddesc\"></ckeditor>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 \">\n                <button type=\"submit\" class=\"btn btn-submit\" mdbWavesEffect>Submit</button>\n              </div>\n            </div>\n          </form>\n          <!-- Default form subscription -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/settings/email-template/email-template.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/email-template.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4.admin-title {\n  margin-top: 20px;\n  font-size: 17px;\n  color: #555;\n  font-weight: 400;\n  margin-bottom: 15px; }\n\n.accordion .card:last-of-type {\n  background: #ecf0f9;\n  margin-bottom: 10px; }\n\n.notication-item, mdb-item-head {\n  background: #ecf0f9;\n  margin-top: 5px; }\n\nmdb-item-body {\n  background: #ecf0f9; }\n\n.accordion .card .card-body {\n  background: #ecf0f9; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%;\n  float: left; }\n\na.btn.btn-add-new {\n  background: #43b64a;\n  color: #fff;\n  border: none;\n  box-shadow: none;\n  padding: 10px; }\n\n.clearfix {\n  clear: both; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px; }\n\np.h4.text-center.py-4.admin-title a {\n  font-size: 12px;\n  color: #54afc6; }\n\n.input-group .input-group-text {\n  background-color: #e0e0e0;\n  background: none;\n  color: #14a3c7;\n  border: none; }\n\nlabel {\n  font-size: 13px; }\n\n.field-label {\n  color: #14a3c7;\n  font-size: 14px;\n  text-align: left !important; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none; }\n\n.form-control {\n  font-size: 14px;\n  padding-left: 7px !important;\n  padding-right: 7px !important; }\n"

/***/ }),

/***/ "./src/app/admin/settings/email-template/email-template.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/email-template.component.ts ***!
  \***************************************************************************/
/*! exports provided: EmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateComponent", function() { return EmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-template.service */ "./src/app/admin/settings/email-template/email-template.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailTemplateComponent = /** @class */ (function () {
    function EmailTemplateComponent(_commonService, _validationsService, emailtemplateService, activatedRoute) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.emailtemplateService = emailtemplateService;
        this.activatedRoute = activatedRoute;
    }
    EmailTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.emailtemplateid = params['emailtemplateid'];
            if (!_this._validationsService.isEmpty(_this.emailtemplateid)) {
                _this.getBlogById(_this.emailtemplateid);
            }
        });
    };
    EmailTemplateComponent.prototype.getBlogById = function (emailtemplateid) {
        var _this = this;
        this.emailtemplateService.getEmailTemplateById(emailtemplateid)
            .subscribe(function (res) {
            _this.name = res.data.name;
            _this.description = res.data.description;
            _this.emailtemplateid = res.data._id;
        });
    };
    EmailTemplateComponent.prototype.emailTemplateForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Email Template should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.description)) {
            this._commonService.showMessage('error', 'Email Template Description should not be empty!');
            return false;
        }
        var emailTemplate;
        if (!this._validationsService.isEmpty(this.emailtemplateid)) {
            emailTemplate = {
                name: this.name,
                description: this.description,
                status: this.status,
                emailtemplateid: this.emailtemplateid
            };
        }
        else {
            emailTemplate = {
                name: this.name,
                description: this.description,
                status: this.status
            };
        }
        this.emailtemplateService.addEmailTemplate(emailTemplate)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.name = '';
                _this.description = '';
                // this.status = false;
                _this._commonService.redirectTo('/admin/settings/email-template/list');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    EmailTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-template',
            template: __webpack_require__(/*! ./email-template.component.html */ "./src/app/admin/settings/email-template/email-template.component.html"),
            styles: [__webpack_require__(/*! ./email-template.component.scss */ "./src/app/admin/settings/email-template/email-template.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _email_template_service__WEBPACK_IMPORTED_MODULE_3__["EmailTemplateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmailTemplateComponent);
    return EmailTemplateComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/email-template/email-template.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/email-template.module.ts ***!
  \************************************************************************/
/*! exports provided: EmailTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateModule", function() { return EmailTemplateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _email_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-template.component */ "./src/app/admin/settings/email-template/email-template.component.ts");
/* harmony import */ var _emailtemplatelist_emailtemplatelist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emailtemplatelist/emailtemplatelist.component */ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var router = [
    { path: '', component: _email_template_component__WEBPACK_IMPORTED_MODULE_7__["EmailTemplateComponent"] },
    { path: 'list', component: _emailtemplatelist_emailtemplatelist_component__WEBPACK_IMPORTED_MODULE_8__["EmailtemplatelistComponent"] },
    { path: 'edit/:emailtemplateid', component: _email_template_component__WEBPACK_IMPORTED_MODULE_7__["EmailTemplateComponent"] }
];
var EmailTemplateModule = /** @class */ (function () {
    function EmailTemplateModule() {
    }
    EmailTemplateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__["CKEditorModule"]
            ],
            declarations: [
                _email_template_component__WEBPACK_IMPORTED_MODULE_7__["EmailTemplateComponent"],
                _emailtemplatelist_emailtemplatelist_component__WEBPACK_IMPORTED_MODULE_8__["EmailtemplatelistComponent"],
            ]
        })
    ], EmailTemplateModule);
    return EmailTemplateModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/email-template/email-template.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/email-template.service.ts ***!
  \*************************************************************************/
/*! exports provided: EmailTemplateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailTemplateService", function() { return EmailTemplateService; });
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




var EmailTemplateService = /** @class */ (function () {
    function EmailTemplateService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    EmailTemplateService.prototype.addEmailTemplate = function (newEmailTemplate) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/emailtemplates/", newEmailTemplate, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    EmailTemplateService.prototype.getEmailTemplate = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/emailtemplates/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    EmailTemplateService.prototype.deleteEmailTemplate = function (emailTemplateid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/emailtemplates/" + emailTemplateid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    EmailTemplateService.prototype.getEmailTemplateById = function (emailTemplateid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/emailtemplates/" + emailTemplateid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    EmailTemplateService.prototype.getEmailTemplateByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/emailtemplates/get/list", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    EmailTemplateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], EmailTemplateService);
    return EmailTemplateService;
}());



/***/ }),

/***/ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <p class=\"h4 text-center py-4 admin-title\">Email Template List</p>\n          <div class=\"panel-group notication-item\" id=\"accordion\" role=\"tablist\" *ngIf=\"emailTemplateList\" aria-multiselectable=\"true\">\n            <mdb-squeezebox [multiple]=\"false\" *ngFor=\"let d of emailTemplateList;let j = index\" aria-multiselectable=\"true\">\n              <mdb-item [collapsed]=\"true\">\n                <mdb-item-head class=\"email-title\">\n                  <div class=\"row\">\n                    <div class=\"col-md-9\">\n                      {{d.name}}\n                    </div>\n                    <div class=\"col-md-3 update-email-template\">\n                      <span (click)=\"editEmailTemplate(d)\" class=\"btn-edit\" mdbRippleRadius>Edit</span>/\n                      <span (click)=\"deleteEmailTemplate(d._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n                    </div>\n                  </div>\n                </mdb-item-head>\n                <mdb-item-body>\n                  <div [innerHtml]=\"d.description\"></div>\n                </mdb-item-body>\n              </mdb-item>\n            </mdb-squeezebox>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 msg-box\">\n      <p class=\"h4 text-center py-4 admin-title\">\n        <a [routerLink]=\"['/admin/settings/email-template']\" class=\"btn btn-outline-secondary btn-rounded waves-effect btn-add-new\">Add New</a>\n      </p>\n      <p class=\"h4 text-center py-4 admin-title\">Email Template List</p>\n      <table *ngIf=\"emailTemplateList\" class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th class=\"label-no\" scope=\"col\" width=\"10%\">#</th>\n            <th class=\"label-name\" scope=\"col\" width=\"70%\">Name</th>\n            <th class=\"label-action\" scope=\"col\" width=\"20%\">Action</th>\n\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let c of emailTemplateList;let i = index\">\n            <td class=\"col-no\" scope=\"row\">{{i+1}}</td>\n            <td class=\"col-name\" scope=\"row\">{{c.name}}</td>\n            <td class=\"col-action\">\n              <span (click)=\"editEmailTemplate(c)\" class=\"btn-edit\" mdbRippleRadius>Edit </span>/\n              <span (click)=\"deleteEmailTemplate(c._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4.admin-title {\n  margin-top: 20px;\n  font-size: 17px;\n  color: #555;\n  font-weight: 400;\n  margin-bottom: 15px; }\n\n.accordion .card:last-of-type {\n  background: #ecf0f9;\n  margin-bottom: 10px; }\n\n.notication-item, mdb-item-head {\n  background: #ecf0f9;\n  margin-top: 5px; }\n\nmdb-item-body {\n  background: #ecf0f9; }\n\n.accordion .card .card-body {\n  background: #ecf0f9; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 40%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px; }\n\np.h4.text-center.py-4.admin-title a {\n  font-size: 12px;\n  color: #54afc6; }\n\ninput#defaultFormCardNameEx {\n  padding: 0px;\n  border-radius: 0px; }\n\n.input-group .input-group-text {\n  background-color: #e0e0e0;\n  background: none;\n  color: #14a3c7;\n  border: none; }\n\nlabel {\n  font-size: 13px; }\n\n.field-label {\n  color: #14a3c7;\n  font-size: 14px;\n  text-align: left !important; }\n\nbutton.btn.btn-submit.btn-save {\n  background: #f38e00;\n  padding: 5px 25px;\n  font-size: 15px;\n  margin-top: 15px;\n  text-transform: capitalize;\n  box-shadow: none; }\n\n.form-control {\n  font-size: 14px;\n  padding-left: 7px !important;\n  padding-right: 7px !important; }\n\n.accordion .card .fa-angle-down {\n  margin-top: -15px; }\n\n.notication-item, mdb-item-head {\n  border-bottom: 5px solid #f6f6f6; }\n"

/***/ }),

/***/ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EmailtemplatelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailtemplatelistComponent", function() { return EmailtemplatelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-template.service */ "./src/app/admin/settings/email-template/email-template.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailtemplatelistComponent = /** @class */ (function () {
    function EmailtemplatelistComponent(activatedRoute, _commonService, _validationsService, emailtemplateService) {
        this.activatedRoute = activatedRoute;
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.emailtemplateService = emailtemplateService;
    }
    EmailtemplatelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.emaitemplateIdid = params['emailtemplateid'];
            if (!_this._validationsService.isEmpty(_this.emaitemplateIdid)) {
                _this.getEmailTemplateById(_this.emaitemplateIdid);
            }
        });
        this.getEmailTemplateList();
    };
    EmailtemplatelistComponent.prototype.getEmailTemplateList = function () {
        var _this = this;
        this.emailtemplateService.getEmailTemplate()
            .subscribe(function (res) {
            _this.emailTemplateList = res.data;
            // console.log(this.trainingHeadList);
        });
    };
    EmailtemplatelistComponent.prototype.getEmailTemplateById = function (emaitemplateIdid) {
        var _this = this;
        this.emailtemplateService.getEmailTemplateById(emaitemplateIdid)
            .subscribe(function (res) {
            _this.name = res.data.name;
            _this.description = res.data.description;
            _this.status = res.data.status;
            _this.emaitemplateIdid = res.data._id;
        });
    };
    EmailtemplatelistComponent.prototype.editEmailTemplate = function (Emailhead) {
        this._commonService.redirectTo("/admin/settings/email-template/edit/" + Emailhead._id);
        // this.emaitemplateIdid = Emailhead._id;
        // this.name = Emailhead.name;
        // this.description = Emailhead.description;
        // window.scrollTo(0, 0);
    };
    EmailtemplatelistComponent.prototype.deleteEmailTemplate = function (Emailheadid) {
        var _this = this;
        this.emailtemplateService.deleteEmailTemplate(Emailheadid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.name = '';
                _this.getEmailTemplateList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    EmailtemplatelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailtemplatelist',
            template: __webpack_require__(/*! ./emailtemplatelist.component.html */ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.html"),
            styles: [__webpack_require__(/*! ./emailtemplatelist.component.scss */ "./src/app/admin/settings/email-template/emailtemplatelist/emailtemplatelist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _email_template_service__WEBPACK_IMPORTED_MODULE_4__["EmailTemplateService"]])
    ], EmailtemplatelistComponent);
    return EmailtemplatelistComponent;
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
//# sourceMappingURL=email-template-email-template-module.js.map