(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approver-approver-module"],{

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

/***/ "./src/app/admin/settings/approver/approver.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/settings/approver/approver.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col-md-12 col-sm-12\">\n        <div class=\"card\">\n\n          <!-- Card body -->\n          <div class=\"card-body\">\n\n              <!-- Default form subscription -->\n              <form (ngSubmit)=\"approverForm()\">\n                <p class=\"h4 text-center py-4 admin-title\">Enter appraisal approver detail</p>\n                  <input type=\"hidden\" [(ngModel)]=\"approverid\" name=\"approverid\">\n                  <!-- Default input name -->\n                  <div class=\"row mb-4 no-padding\">\n                  <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3 label-Department\">Name</label>\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                </div>\n                <div class=\"row mb-4 no-padding\">\n                <!-- Default input email -->\n                  <label for=\"defaultFormCardEmailEx\" class=\"grey-text font-weight-light control-label col-md-3 label-Department\">Email</label>\n                  <input type=\"email\" id=\"defaultFormCardEmailEx\" class=\"form-control col-md-10\" [(ngModel)]=\"email\" name=\"email\">\n                    </div>\n                    <div class=\"row mb-4 no-padding\">\n                  <label for=\"defaultFormCardDesiEx\" class=\"grey-text font-weight-light control-label col-md-3 label-Department\">Designation</label>\n                  <select class=\"browser-default form-control col-md-10\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"designation\" name=\"designation\">\n                      <option value=\"MD\">MD</option>\n                      <option value=\"Board\">Board</option>\n                  </select>\n                    </div>\n                 \n\n                  <div class=\"row justify-content-center text-center\">\n                          <!--<button class=\"btn btn-outline-purple px-3 btn-submit\" type=\"button\">Skip </button>-->\n                          <button class=\"btn btn-outline-purple px-3 btn-submit\" type=\"submit\">Continue </button>\n                  </div>\n              </form>\n              <!-- Default form subscription -->\n\n          </div>\n          <!-- Card body -->\n\n      </div>\n      <!-- Card -->\n    </div>\n</div>\n<div class=\"justify-content-md-center mt-3 mb-5 product-list scale-list\">\n\n    <!--Table-->\n    <table class=\"table table-bordered table-striped\">\n\n      <!--Table head-->\n      <thead class=\"mdb-color darken-3\">\n          <tr class=\"text-white\">\n              <th lass=\"label-no\">#</th>\n              <th  class=\"label-name\">Name</th>\n              <th  class=\"label-name\">Email</th>\n              <th  class=\"label-name\">Designation</th>\n              <th  class=\"label-action\">Action</th>\n          </tr>\n      </thead>\n      <!--Table head-->\n\n      <!--Table body-->\n      <tbody>\n          <tr *ngFor=\"let a of approverList; let i = index\">\n              <th col-no scope=\"row\">{{ i + 1 }}</th>\n              <td class=\"col-name\">{{ a.name }}</td>\n              <td class=\"col-name\">{{ a.email }}</td>\n              <td class=\"col-name\">{{ a.designation }}</td>\n              <td class=\"col-action\">\n                <span (click)=\"editApprover(a)\" class=\" btn-edit\" >Edit </span>/\n                <span (click)=\"deleteApprover(a._id)\" class=\" btn-delete\">Delete </span>\n                </td>\n          </tr>\n      </tbody>\n      <!--Table body-->\n    </table>\n    <!--Table-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/admin/settings/approver/approver.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/settings/approver/approver.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  border: none;\n  margin-left: -20px;\n  width: 35%; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.add-faqCategory label {\n  font-size: 13px;\n  color: #000 !important;\n  line-height: 28px;\n  padding: 0px; }\n\n.no-padding {\n  margin: 0px !important;\n  margin-bottom: 15px !important; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.label-Department {\n  padding: 0px;\n  line-height: 30px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.table th, .table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border: 1px solid #dee2e6; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer;\n  line-height: 30px; }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; }\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/admin/settings/approver/approver.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/settings/approver/approver.component.ts ***!
  \***************************************************************/
/*! exports provided: ApproverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverComponent", function() { return ApproverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _approver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approver.service */ "./src/app/admin/settings/approver/approver.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApproverComponent = /** @class */ (function () {
    function ApproverComponent(_commonService, _validationsService, approverService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.approverService = approverService;
        this.isLoading = true;
        this.designation = 'MD';
    }
    ApproverComponent.prototype.ngOnInit = function () {
        this.getApproverList();
    };
    ApproverComponent.prototype.getApproverList = function () {
        var _this = this;
        this.approverService.getApprover()
            .subscribe(function (res) {
            _this.approverList = res.data;
        });
    };
    ApproverComponent.prototype.approverForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Name field should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.email)) {
            this._commonService.showMessage('error', 'Email field should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.email)) {
            this._commonService.showMessage('error', 'Invalied Email!');
            return false;
        }
        var newApprover;
        if (!this._validationsService.isEmpty(this.approverid)) {
            newApprover = {
                name: this.name,
                email: this.email,
                designation: this.designation,
                approverid: this.approverid
            };
        }
        else {
            newApprover = {
                name: this.name,
                email: this.email,
                designation: this.designation
            };
        }
        this.approverService.addApprover(newApprover)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                // this._commonService.redirectTo('/admin/jd/');
                _this.approverid = '';
                _this.name = '';
                _this.email = '';
                _this.designation = '';
                _this.getApproverList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ApproverComponent.prototype.editApprover = function (a) {
        this.approverid = a._id;
        this.name = a.name;
        this.email = a.email;
        this.designation = a.designation;
        window.scrollTo(0, 0);
    };
    ApproverComponent.prototype.deleteApprover = function (approverid) {
        var _this = this;
        this.approverService.deleteApprover(approverid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getApproverList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ApproverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approver',
            template: __webpack_require__(/*! ./approver.component.html */ "./src/app/admin/settings/approver/approver.component.html"),
            styles: [__webpack_require__(/*! ./approver.component.scss */ "./src/app/admin/settings/approver/approver.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _approver_service__WEBPACK_IMPORTED_MODULE_3__["ApproverService"]])
    ], ApproverComponent);
    return ApproverComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/approver/approver.module.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/settings/approver/approver.module.ts ***!
  \************************************************************/
/*! exports provided: ApproverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverModule", function() { return ApproverModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _approver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approver.component */ "./src/app/admin/settings/approver/approver.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _approver_component__WEBPACK_IMPORTED_MODULE_7__["ApproverComponent"] }
];
var ApproverModule = /** @class */ (function () {
    function ApproverModule() {
    }
    ApproverModule = __decorate([
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
                _approver_component__WEBPACK_IMPORTED_MODULE_7__["ApproverComponent"]
            ]
        })
    ], ApproverModule);
    return ApproverModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/approver/approver.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/settings/approver/approver.service.ts ***!
  \*************************************************************/
/*! exports provided: ApproverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproverService", function() { return ApproverService; });
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




var ApproverService = /** @class */ (function () {
    function ApproverService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    ApproverService.prototype.addApprover = function (newApprover) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/approvers/", newApprover, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApproverService.prototype.getApprover = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/approvers/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApproverService.prototype.deleteApprover = function (approverid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/approvers/" + approverid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApproverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApproverService);
    return ApproverService;
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
//# sourceMappingURL=approver-approver-module.js.map