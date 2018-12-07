(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hrindex-hrindex-module"],{

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

/***/ "./src/app/admin/hrindex/hrindex.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/hrindex/hrindex.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n        <div class=\"card-body\">\n                <p class=\"h4 text-center py-4 admin-title\"> HR Index List</p>\n\n<div class=\"row justify-content-md-center \">\n  <div class=\"col-md-12  product-list scale-list\">\n    <!-- Card -->  \n\n\n  <table *ngIf=\"hrindexList\" datatable class=\"table table-hover table-responsive-md table-fixed hr-list\">\n      <!--Table head-->\n      <thead>\n          <tr>\n              <th class=\"label-no\">#</th>\n              <th class=\"label-name\">Name</th>\n              <th class=\"label-name\">Email</th>\n              <th class=\"label-name\">Phone Number</th>\n              <th class=\"label-name\">Designation</th>\n              <th class=\"label-name\">Company Name</th>\n              <th class=\"label-name\">Industry</th>\n              <th class=\"label-action\">Action</th>\n          </tr>\n      </thead>\n      <!--Table head-->\n      <!--Table body-->\n      <tbody>\n        <tr *ngFor=\"let c of hrindexList; let i = index\">\n            <th class=\"col-no\" scope=\"row\">{{i+1}}</th>\n            <td class=\"col-name\">{{c.name}}</td>\n            <td class=\"col-name\">{{c.email}}</td>\n            <td class=\"col-name\">{{c.mobile}}</td>\n            <td class=\"col-name\">{{c.designation}}</td> \n            <td class=\"col-name\">{{c.companyname}}</td>\n            <td class=\"col-name\">{{c.industry}}</td>\n            <!-- <td class=\"col-name\">{{c.staffing}}</td>\n            <td class=\"col-name\">{{c.traininganddevelopment}}</td>\n            <td class=\"col-name\">{{c.performancesystems}}</td>\n            <td class=\"col-name\">{{c.safetyandhealth}}</td>\n            <td class=\"col-name\">{{c.labourrelations}}</td>\n            <td class=\"col-name\">{{c.internalcommunication}}</td>                                \n            <td class=\"col-name\">{{c.diversity}}</td> -->\n            <td class=\"col-action\">\n                <span  (click)=\"deleteHrIndex(c._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n            </td>\n        </tr>\n      </tbody>\n      <!--Table body-->\n  </table>\n  <!--Table-->\n</div>\n</div>\n</div></div>"

/***/ }),

/***/ "./src/app/admin/hrindex/hrindex.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/hrindex/hrindex.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f4f3f9; }\n\n.admin-title-header {\n  margin-bottom: 30px;\n  font-size: 16px;\n  font-weight: 400; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 0px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%;\n  margin-bottom: 25px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  padding: 16px 10px;\n  background: #5ebd71 !important;\n  box-shadow: none;\n  font-size: 10px;\n  margin: 0px; }\n\n.questionwrapper {\n  background: #dedddd;\n  padding: 5px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-action {\n  line-height: 30px; }\n\n.dataTables_wrapper {\n  position: relative;\n  clear: both;\n  zoom: 1;\n  background: #fff; }\n\n.label-name, .label-no, .label-Scale, .label-action, .label-name {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border-right: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important;\n  border-bottom: none; }\n\n.label-action {\n  border: none; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #dbe2e4; }\n\nspan.btn-edit, span.btn-delete, span.btn-level {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n.form-control {\n  font-size: 15px; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n  float: left;\n  font-size: 12px;\n  padding: 0px; }\n\n.btn_add {\n  color: inherit;\n  text-decoration: none;\n  width: 25px;\n  height: 25px;\n  float: right !important;\n  margin: 0px;\n  box-shadow: none;\n  background: #54afc6;\n  border-radius: 50%;\n  font-size: 15px;\n  margin-top: 5px; }\n\n.btn_add .fa {\n  margin-left: 8px;\n  font-size: 12px;\n  margin-top: 7px;\n  color: #fff; }\n\n.btn_additem {\n  padding: 9px 20px;\n  background: #f38e00 !important;\n  box-shadow: none;\n  font-size: 13px;\n  float: right; }\n\n.modal-dialog {\n  margin-top: 120px; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header {\n  background: transparent;\n  box-shadow: none; }\n\nbutton.close {\n  background: #666;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  padding: 12px;\n  margin: -1rem -1rem -1rem auto;\n  font-weight: normal;\n  font-size: 20px; }\n\nbutton.close .white-text {\n  margin-left: -5px; }\n\n.modal-dialog.modal-notify .heading {\n  color: #fff;\n  background: #666;\n  margin-left: -16px;\n  margin-top: -16px;\n  width: 30%; }\n\na.btn.btn-green-new.float-right {\n  background: #43b64a;\n  color: #fff;\n  border: none;\n  box-shadow: none; }\n\n.clear-fix {\n  clear: both; }\n"

/***/ }),

/***/ "./src/app/admin/hrindex/hrindex.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/hrindex/hrindex.component.ts ***!
  \****************************************************/
/*! exports provided: HrindexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrindexComponent", function() { return HrindexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _hrindex_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hrindex.service */ "./src/app/admin/hrindex/hrindex.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HrindexComponent = /** @class */ (function () {
    function HrindexComponent(_commonService, hrindexService) {
        this._commonService = _commonService;
        this.hrindexService = hrindexService;
        this.hrindexList = '';
    }
    HrindexComponent.prototype.ngOnInit = function () {
        this.getHrIndexList();
    };
    HrindexComponent.prototype.updateStatus = function (event, c) {
        var _this = this;
        var fieldContactus = {
            name: c.name,
            email: c.email,
            mobile: c.mobile,
            designation: c.designation,
            companyname: c.companyname,
            industry: c.industry,
            staffing: c.staffing,
            traininganddevelopment: c.traininganddevelopment,
            performancesystems: c.performancesystems,
            safetyandhealth: c.safetyandhealth,
            labourrelations: c.labourrelations,
            internalcommunication: c.internalcommunication,
            diversity: c.diversity,
            status: event,
            contactusid: c._id
        };
        this.hrindexService.addHrIndex(fieldContactus)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
            }
            else {
                // this._commonService.showMessage('error', res.msg);
            }
        });
    };
    HrindexComponent.prototype.getHrIndexList = function () {
        var _this = this;
        this.hrindexService.getHrIndex()
            .subscribe(function (res) {
            _this.hrindexList = res.data;
            console.log(_this.hrindexList);
        });
    };
    HrindexComponent.prototype.editHrIndex = function (Hrindex) {
        this._commonService.redirectTo("/admin/hrindex/edit/" + Hrindex._id);
    };
    HrindexComponent.prototype.deleteHrIndex = function (Hrindexid) {
        var _this = this;
        this.hrindexService.deleteHrIndex(Hrindexid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getHrIndexList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    HrindexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hrindex',
            template: __webpack_require__(/*! ./hrindex.component.html */ "./src/app/admin/hrindex/hrindex.component.html"),
            styles: [__webpack_require__(/*! ./hrindex.component.scss */ "./src/app/admin/hrindex/hrindex.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _hrindex_service__WEBPACK_IMPORTED_MODULE_2__["HrindexService"]])
    ], HrindexComponent);
    return HrindexComponent;
}());



/***/ }),

/***/ "./src/app/admin/hrindex/hrindex.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/hrindex/hrindex.module.ts ***!
  \*************************************************/
/*! exports provided: HrindexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrindexModule", function() { return HrindexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _hrindex_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hrindex.component */ "./src/app/admin/hrindex/hrindex.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var router = [
    { path: '', component: _hrindex_component__WEBPACK_IMPORTED_MODULE_5__["HrindexComponent"] },
];
var HrindexModule = /** @class */ (function () {
    function HrindexModule() {
    }
    HrindexModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"]
            ],
            declarations: [_hrindex_component__WEBPACK_IMPORTED_MODULE_5__["HrindexComponent"]]
        })
    ], HrindexModule);
    return HrindexModule;
}());



/***/ }),

/***/ "./src/app/admin/hrindex/hrindex.service.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/hrindex/hrindex.service.ts ***!
  \**************************************************/
/*! exports provided: HrindexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrindexService", function() { return HrindexService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
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




var HrindexService = /** @class */ (function () {
    function HrindexService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = "";
    }
    HrindexService.prototype.addHrIndex = function (newHrindex) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/api/hrindexform", newHrindex, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HrindexService.prototype.getHrIndex = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/hrindexs", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HrindexService.prototype.deleteHrIndex = function (hrindexId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/hrindexs/" + hrindexId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HrindexService.prototype.getHrIndexById = function (hrindexId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/hrindexs/" + hrindexId, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HrindexService.prototype.getHrIndexByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/hrindexs/get/list", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    HrindexService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HrindexService);
    return HrindexService;
}());



/***/ })

}]);
//# sourceMappingURL=hrindex-hrindex-module.js.map