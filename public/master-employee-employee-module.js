(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-employee-employee-module"],{

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

/***/ "./src/app/admin/master/employee/employee-list/employee-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/master/employee/employee-list/employee-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12 product-list\">\n        <!-- Card -->\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p class=\"h4 text-center py-4 admin-title\">Employee List</p>\n                <!-- <p class=\"h4 text-center py-4 admin-title\"><a [routerLink]=\"['/admin/employee']\" class=\"btn btn-outline-secondary btn-rounded  btn-add-new\">Add New</a></p> -->\n                <!--Table-->\n                <table *ngIf=\"employeeList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th class=\"label-no\">#</th>\n                            <th class=\"label-no\">Employee No.</th>\n                            <th class=\"label-name\">Name</th>\n                            <th class=\"label-name\">Designation</th>\n                            <th class=\"label-name\">Email</th>\n                            <th class=\"label-jd\">Status</th>\n                            <th class=\"label-action\">Action</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let c of employeeList; let i = index\">\n                            <th class=\"col-no\" scope=\"row\">{{i+1}}</th>\n                            <td class=\"col-name\">{{c.employeenum}}</td>\n                            <td class=\"col-name\">{{c.employeename}}</td>\n                            <td class=\"col-name\">{{c.designation}}</td>\n                            <td class=\"col-name\">{{c.email}}</td>\n                            <td class=\"col-status\">\n                                <div class=\"form-group\">\n                                    <input type=\"checkbox\" class=\"filled-in\" id=\"checkbox{{c._id}}\" [checked]=\"c.status\" (change)=\"updateStatus($event.target.checked,c)\">\n                                    <label for=\"checkbox{{c._id}}\"></label>\n                                </div>\n                            </td>\n                            <td class=\"col-action\">\n                                <span (click)=\"editEmployee(c)\" class=\"btn-edit\" mdbRippleRadius>Edit </span>/\n                                <span (click)=\"deleteEmployee(c._id)\" class=\"btn-delete\" mdbRippleRadius>Delete </span>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n\n                </table>\n                <!--Table-->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/master/employee/employee-list/employee-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/master/employee/employee-list/employee-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 20px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 35%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #f3eeee; }\n\nthead {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\n.btn-add-new {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 0px !important;\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important;\n  margin-top: -5px;\n  margin-bottom: 15px;\n  box-shadow: none; }\n\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled):active,\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.btn-add-new.dropdown-toggle {\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.col-name {\n  width: 30%;\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.label-name, .label-no, .label-status, .label-action, .label-jd {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300; }\n\n.col-status .form-group {\n  margin: 0px; }\n\n.col-status .form-group label {\n  margin-top: 5px;\n  margin-left: 15px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:not(:checked) + label:after {\n  background-color: transparent;\n  border-color: #5a5a5a;\n  top: 0;\n  z-index: 0;\n  border: 1px solid #ccc; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 5px;\n  height: 9px;\n  border-color: transparent #666 #666 transparent;\n  margin-top: 3px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  z-index: 0; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; } }\n\ntable.dataTable[_ngcontent-c4] thead[_ngcontent-c4] th[_ngcontent-c4],\ntable.dataTable tbody th, table.dataTable tbody td {\n  border-right: 1px solid #f3eeee;\n  text-transform: capitalize; }\n\n[type=\"radio\"] + label, [type=\"checkbox\"] + label {\n  height: 13px; }\n\ntable.dataTable[_ngcontent-c4][_ngcontent-c4] thead[_ngcontent-c4][_ngcontent-c4] th[_ngcontent-c4][_ngcontent-c4] {\n  border-bottom: none; }\n\n[type=\"checkbox\"][class*=\"filled-in\"] + label:after {\n  border-radius: 2px;\n  height: 15px;\n  width: 15px; }\n"

/***/ }),

/***/ "./src/app/admin/master/employee/employee-list/employee-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/master/employee/employee-list/employee-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/admin/master/employee/employee.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_commonService, employeeService) {
        this._commonService = _commonService;
        this.employeeService = employeeService;
        this.employeeList = '';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmployeeList();
    };
    EmployeeListComponent.prototype.getEmployeeList = function () {
        var _this = this;
        this.employeeService.getEmployee()
            .subscribe(function (res) {
            _this.employeeList = res.data;
        });
    };
    EmployeeListComponent.prototype.editEmployee = function (employee) {
        this._commonService.redirectTo("/admin/employee/edit/" + employee._id);
    };
    EmployeeListComponent.prototype.deleteEmployee = function (employeeid) {
        var _this = this;
        this.employeeService.deleteEmployee(employeeid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getEmployeeList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    EmployeeListComponent.prototype.updateStatus = function (event, c) {
        var _this = this;
        var fieldEmployee = {
            employeenum: c.employeenum,
            employeename: c.employeename,
            employeetype: c.employeetype,
            designation: c.designation,
            email: c.email,
            countrycode: c.countrycode,
            mobile: c.mobile,
            address: c.address,
            status: event,
            organogramid: c.organogramid,
            employeeid: c._id
        };
        this.employeeService.addEmployee(fieldEmployee)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    EmployeeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__(/*! ./employee-list.component.html */ "./src/app/admin/master/employee/employee-list/employee-list.component.html"),
            styles: [__webpack_require__(/*! ./employee-list.component.scss */ "./src/app/admin/master/employee/employee-list/employee-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/employee/employee.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/master/employee/employee.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n      <!-- Card -->\n      <div class=\"card\">\n          <!-- Card body -->\n          <div class=\"card-body\">\n<form (ngSubmit)=\"employeeForm()\" class=\"add-employee\">\n  <input type=\"hidden\" [(ngModel)]=\"employeeid\" name=\"employeeid\" />\n    <p class=\"h4 text-center py-4 admin-title\"> Employee</p>\n\t\n\t<div class=\"form-group employees-type\">\n        <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1\" name=\"type\" value=\"MD\" [(ngModel)]=\"type\">\n        <label class=\"form-check-label\" for=\"materialGroupExample1\">MD</label>\n        <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample2\" name=\"type\" value=\"others\" [(ngModel)]=\"type\">\n        <label class=\"form-check-label\" for=\"materialGroupExample2\">Others</label>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"form-group col-md-12 col-sm-12 \">\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1admin\" name=\"employeetype\" value=\"admin\" [(ngModel)]=\"employeetype\">\n            <label class=\"form-check-label\" for=\"materialGroupExample1admin\">Admin</label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1commonreciption\" name=\"employeetype\" value=\"commonreciption\" [(ngModel)]=\"employeetype\">\n            <label class=\"form-check-label\" for=\"materialGroupExample1commonreciption\">Common reciption</label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1secretary\" name=\"employeetype\" value=\"secretary\" [(ngModel)]=\"employeetype\">\n            <label class=\"form-check-label\" for=\"materialGroupExample1secretary\">Department/Secretary</label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1employeetype\" name=\"employeetype\" value=\"hr\" [(ngModel)]=\"employeetype\">\n            <label class=\"form-check-label\" for=\"materialGroupExample1employeetype\">HR</label>\n          </div>\n          <div class=\"form-check\">\n            <input type=\"radio\" class=\"form-check-input\" id=\"materialGroupExample1others\" name=\"employeetype\" checked value=\"others\" [(ngModel)]=\"employeetype\">\n            <label class=\"form-check-label\" for=\"materialGroupExample1others\">Others</label>\n          </div>\n        </div>\n      </div>\n\n <div class=\"row\">  \n  <div class=\"form-group col-md-6 col-sm-12\">\n      <label for=\"defaultFormCardNameExorg\" class=\"grey-text font-weight-light control-label\">Head Name</label>\n      <select class=\"browser-default form-control \" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"organogramid\" name=\"organogramid\">\n        <option value=\"\" disabled>--Select Head Name--</option>\n        <option *ngFor=\"let o of organogramList\" [value]=\"o._id\">{{ o.name }} - {{ o.departmentid.name }} - {{ o.subdepartmentid.name }}</option>\n      </select>\n    </div>\n\t\n\t\n  <div class=\"form-group col-md-6 col-sm-12\">\n    <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label\">Employee No.</label>\n    <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"employeenum\" name=\"employeenum\">\n  </div>\n  \n  \n  <div class=\"form-group col-md-6 col-sm-12 \">\n      <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label\">Name</label>\n      <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"employeename\" name=\"employeename\">\n  </div>\n  <div class=\"form-group col-md-6 col-sm-12 \">\n    <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label\">Designation</label>\n    <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"designation\" name=\"designation\">\n  </div>\n  <div class=\"form-group col-md-6 col-sm-12 \">\n      <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label\">Email</label>\n      <input type=\"email\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n  </div>\n\n  <div class=\"form-group col-md-6 col-sm-12 browser-default\">\n      <label class=\"grey-text font-weight-light control-label\" for=\"phonenumber\">Phone Number:</label>\n      <div class=\"row\">\n          <div class=\"col-md-4 col-country-code\">\n              <select class=\" selectpicker form-control browser-default mdb-select browser-default country-code\" [(ngModel)]=\"countrycode\" name=\"countrycode\">\n                  <option *ngFor=\"let job of countryList\" value=\"{{job.dial_code}}\">{{job.dial_code}}</option>\n              </select>\n          </div>\n          <div class=\"col-md-8\">\n              <input\n                  type=\"text\"\n                  class=\"waves-light form-control browser-default\"\n                  [(ngModel)]=\"mobile\"\n                  name=\"mobile\"\n                  id=\"phonenumber\"\n                  maxlength=\"13\"\n              >\n          </div>\n      </div>\n  </div>\n  </div>\n  \n<!--  <div class=\"row\">\n      <div class=\"form-group col-md-12 col-sm-12\">\n          <label for=\"defaultFormCarddescEx\" class=\"grey-text font-weight-light control-label\">Address</label>\n          <textarea type=\"text\" id=\"defaultFormCarddescEx\"  class=\"md-textarea md-textarea-auto form-control\" mdbInputDirective [(ngModel)]=\"address\" rows=\"5\" name=\"address\"></textarea>\n      </div>\n  </div>-->\n \n  <div  class=\"col-md-12 field-button\">\n      <button type=\"submit\" class=\"btn btn-warning waves-light btn-submit\" mdbWavesEffect>submit</button>\n  </div>\n</form>\n</div></div></div></div>\n"

/***/ }),

/***/ "./src/app/admin/master/employee/employee.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/master/employee/employee.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.add-employee label {\n  font-size: 13px;\n  color: #000 !important;\n  font-weight: 400 !important; }\n\n.employees-type label {\n  font-size: 13px;\n  color: #000 !important;\n  font-weight: 400 !important;\n  width: 100px; }\n\n.breadcrumb a, .breadcrumb-item.active {\n  font-size: 12px;\n  color: #fff; }\n\n.form-group {\n  margin-bottom: .5rem; }\n\n.form-check {\n  padding: 0px; }\n\n.addproduct .form-check label {\n  margin-right: 20px; }\n\n.addproduct .form-control {\n  font-size: 15px; }\n\n.addproduct .switch {\n  margin-top: 30px;\n  margin-left: 15px; }\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #54afc6;\n  border-radius: 0.25rem; }\n\n[type=\"radio\"]:checked + label:after, .switch label input[type=checkbox]:checked + .lever:after {\n  border-color: #54afc6;\n  background-color: #54afc6; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #a6dbe8; }\n\n.btn-add-feild {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important;\n  width: 20px;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 5px; }\n\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled):active,\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-add-feild.dropdown-toggle {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important; }\n\n.btn-add-feild .fa {\n  font-size: 25px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-warning:not([disabled]):not(.disabled):active,\n.btn-warning:not([disabled]):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  border: none !important;\n  box-shadow: none;\n  float: right;\n  margin: 0px auto;\n  display: block;\n  margin-top: 10px;\n  margin-right: -15px; }\n\n.btn-primary.btn-submit:not([disabled]):not(.disabled):active,\n.btn-primary.btn-submit:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-submit.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  margin-top: 20px;\n  box-shadow: none; }\n\n[type=\"radio\"]:checked + label:before {\n  display: inline-block;\n  content: \"\";\n  z-index: 999;\n  width: 12px;\n  height: 12px;\n  border: 2px solid #fff;\n  margin-top: 6px;\n  margin-left: 6px; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border-color: #54afc6; }\n\n.form-control {\n  display: inline-block; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.feild-features {\n  max-width: 300px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.feild-button {\n  max-width: 250px; }\n\n.form-check {\n  float: left;\n  margin-right: 15px; }\n\n.btn-add-new {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 0px !important;\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important;\n  margin-top: -5px;\n  margin-bottom: 15px;\n  box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/admin/master/employee/employee.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/master/employee/employee.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _organogram_organogram_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organogram/organogram.service */ "./src/app/admin/master/organogram/organogram.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee.service */ "./src/app/admin/master/employee/employee.service.ts");
/* harmony import */ var _frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../frontend/contactus/contactus.service */ "./src/app/admin/frontend/contactus/contactus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(activatedRoute, _commonService, _validationsService, organogramService, contactusService, employeeService) {
        this.activatedRoute = activatedRoute;
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.organogramService = organogramService;
        this.contactusService = contactusService;
        this.employeeService = employeeService;
        this.organogramList = '';
        this.type = 'others';
        this.organogramid = '';
        this.employeenum = '';
        this.employeename = '';
        this.designation = '';
        this.email = '';
        this.countrycode = '+91';
        this.mobile = '';
        // public address: String = '';
        this.employeetype = 'others';
        this.employeeid = '';
        this.countryList = '';
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.employeeid = params['employeeid'];
            if (!_this._validationsService.isEmpty(_this.employeeid)) {
                _this.getEmployeeById(_this.employeeid);
            }
        });
        this.getOrganogramFullList();
        this.getCountryList();
    };
    EmployeeComponent.prototype.getCountryList = function () {
        var _this = this;
        this.contactusService.getCountryList()
            .subscribe(function (res) {
            _this.countryList = res.data;
        });
    };
    EmployeeComponent.prototype.getEmployeeById = function (employeeid) {
        var _this = this;
        this.employeeService.getEmployeeById(employeeid)
            .subscribe(function (res) {
            _this.employeenum = res.data.employeenum;
            _this.employeename = res.data.employeename;
            _this.employeetype = res.data.employeetype;
            _this.designation = res.data.designation;
            _this.email = res.data.email;
            _this.countrycode = res.data.countrycode;
            _this.mobile = res.data.mobile;
            //this.address = res.data.address;
            _this.organogramid = res.data.organogramid;
        });
    };
    EmployeeComponent.prototype.getOrganogramFullList = function () {
        var _this = this;
        this.organogramService.getOrganogramFullList()
            .subscribe(function (res) {
            _this.organogramList = res.data;
        });
    };
    EmployeeComponent.prototype.employeeForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.organogramid)) {
            this._commonService.showMessage('error', 'Please select Head Name!');
            return false;
        }
        if (this._validationsService.isEmpty(this.employeenum)) {
            this._commonService.showMessage('error', 'Employee No. should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.employeename)) {
            this._commonService.showMessage('error', 'Employeename should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.designation)) {
            this._commonService.showMessage('error', 'Designation should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.email)) {
            this._commonService.showMessage('error', 'Email should not be empty!');
            return false;
        }
        if (!this._validationsService.isEmail(this.email)) {
            this._commonService.showMessage('error', 'Enter Valid Email Address!');
            return false;
        }
        if (this._validationsService.isEmpty(this.countrycode)) {
            this._commonService.showMessage('error', 'countrycode should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.mobile)) {
            this._commonService.showMessage('error', 'Phone number should not be empty!');
            return false;
        }
        if (this._validationsService.isDigit(this.mobile)) {
            this._commonService.showMessage('error', 'Phone number should have only digits!');
            return false;
        }
        if (this._validationsService.isMinimum(this.mobile)) {
            this._commonService.showMessage('error', 'Phone number should have atleast 10 digits!');
            return false;
        }
        if (this._validationsService.isMaximum(this.mobile)) {
            this._commonService.showMessage('error', 'Phone number should not exceed 13 digits!');
            return false;
        }
        /*  if (this._validationsService.isEmpty(this.address)) {
            this._commonService.showMessage('error', 'address should not be empty!');
            return false;
          }*/
        var fieldEmployee;
        if (!this._validationsService.isEmpty(this.employeeid)) {
            fieldEmployee = {
                employeenum: this.employeenum,
                employeename: this.employeename,
                employeetype: this.employeetype,
                designation: this.designation,
                email: this.email,
                countrycode: this.countrycode,
                mobile: this.mobile,
                //  address: this.address,
                status: true,
                organogramid: this.organogramid,
                employeeid: this.employeeid
            };
        }
        else {
            fieldEmployee = {
                employeenum: this.employeenum,
                employeename: this.employeename,
                employeetype: this.employeetype,
                designation: this.designation,
                email: this.email,
                countrycode: this.countrycode,
                mobile: this.mobile,
                //   address: this.address,
                status: true,
                organogramid: this.organogramid
            };
        }
        this.employeeService.addEmployee(fieldEmployee)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this._commonService.redirectTo('/admin/employee/list');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/admin/master/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/admin/master/employee/employee.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"],
            _organogram_organogram_service__WEBPACK_IMPORTED_MODULE_2__["OrganogramService"],
            _frontend_contactus_contactus_service__WEBPACK_IMPORTED_MODULE_6__["ContactusService"],
            _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/employee/employee.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/master/employee/employee.module.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/admin/master/employee/employee-list/employee-list.component.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee.component */ "./src/app/admin/master/employee/employee.component.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./submenu/submenu.component */ "./src/app/admin/master/employee/submenu/submenu.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/admin/master/employee/parent/parent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var router = [
    {
        path: '',
        component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__["ParentComponent"],
        children: [
            { path: '', component: _employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
            { path: 'edit/:employeeid', component: _employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
            { path: 'list', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"] }
        ]
    }
];
var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_8__["CKEditorModule"]
            ],
            declarations: [
                _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"],
                _employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"],
                _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_9__["SubmenuComponent"],
                _parent_parent_component__WEBPACK_IMPORTED_MODULE_10__["ParentComponent"]
            ]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ }),

/***/ "./src/app/admin/master/employee/parent/parent.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/master/employee/parent/parent.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xl-3 col-lg-11 col-md-12 col-sm-12\">\n    <app-submenu></app-submenu>\n  </div>\n  <div class=\"col-xl-9 col-lg-11 col-md-12 col-sm-12\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/employee/parent/parent.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/master/employee/parent/parent.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/master/employee/parent/parent.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/master/employee/parent/parent.component.ts ***!
  \******************************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
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

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parent',
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/admin/master/employee/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.scss */ "./src/app/admin/master/employee/parent/parent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/employee/submenu/submenu.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/master/employee/submenu/submenu.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card submenu-wrapper\">\n    <div class=\"menu-tile\">Employee</div>\n    <ul class=\"submenu-ul\">\n      <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/employee']\" class=\"waves-effect\" >Create Employee</a></li>\n      <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/employee/list']\" class=\"waves-effect\" >Employee List</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/employee/submenu/submenu.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/master/employee/submenu/submenu.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu-wrapper {\n  height: 70vh;\n  overflow: hidden; }\n\n.menu-tile {\n  padding: 15px;\n  font-size: 18px;\n  color: #54afc6;\n  border-bottom: 1px solid #eae8e8; }\n\n.submenu-ul {\n  list-style: none;\n  padding: 0px; }\n\nli.submenu-item a {\n  display: block;\n  display: block;\n  line-height: 50px;\n  padding: 0px 15px;\n  font-size: 14px;\n  color: #666;\n  border-bottom: 1px solid #eae8e8; }\n\nli.submenu-item.active a, li.submenu-item a:hover {\n  background: #54afc6;\n  color: #fff; }\n\nli.submenu-item.active a::after, li.submenu-item a:hover::after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f0d9\";\n  color: #fff;\n  right: 0px;\n  position: absolute;\n  font-size: 50px;\n  margin-right: -1px; }\n"

/***/ }),

/***/ "./src/app/admin/master/employee/submenu/submenu.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/master/employee/submenu/submenu.component.ts ***!
  \********************************************************************/
/*! exports provided: SubmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuComponent", function() { return SubmenuComponent; });
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

var SubmenuComponent = /** @class */ (function () {
    function SubmenuComponent() {
    }
    SubmenuComponent.prototype.ngOnInit = function () {
    };
    SubmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-submenu',
            template: __webpack_require__(/*! ./submenu.component.html */ "./src/app/admin/master/employee/submenu/submenu.component.html"),
            styles: [__webpack_require__(/*! ./submenu.component.scss */ "./src/app/admin/master/employee/submenu/submenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmenuComponent);
    return SubmenuComponent;
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
//# sourceMappingURL=master-employee-employee-module.js.map