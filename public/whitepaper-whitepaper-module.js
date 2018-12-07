(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["whitepaper-whitepaper-module"],{

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

/***/ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-xl-10 col-lg-11 col-md-12 col-sm-12 product-list\">\n          <!-- Card -->\n          <div class=\"card\">\n    \n      <div class=\"card-body\">\n    <p class=\"h4 text-center py-4 admin-title\">Whitepaper List</p>\n    <!--<a [routerLink]=\"['/admin/blog']\" class=\"btn btn-outline-secondary btn-rounded waves-effect\">Add New</a>-->\n      <!--Table-->\n      <table *ngIf=\"whitepaperList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n          <!--Table head-->\n          <thead>\n              <tr>\n                  <th class=\"label-no\">#</th>\n                  <th class=\"label-name\">Name</th>\n                  <th class=\"label-name\">Email</th>\n                  <th class=\"label-name\">Company</th>\n                  <th class=\"label-name\">Website</th>\n                  <th class=\"label-action\">Action</th>\n              </tr>\n          </thead>\n          <!--Table head-->\n          <!--Table body-->\n          <tbody>\n            <tr *ngFor=\"let c of whitepaperList; let i = index\">\n                <th class=\"col-no\"  scope=\"row\">{{i+1}}</th>\n                <td class=\"col-name\">{{c.name}}</td>\n                <td class=\"col-name\">{{c.email}}</td>\n                <td class=\"col-name\">{{c.company}}</td>\n                <td class=\"col-name\">{{c.website}}</td>                                 \n                <td  class=\"col-action\">\n                    <span  (click)=\"deleteWhitepaper(c._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n                </td>\n            </tr>\n          </tbody>\n          <!--Table body-->\n      </table>\n      <!--Table-->\n  </div>\n</div>\n</div></div>"

/***/ }),

/***/ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #f3eeee; }\n\n.btn-add-new {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 0px !important;\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important;\n  margin-top: -5px;\n  margin-bottom: 15px;\n  box-shadow: none; }\n\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled):active,\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.btn-add-new.dropdown-toggle {\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.col-name {\n  width: 30%;\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300; }\n\n.col-status .form-group {\n  margin: 0px; }\n\n.col-status .form-group label {\n  margin-top: 5px;\n  margin-left: 15px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:not(:checked) + label:after {\n  background-color: transparent;\n  border-color: #5a5a5a;\n  top: 0;\n  z-index: 0;\n  border: 1px solid #ccc; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 5px;\n  height: 9px;\n  border-color: transparent #666 #666 transparent;\n  margin-top: 3px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  z-index: 0; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; } }\n\ntable.dataTable[_ngcontent-c4] thead[_ngcontent-c4] th[_ngcontent-c4],\ntable.dataTable tbody th, table.dataTable tbody td {\n  border-right: 1px solid #f3eeee;\n  text-transform: capitalize; }\n\n[type=\"radio\"] + label, [type=\"checkbox\"] + label {\n  height: 13px; }\n\ntable.dataTable[_ngcontent-c4][_ngcontent-c4] thead[_ngcontent-c4][_ngcontent-c4] th[_ngcontent-c4][_ngcontent-c4] {\n  border-bottom: none; }\n\n[type=\"checkbox\"][class*=\"filled-in\"] + label:after {\n  border-radius: 2px;\n  height: 15px;\n  width: 15px; }\n\nthead {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc;\n  padding: 44px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: WhitepaperListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitepaperListComponent", function() { return WhitepaperListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _whitepaper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../whitepaper.service */ "./src/app/admin/frontend/whitepaper/whitepaper.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhitepaperListComponent = /** @class */ (function () {
    function WhitepaperListComponent(_commonService, whitepaperService) {
        this._commonService = _commonService;
        this.whitepaperService = whitepaperService;
        this.whitepaperList = '';
    }
    WhitepaperListComponent.prototype.ngOnInit = function () {
        this.getWhitepaperList();
    };
    WhitepaperListComponent.prototype.updateStatus = function (event, c) {
        var _this = this;
        var fieldWhitepaper = {
            name: c.name,
            email: c.email,
            company: c.company,
            website: c.website,
            status: event,
            whitepaperid: c._id
        };
        this.whitepaperService.addWhitepaper(fieldWhitepaper)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    WhitepaperListComponent.prototype.getWhitepaperList = function () {
        var _this = this;
        this.whitepaperService.getWhitepaper()
            .subscribe(function (res) {
            _this.whitepaperList = res.data;
        });
    };
    WhitepaperListComponent.prototype.editWhitepaper = function (Whitepaper) {
        this._commonService.redirectTo("/admin/whitepaper/edit/" + Whitepaper._id);
    };
    WhitepaperListComponent.prototype.deleteWhitepaper = function (Whitepaperid) {
        var _this = this;
        this.whitepaperService.deleteWhitepaper(Whitepaperid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getWhitepaperList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    WhitepaperListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-whitepaper-list',
            template: __webpack_require__(/*! ./whitepaper-list.component.html */ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.html"),
            styles: [__webpack_require__(/*! ./whitepaper-list.component.scss */ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _whitepaper_service__WEBPACK_IMPORTED_MODULE_1__["WhitepaperService"]])
    ], WhitepaperListComponent);
    return WhitepaperListComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/whitepaper/whitepaper.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/frontend/whitepaper/whitepaper.module.ts ***!
  \****************************************************************/
/*! exports provided: WhitepaperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitepaperModule", function() { return WhitepaperModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _whitepaper_list_whitepaper_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whitepaper-list/whitepaper-list.component */ "./src/app/admin/frontend/whitepaper/whitepaper-list/whitepaper-list.component.ts");
/* harmony import */ var _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var router = [
    { path: '', component: _whitepaper_list_whitepaper_list_component__WEBPACK_IMPORTED_MODULE_4__["WhitepaperListComponent"] },
];
var WhitepaperModule = /** @class */ (function () {
    function WhitepaperModule() {
    }
    WhitepaperModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _node_modules_angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"]
            ],
            declarations: [
                _whitepaper_list_whitepaper_list_component__WEBPACK_IMPORTED_MODULE_4__["WhitepaperListComponent"]
            ]
        })
    ], WhitepaperModule);
    return WhitepaperModule;
}());



/***/ }),

/***/ "./src/app/admin/frontend/whitepaper/whitepaper.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/frontend/whitepaper/whitepaper.service.ts ***!
  \*****************************************************************/
/*! exports provided: WhitepaperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitepaperService", function() { return WhitepaperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WhitepaperService = /** @class */ (function () {
    function WhitepaperService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    WhitepaperService.prototype.addWhitepaper = function (newWhitepaper) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/whitepapers/", newWhitepaper, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    WhitepaperService.prototype.getWhitepaper = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/whitepapers/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    WhitepaperService.prototype.deleteWhitepaper = function (whitepaperId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/whitepapers/" + whitepaperId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    WhitepaperService.prototype.getWhitepaperById = function (whitepaperId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/whitepapers/" + whitepaperId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    WhitepaperService.prototype.getWhitepaperByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/whitepapers/get/list", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    WhitepaperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], WhitepaperService);
    return WhitepaperService;
}());



/***/ })

}]);
//# sourceMappingURL=whitepaper-whitepaper-module.js.map