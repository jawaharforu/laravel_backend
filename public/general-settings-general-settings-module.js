(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-settings-general-settings-module"],{

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

/***/ "./src/app/admin/settings/general-settings/general-settings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/settings/general-settings/general-settings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"globalsettings()\">\n  <div class=\"form-group\">\n    <div class=\"row\">\n      <div class=\" col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <p class=\"h4 text-center py-4 admin-title\">Tolerance</p>\n            <div class=\"row\">\n              <div class=\"form-group col-md-12 col-sm-12\">\n                <label for=\"defaultFormCardNameEx\" class=\" control-label col-xl-2 col-lg-2 col-md-3\">Tolerance</label>\n                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"tolerance\" name=\"tolerance\">\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">%</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n\n      <div class=\"card\">\n        <div class=\"card-body mb-4\">\n          <p class=\"h4 text-center py-4 admin-title\">Mark Ups</p>\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label  col-md-5\">External Reference</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"externalreference\" name=\"externalreference\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label  col-md-5\">Internal Employee Reference</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control form-control col-md-10\" [(ngModel)]=\"internalemployeereference\"\n              name=\"internalemployeereference\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label  col-md-5\">Managing Director/Boards Descretion</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"managingdirectorsdescretion\" name=\"managingdirectorsdescretion\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label col-md-5\">Special Allowance</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"specialallowance\" name=\"specialallowance\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label col-md-5\">CIM</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"cim\" name=\"cim\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n\n            <label for=\"defaultFormCardNameEx\" class=\" control-label col-md-5\">No-CIM</label>\n            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"nocim\" name=\"nocim\">\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text\">%</span>\n            </div>\n          </div>\n\n        </div>\n\n\n        <div class=\"card-body mb-4\">\n          <p class=\"h4 text-center py-4 admin-title\">Controls</p>\n          <div class=\"form-group col-md-12 col-sm-12\">\n            <label for=\"defaultFormCardNameEx\" class=\" control-label col-md-5\">Third Party Independent Evaluation</label>\n            <div class=\"col-md-12 controls-settings\">\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"thirdpartyevaluation1\" name=\"thirdpartyevaluation1\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12\">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"thirdpartyevaluation2\" name=\"thirdpartyevaluation2\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n                <div class=\"col-md-4 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"thirdpartyevaluation3\" name=\"thirdpartyevaluation3\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\" form-group col-md-12 col-sm-12\">\n            <label class=\" control-label col-md-5\">Working aquantance of the evaluator</label>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label class=\"control-label\">0-5</label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"controlsworkingaquantance05\"\n                    name=\"controlsworkingaquantance05\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label class=\"control-label \">5-10</label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"controlsworkingaquantance510\"\n                    name=\"controlsworkingaquantance510\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>10></label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"controlsworkingaquantance10\"\n                    name=\"controlsworkingaquantance10\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class=\"card-body mb-4\">\n          <p class=\"h4 text-center py-4 admin-title\">Over-riders Optional</p>\n\n          <div class=\"row\">\n            <div class=\"form-group col-md-12 col-sm-12\">\n              <label for=\"defaultFormCardNameEx\" class=\" control-label  col-md-3\">Chairmans Reference</label>\n              <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"chairmansreference\" name=\"chairmansreference\">\n              <div class=\"input-group-append\">\n                <span class=\"input-group-text\">%</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-body  pt-4\">\n          <div class=\"form-group col-md-12 col-sm-12\">\n\n            <label class=\" control-label col-md-5\">Working quantitative of the evaluator</label>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>0-5</label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overworkingaquantance05\"\n                    name=\"overworkingaquantance05\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>5-10</label>\n                </div>\n                <div class=\"input-group col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overworkingaquantance510\"\n                    name=\"overworkingaquantance510\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>10></label>\n                </div>\n                <div class=\"input-group col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overworkingaquantance10\"\n                    name=\"overworkingaquantance10\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"form-group col-md-12 col-sm-12\">\n\n            <label class=\" control-label col-md-5\">Prior Relevant Work Experience</label>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>0-5</label>\n                </div>\n                <div class=\" col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overpriorrelevant05\" name=\"overpriorrelevant05\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>5-10</label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overpriorrelevant510\" name=\"overpriorrelevant510\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12 text-right\">\n                  <label>10></label>\n                </div>\n                <div class=\"col-md-6 col-sm-12 \">\n                  <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-9 col-sm-9\" [(ngModel)]=\"overpriorrelevant10\" name=\"overpriorrelevant10\">\n                  <div class=\"input-group-append\">\n                    <span class=\"input-group-text\">%</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n        <div class=\"field-button float-right\">\n          <button type=\"submit\" class=\"btn btn-submit float-right btn-save\">Submit</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/admin/settings/general-settings/general-settings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/settings/general-settings/general-settings.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.form-control {\n  display: inline-block; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important;\n  background: 400 !important; }\n\n.input-group-append {\n  display: inline-block; }\n\n.input-group-text {\n  background: none;\n  color: #14a3c7;\n  border: none; }\n\n.controls-settings .form-control {\n  width: 75%; }\n\nbutton.btn.btn-submit.btn-save {\n  background: #f38e00;\n  padding: 5px 25px;\n  font-size: 15px;\n  margin-top: 15px;\n  text-transform: capitalize;\n  box-shadow: none; }\n\n.form-control {\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/admin/settings/general-settings/general-settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/settings/general-settings/general-settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GeneralSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsComponent", function() { return GeneralSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _general_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-settings.service */ "./src/app/admin/settings/general-settings/general-settings.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralSettingsComponent = /** @class */ (function () {
    function GeneralSettingsComponent(_commonService, _validationsService, globalsettingsService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.globalsettingsService = globalsettingsService;
        this.tolerance = '';
        this.externalreference = '';
        this.internalemployeereference = '';
        this.managingdirectorsdescretion = '';
        this.specialallowance = '';
        this.cim = '';
        this.nocim = '';
        this.thirdpartyevaluation1 = '';
        this.thirdpartyevaluation2 = '';
        this.thirdpartyevaluation3 = '';
        this.controlsworkingaquantance05 = '';
        this.controlsworkingaquantance510 = '';
        this.controlsworkingaquantance10 = '';
        this.chairmansreference = '';
        this.overworkingaquantance05 = '';
        this.overworkingaquantance510 = '';
        this.overworkingaquantance10 = '';
        this.overpriorrelevant05 = '';
        this.overpriorrelevant510 = '';
        this.overpriorrelevant10 = '';
        this.globalsettingsid = '';
    }
    GeneralSettingsComponent.prototype.ngOnInit = function () {
        this.getGlobalSettingsList();
    };
    GeneralSettingsComponent.prototype.getGlobalSettingsList = function () {
        var _this = this;
        this.globalsettingsService.getGlobalsettings()
            .subscribe(function (res) {
            if (res.data.length > 0) {
                _this.globalsettingsid = res.data[0]._id;
                _this.tolerance = res.data[0].tolerance;
                _this.externalreference = res.data[0].externalreference;
                _this.internalemployeereference = res.data[0].internalemployeereference;
                _this.managingdirectorsdescretion = res.data[0].managingdirectorsdescretion;
                _this.specialallowance = res.data[0].specialallowance;
                _this.cim = res.data[0].cim;
                _this.nocim = res.data[0].nocim;
                _this.thirdpartyevaluation1 = res.data[0].thirdpartyevaluation1;
                _this.thirdpartyevaluation2 = res.data[0].thirdpartyevaluation2;
                _this.thirdpartyevaluation3 = res.data[0].thirdpartyevaluation3;
                _this.controlsworkingaquantance05 = res.data[0].controlsworkingaquantance05;
                _this.controlsworkingaquantance510 = res.data[0].controlsworkingaquantance510;
                _this.controlsworkingaquantance10 = res.data[0].controlsworkingaquantance10;
                _this.chairmansreference = res.data[0].chairmansreference;
                _this.overworkingaquantance05 = res.data[0].overworkingaquantance05;
                _this.overworkingaquantance510 = res.data[0].overworkingaquantance510;
                _this.overworkingaquantance10 = res.data[0].overworkingaquantance10;
                _this.overpriorrelevant05 = res.data[0].overpriorrelevant05;
                _this.overpriorrelevant510 = res.data[0].overpriorrelevant510;
                _this.overpriorrelevant10 = res.data[0].overpriorrelevant10;
            }
        });
    };
    GeneralSettingsComponent.prototype.globalsettings = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.tolerance)) {
            this._commonService.showMessage('error', 'Tolerance should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.tolerance)) {
            this._commonService.showMessage('error', 'Tolerance should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.tolerance)) {
            this._commonService.showMessage('error', 'Tolerance should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.externalreference)) {
            this._commonService.showMessage('error', 'External Reference should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.externalreference)) {
            this._commonService.showMessage('error', 'External Reference should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.externalreference)) {
            this._commonService.showMessage('error', 'External Reference should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.internalemployeereference)) {
            this._commonService.showMessage('error', 'Internal Employee Reference should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.internalemployeereference)) {
            this._commonService.showMessage('error', 'Internal Employee Reference should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.internalemployeereference)) {
            this._commonService.showMessage('error', 'Internal Reference should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.managingdirectorsdescretion)) {
            this._commonService.showMessage('error', 'Managing Directors Descretion not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.managingdirectorsdescretion)) {
            this._commonService.showMessage('error', 'Managing Directors Descretion should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.managingdirectorsdescretion)) {
            this._commonService.showMessage('error', 'Managing Directors Descretion should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.specialallowance)) {
            this._commonService.showMessage('error', 'Special Allowance should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.specialallowance)) {
            this._commonService.showMessage('error', 'Special Allowance should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.specialallowance)) {
            this._commonService.showMessage('error', 'Special Allowance should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.cim)) {
            this._commonService.showMessage('error', 'CIM should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.cim)) {
            this._commonService.showMessage('error', 'CIM should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.cim)) {
            this._commonService.showMessage('error', 'CIM should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.nocim)) {
            this._commonService.showMessage('error', 'NO-CIM should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.nocim)) {
            this._commonService.showMessage('error', 'NO-CIM should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.nocim)) {
            this._commonService.showMessage('error', 'NO-CIM should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.thirdpartyevaluation1)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 1 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.thirdpartyevaluation1)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 1 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.thirdpartyevaluation1)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 1 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.thirdpartyevaluation2)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 2 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.thirdpartyevaluation2)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 2 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.thirdpartyevaluation2)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 2 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.thirdpartyevaluation3)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 3 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.thirdpartyevaluation3)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 3 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.thirdpartyevaluation3)) {
            this._commonService.showMessage('error', 'Third Party Evaluation 3 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.controlsworkingaquantance05)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 0-5 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.controlsworkingaquantance05)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 0-5 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.controlsworkingaquantance05)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 0-5 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.controlsworkingaquantance510)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 5-10 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.controlsworkingaquantance510)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 5-10 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.controlsworkingaquantance510)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 5-10 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.controlsworkingaquantance10)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 10> should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.controlsworkingaquantance10)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 10> should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.controlsworkingaquantance10)) {
            this._commonService.showMessage('error', 'Controls Working acquaintance 10 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.chairmansreference)) {
            this._commonService.showMessage('error', 'Chairmans Reference should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.chairmansreference)) {
            this._commonService.showMessage('error', 'Chairmans Reference should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.chairmansreference)) {
            this._commonService.showMessage('error', 'Chairmans Reference should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overworkingaquantance05)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 0-5 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overworkingaquantance05)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 0-5 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overworkingaquantance05)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 0-5 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overworkingaquantance510)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 5-10 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overworkingaquantance510)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 5-10 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overworkingaquantance510)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 5-10 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overworkingaquantance10)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 10> should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overworkingaquantance10)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 10> should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overworkingaquantance10)) {
            this._commonService.showMessage('error', 'Over Working acquaintance 10 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overpriorrelevant05)) {
            this._commonService.showMessage('error', 'Prior Relevant 0-5 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overpriorrelevant05)) {
            this._commonService.showMessage('error', 'Prior Relevant 0-5 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overpriorrelevant05)) {
            this._commonService.showMessage('error', 'Prior Relevant 0-5 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overpriorrelevant510)) {
            this._commonService.showMessage('error', 'Prior Relevant 5-10 should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overpriorrelevant510)) {
            this._commonService.showMessage('error', 'Prior Relevant 5-10 should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overpriorrelevant510)) {
            this._commonService.showMessage('error', 'Prior Relevant 5-10 should not Exceed 100%!');
            return false;
        }
        if (this._validationsService.isEmpty(this.overpriorrelevant10)) {
            this._commonService.showMessage('error', 'Prior Relevant 10> should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.overpriorrelevant10)) {
            this._commonService.showMessage('error', 'Prior Relevant 10> should have only digits!');
            return false;
        }
        if (!this._validationsService.isPercentage(this.overpriorrelevant10)) {
            this._commonService.showMessage('error', 'Prior Relevant 10 should not Exceed 100%!');
            return false;
        }
        var fieldGlobalsettingsid = {
            tolerance: this.tolerance,
            externalreference: this.externalreference,
            internalemployeereference: this.internalemployeereference,
            managingdirectorsdescretion: this.managingdirectorsdescretion,
            specialallowance: this.specialallowance,
            cim: this.cim,
            nocim: this.nocim,
            thirdpartyevaluation1: this.thirdpartyevaluation1,
            thirdpartyevaluation2: this.thirdpartyevaluation2,
            thirdpartyevaluation3: this.thirdpartyevaluation3,
            controlsworkingaquantance05: this.controlsworkingaquantance05,
            controlsworkingaquantance510: this.controlsworkingaquantance510,
            controlsworkingaquantance10: this.controlsworkingaquantance10,
            chairmansreference: this.chairmansreference,
            overworkingaquantance05: this.overworkingaquantance05,
            overworkingaquantance510: this.overworkingaquantance510,
            overworkingaquantance10: this.overworkingaquantance10,
            overpriorrelevant05: this.overpriorrelevant05,
            overpriorrelevant510: this.overpriorrelevant510,
            overpriorrelevant10: this.overpriorrelevant10,
        };
        this.globalsettingsService.addGlobalsettings(fieldGlobalsettingsid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getGlobalSettingsList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    GeneralSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general-settings',
            template: __webpack_require__(/*! ./general-settings.component.html */ "./src/app/admin/settings/general-settings/general-settings.component.html"),
            styles: [__webpack_require__(/*! ./general-settings.component.scss */ "./src/app/admin/settings/general-settings/general-settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _general_settings_service__WEBPACK_IMPORTED_MODULE_1__["GeneralSettingsService"]])
    ], GeneralSettingsComponent);
    return GeneralSettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/general-settings/general-settings.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/settings/general-settings/general-settings.module.ts ***!
  \****************************************************************************/
/*! exports provided: GeneralSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsModule", function() { return GeneralSettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _general_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./general-settings.component */ "./src/app/admin/settings/general-settings/general-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _general_settings_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSettingsComponent"] },
];
var GeneralSettingsModule = /** @class */ (function () {
    function GeneralSettingsModule() {
    }
    GeneralSettingsModule = __decorate([
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
                _general_settings_component__WEBPACK_IMPORTED_MODULE_7__["GeneralSettingsComponent"]
            ]
        })
    ], GeneralSettingsModule);
    return GeneralSettingsModule;
}());



/***/ }),

/***/ "./src/app/admin/settings/general-settings/general-settings.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/settings/general-settings/general-settings.service.ts ***!
  \*****************************************************************************/
/*! exports provided: GeneralSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralSettingsService", function() { return GeneralSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
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




var GeneralSettingsService = /** @class */ (function () {
    function GeneralSettingsService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    GeneralSettingsService.prototype.addGlobalsettings = function (newGlobalsettings) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/globalsettings", newGlobalsettings, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    GeneralSettingsService.prototype.getGlobalsettings = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/globalsettings", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    GeneralSettingsService.prototype.deleteGlobalsettings = function (globalsettingsId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/globalsettings/" + globalsettingsId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    GeneralSettingsService.prototype.getGlobalsettingsById = function (globalsettingsId) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/globalsettings/" + globalsettingsId, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    GeneralSettingsService.prototype.getGlobalsettingsByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/globalsettings/get/list", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    GeneralSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GeneralSettingsService);
    return GeneralSettingsService;
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
//# sourceMappingURL=general-settings-general-settings-module.js.map