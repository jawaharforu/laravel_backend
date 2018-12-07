(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-organogram-organogram-module"],{

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

/***/ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram-add/organogram-add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <!-- Card -->\n        <div class=\"card\">\n\n            <!-- Card body -->\n            <div class=\"card-body\">\n                <!--  <p class=\"h4 text-center py-4 btn-orange\">\n            </p>-->\n                <!-- Default form subscription -->\n                <form (ngSubmit)=\"organogramForm()\">\n                    <p class=\"h4 text-center py-4 admin-title\">Organogram</p>\n                    <a [routerLink]=\"['/admin/organogram/structure/view']\" class=\"btn btn-green-new float-right\">Organogram Structure</a>\n                    <div class=\"clear-fix\"></div>\n\n                    <!-- <p class=\"h4 text-center py-4\">Organogram</p>-->\n                    <div *ngIf=\"parentName !== ''\">\n                        <p class=\"text-center\">{{parentName}}</p>\n                        <p class=\"text-center\">{{parentDept.name}}</p>\n                    </div>\n                    <input type=\"hidden\" [(ngModel)]=\"organogramid\" name=\"organogramid\">\n                    <input type=\"hidden\" [(ngModel)]=\"parentid\" name=\"parentid\">\n                    <!-- Default input name -->\n                    <div class=\"form-row questionwrapper\">\n                        <div class=\"col\">\n                            <div class=\"form-group \">\n                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"departmentid\" name=\"departmentid\" (change)=\"getSubDepartment()\">\n                                    <option value=\"\" disabled>--Select Department--</option>\n                                    <option *ngFor=\"let d of departmentList\" [value]=\"d._id\">{{ d.name }}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"form-group \">\n                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiExwe\" [(ngModel)]=\"subdepartmentid\" name=\"subdepartmentid\">\n                                    <option value=\"\" disabled>--Select Sub Department--</option>\n                                    <option *ngFor=\"let s of subDepartmentList\" [value]=\"s._id\">{{ s.name }}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Head Name\">\n                        </div>\n                        <div class=\"col\">\n                            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"designation\" name=\"designation\" placeholder=\"Designation\">\n                        </div>\n                        <div class=\"\">\n                            <button type=\"submit\" class=\"btn btn-primary waves-light m-0 btn_additem\" mdbWavesEffect>Submit</button>\n                        </div>\n                    </div>\n                </form>\n                <!-- Default form subscription -->\n\n            </div>\n            <!-- Card body -->\n\n        </div>\n        <!-- Card -->\n    </div>\n</div>\n\n<div class=\"justify-content-md-center mb-2\">\n    <div class=\"col-md-12 mt-4 product-list scale-list\">\n        <!--Table-->\n        <table *ngIf=\"organogramList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-org\">Head Name</th>\n                    <th class=\"label-org\">Department - Subdepartment</th>\n                    <th class=\"label-org\">Designation</th>\n                    <th class=\"label-org\">Sub Level</th>\n                    <th class=\"label-action\">Action</th>\n                </tr>\n            </thead>\n            <!--Table head-->\n\n            <!--Table body-->\n            <tbody>\n                <tr *ngFor=\"let o of organogramList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-org\">{{ o.name }}</td>\n                    <td class=\"col-org\">{{ o.departmentid.name }}\n                      <span *ngIf=\"o.subdepartmentid\"> - {{o.subdepartmentid.name}}</span>\n                    </td>\n                    <td class=\"col-org\">{{ o.designation }}</td>\n                    <td class=\"col-org\">{{ childCount[o.uniqueid] }}</td>\n                    <td class=\"col-action\">\n                        <span (click)=\"editHeader(o)\" class=\"btn-edit\">Edit </span> /\n                        <span (click)=\"deleteHeader(o._id)\" class=\"btn-delete\"> Delete </span>/\n                        <span (click)=\"addSublevel(o._id)\" class=\"btn-level\"> Add Sub Level</span>\n                    </td>\n                </tr>\n            </tbody>\n            <!--Table body-->\n        </table>\n        <!--Table-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram-add/organogram-add.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f4f3f9; }\n\n.admin-title-header {\n  margin-bottom: 30px;\n  font-size: 16px;\n  font-weight: 400; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%;\n  float: left; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  padding: 16px 10px;\n  background: #5ebd71 !important;\n  box-shadow: none;\n  font-size: 10px;\n  margin: 0px; }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff; }\n\n.questionwrapper {\n  background: #dedddd;\n  padding: 5px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-org {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-action {\n  line-height: 30px; }\n\n.label-name, .label-no, .label-Scale, .label-action, .label-org {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border-right: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important;\n  border-bottom: none; }\n\n.label-action {\n  border: none; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #dbe2e4; }\n\nspan.btn-edit, span.btn-delete, span.btn-level {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n.form-control {\n  font-size: 15px; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n  float: left;\n  font-size: 12px;\n  padding: 0px; }\n\n.btn_add {\n  color: inherit;\n  text-decoration: none;\n  width: 25px;\n  height: 25px;\n  float: right !important;\n  margin: 0px;\n  box-shadow: none;\n  background: #54afc6;\n  border-radius: 50%;\n  font-size: 15px;\n  margin-top: 5px; }\n\n.btn_add .fa {\n  margin-left: 8px;\n  font-size: 12px;\n  margin-top: 7px;\n  color: #fff; }\n\n.btn_additem,\n.btn-submit, .btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  padding: 9px 20px;\n  background: #f38e00 !important;\n  box-shadow: none;\n  font-size: 13px;\n  float: right; }\n\n.modal-dialog {\n  margin-top: 120px; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header {\n  background: transparent;\n  box-shadow: none; }\n\nbutton.close {\n  background: #666;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  padding: 12px;\n  margin: -1rem -1rem -1rem auto;\n  font-weight: normal;\n  font-size: 20px; }\n\nbutton.close .white-text {\n  margin-left: -5px; }\n\n.modal-dialog.modal-notify .heading {\n  color: #fff;\n  background: #666;\n  margin-left: -16px;\n  margin-top: -16px;\n  width: 30%; }\n\na.btn.btn-green-new.float-right {\n  background: #43b64a;\n  color: #fff;\n  border: none;\n  box-shadow: none; }\n\n.clear-fix {\n  clear: both; }\n"

/***/ }),

/***/ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram-add/organogram-add.component.ts ***!
  \************************************************************************************/
/*! exports provided: OrganogramAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganogramAddComponent", function() { return OrganogramAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _organogram_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organogram.service */ "./src/app/admin/master/organogram/organogram.service.ts");
/* harmony import */ var _department_department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../department/department.service */ "./src/app/admin/master/department/department.service.ts");
/* harmony import */ var _department_sub_department_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../department/sub-department.service */ "./src/app/admin/master/department/sub-department.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrganogramAddComponent = /** @class */ (function () {
    function OrganogramAddComponent(activatedRoute, _validationsService, _commonService, organogramService, departmentService, subDepartmentService) {
        this.activatedRoute = activatedRoute;
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.organogramService = organogramService;
        this.departmentService = departmentService;
        this.subDepartmentService = subDepartmentService;
        this.name = '';
        this.designation = '';
        this.parentid = 0;
        this.organogramid = '';
        this.organogramList = '';
        this.parentName = '';
        this.parentDept = '';
        this.parent = 0;
        this.uniqueid = 1;
        this.childCount = [];
        this.subdepartmentid = '';
        this.subDepartmentList = '';
        this.departmentid = '';
        this.departmentList = '';
    }
    OrganogramAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDepartmentList();
        this.activatedRoute.params.subscribe(function (params) {
            var edit = params['edit'];
            if (!_this._validationsService.isEmpty(edit) && !_this._validationsService.isEmpty(params['organogramid'])) {
                _this.getOrganogramById(params['organogramid'], 'edit');
            }
            else if (!_this._validationsService.isEmpty(params['organogramid'])) {
                _this.getOrganogramById(params['organogramid'], 0);
            }
            else if (_this._validationsService.isEmpty(params['organogramid'])) {
                _this.getOrganogramList(0);
            }
        });
    };
    OrganogramAddComponent.prototype.getDepartmentList = function () {
        var _this = this;
        this.departmentService.getDepartment()
            .subscribe(function (res) {
            _this.departmentList = res.data;
        });
    };
    OrganogramAddComponent.prototype.getSubDepartmentList = function (departmentid) {
        var _this = this;
        this.subDepartmentService.getSubDepartmentByCategory(departmentid)
            .subscribe(function (res) {
            _this.subDepartmentList = res.data;
        });
    };
    OrganogramAddComponent.prototype.getSubDepartment = function () {
        if (this._validationsService.isEmpty(this.departmentid)) {
            this._commonService.showMessage('error', 'Department should not be empty!');
            return false;
        }
        this.getSubDepartmentList(this.departmentid);
    };
    OrganogramAddComponent.prototype.getOrganogramById = function (organogramid, which) {
        var _this = this;
        this.organogramService.getOrganogramById(organogramid)
            .subscribe(function (res) {
            if (which === 'edit') {
                console.log(res.data);
                _this.name = res.data.name;
                _this.departmentid = res.data.departmentid._id;
                _this.getSubDepartment();
                _this.subdepartmentid = res.data.subdepartmentid._id;
                _this.designation = res.data.designation;
                _this.parentid = res.data.parentid;
                _this.organogramid = res.data._id;
                _this.uniqueid = res.data.uniqueid;
            }
            else {
                _this.parentName = res.data.name;
                _this.parentDept = res.data.departmentid;
                _this.subdepartmentid = res.data.subdepartmentid;
                _this.parentid = res.data.uniqueid;
                _this.uniqueid = res.data.uniqueid;
                _this.organogramid = '';
                // console.log(this.parentDept);
            }
            _this.getOrganogramList(res.data.uniqueid);
        });
    };
    OrganogramAddComponent.prototype.getOrganogramList = function (parent) {
        var _this = this;
        this.organogramService.getOrganogram(parent)
            .subscribe(function (res) {
            _this.organogramList = res.data;
            // console.log(this.organogramList);
            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                var prop = _a[_i];
                _this.getOrganogramChild(prop.uniqueid);
            }
        });
    };
    OrganogramAddComponent.prototype.organogramForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.departmentid)) {
            this._commonService.showMessage('error', 'Please select Department!');
            return false;
        }
        // if (this._validationsService.isEmpty(this.subdepartmentid)) {
        //   this._commonService.showMessage('error', 'Please select Sub Department!');
        //   return false;
        // }
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Head Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.designation)) {
            this._commonService.showMessage('error', 'Designation should not be empty!');
            return false;
        }
        var field;
        if (!this._validationsService.isEmpty(this.organogramid)) {
            field = {
                name: this.name,
                departmentid: this.departmentid,
                subdepartmentid: this.subdepartmentid,
                designation: this.designation,
                parentid: this.parentid,
                organogramid: this.organogramid,
                uniqueid: this.uniqueid
            };
        }
        else {
            field = {
                name: this.name,
                departmentid: this.departmentid,
                subdepartmentid: this.subdepartmentid,
                designation: this.designation,
                parentid: this.parentid,
                uniqueid: this.uniqueid,
            };
        }
        if (field.subdepartmentid === '') {
            delete field.subdepartmentid;
        }
        this.organogramService.addOrganogram(field)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                // this._commonService.redirectTo('/admin/jd/');
                _this.name = '';
                _this.departmentid = '';
                _this.subdepartmentid = '';
                _this.designation = '';
                _this.parentid = (_this.parentid !== undefined) ? _this.parentid : 0;
                _this.organogramid = '';
                _this.getOrganogramList(_this.parentid);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    OrganogramAddComponent.prototype.addSublevel = function (id) {
        this._commonService.redirectTo("/admin/organogram/" + id);
    };
    OrganogramAddComponent.prototype.editHeader = function (o) {
        // this.name = h.name;
        // this.departmentid = h.departmentid;
        // this.subdepartmentid = h.subdepartmentid;
        // this.designation = h.designation;
        // this.parentid = h.parentid;
        // this.organogramid = h._id;
        this._commonService.redirectTo("/admin/organogram/edit/" + o._id + "/edit");
    };
    OrganogramAddComponent.prototype.deleteHeader = function (headerid) {
        var _this = this;
        this.organogramService.deleteOrganogram(headerid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getOrganogramList(_this.parent);
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    OrganogramAddComponent.prototype.getOrganogramChild = function (uniqueid) {
        var _this = this;
        this.organogramService.getOrganogramChild(uniqueid)
            .subscribe(function (res) {
            _this.childCount[uniqueid] = res.data.length;
        });
    };
    OrganogramAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organogram-add',
            template: __webpack_require__(/*! ./organogram-add.component.html */ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.html"),
            styles: [__webpack_require__(/*! ./organogram-add.component.scss */ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _organogram_service__WEBPACK_IMPORTED_MODULE_4__["OrganogramService"],
            _department_department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"],
            _department_sub_department_service__WEBPACK_IMPORTED_MODULE_6__["SubDepartmentService"]])
    ], OrganogramAddComponent);
    return OrganogramAddComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/organogram/organogram.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ng-org-chart *ngFor=\"let o of organogramStructure; let i = index\" [topEmployee]=\"o\"></ng-org-chart>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/master/organogram/organogram.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".oc-border {\n  border: 1px solid green; }\n\n.oc-background {\n  background-color: limegreen; }\n\n.oc-name {\n  font-family: Cambria, Cochin, Georgia, Times, Times New Roman, serif;\n  white-space: nowrap; }\n\n.oc-designation {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  font-style: italic;\n  white-space: nowrap; }\n"

/***/ }),

/***/ "./src/app/admin/master/organogram/organogram.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram.component.ts ***!
  \*****************************************************************/
/*! exports provided: OrganogramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganogramComponent", function() { return OrganogramComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _organogram_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organogram.service */ "./src/app/admin/master/organogram/organogram.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganogramComponent = /** @class */ (function () {
    function OrganogramComponent(organogramService) {
        this.organogramService = organogramService;
        this.organogramStructure = '';
    }
    OrganogramComponent.prototype.ngOnInit = function () {
        this.getOrganogramStructure();
    };
    OrganogramComponent.prototype.getOrganogramStructure = function () {
        var _this = this;
        this.organogramService.getOrganogramStructure()
            .subscribe(function (res) {
            var data = res.data;
            _this.organogramStructure = data;
        });
    };
    OrganogramComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organogram',
            template: __webpack_require__(/*! ./organogram.component.html */ "./src/app/admin/master/organogram/organogram.component.html"),
            styles: [__webpack_require__(/*! ./organogram.component.scss */ "./src/app/admin/master/organogram/organogram.component.scss")]
        }),
        __metadata("design:paramtypes", [_organogram_service__WEBPACK_IMPORTED_MODULE_1__["OrganogramService"]])
    ], OrganogramComponent);
    return OrganogramComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/organogram/organogram.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/master/organogram/organogram.module.ts ***!
  \**************************************************************/
/*! exports provided: OrganogramModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganogramModule", function() { return OrganogramModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _organogram_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organogram.component */ "./src/app/admin/master/organogram/organogram.component.ts");
/* harmony import */ var _organogram_add_organogram_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./organogram-add/organogram-add.component */ "./src/app/admin/master/organogram/organogram-add/organogram-add.component.ts");
/* harmony import */ var _modules_org_chart_master_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/org-chart-master/lib */ "./src/app/modules/org-chart-master/lib/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var router = [
    { path: '', component: _organogram_add_organogram_add_component__WEBPACK_IMPORTED_MODULE_7__["OrganogramAddComponent"] },
    { path: ':organogramid', component: _organogram_add_organogram_add_component__WEBPACK_IMPORTED_MODULE_7__["OrganogramAddComponent"] },
    { path: 'structure/view', component: _organogram_component__WEBPACK_IMPORTED_MODULE_6__["OrganogramComponent"] },
    { path: 'edit/:organogramid/:edit', component: _organogram_add_organogram_add_component__WEBPACK_IMPORTED_MODULE_7__["OrganogramAddComponent"] },
];
var OrganogramModule = /** @class */ (function () {
    function OrganogramModule() {
    }
    OrganogramModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _modules_org_chart_master_lib__WEBPACK_IMPORTED_MODULE_8__["OrgChartModule"]
            ],
            declarations: [_organogram_component__WEBPACK_IMPORTED_MODULE_6__["OrganogramComponent"], _organogram_add_organogram_add_component__WEBPACK_IMPORTED_MODULE_7__["OrganogramAddComponent"]]
        })
    ], OrganogramModule);
    return OrganogramModule;
}());



/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/index.ts ***!
  \*******************************************************/
/*! exports provided: OrgChartComponent, OrgChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/org-chart/org-chart.component */ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return _src_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_0__["OrgChartComponent"]; });

/* harmony import */ var _src_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/module */ "./src/app/modules/org-chart-master/lib/src/module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrgChartModule", function() { return _src_module__WEBPACK_IMPORTED_MODULE_1__["OrgChartModule"]; });





/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/employee/employee.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n\tmargin: 0 1em;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n\t-ms-flex-align: center;\n\t    align-items: center;\n}\n\n.oc-box {\n\tpadding: 0.25em 1em;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n\t-ms-flex-align: center;\n\t    align-items: center;\n}\n\n.oc-h-bar {\n\theight: 0.5em;\n}\n"

/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/employee/employee.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"oc-h-bar oc-border\" *ngIf=\"hasManager\"></div>\n<div class=\"oc-box oc-border oc-background\">\n\t<div class=\"oc-name\">{{employee?.name}}</div>\n  <div class=\"oc-designation\">{{employee?.designation}}</div>\n  <div class=\"oc-emp-count\">{{employee?.numemp}}</div>\n</div>\n<div class=\"oc-h-bar oc-border\" *ngIf=\"employee?.subordinates.length\"></div>\n"

/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/employee/employee.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
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

var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent() {
        this.hasManager = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "hasManager", void 0);
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'oc-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.css")]
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/module.ts ***!
  \************************************************************/
/*! exports provided: OrgChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartModule", function() { return OrgChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./org-chart/org-chart.component */ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/modules/org-chart-master/lib/src/employee/employee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrgChartModule = /** @class */ (function () {
    function OrgChartModule() {
    }
    OrgChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_2__["OrgChartComponent"], _employee_employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]],
            exports: [_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_2__["OrgChartComponent"]]
        })
    ], OrgChartModule);
    return OrgChartModule;
}());



/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n\t-ms-flex-align: center;\n\t    align-items: center;\n}\n\n.oc-reports {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex: 1;\n\t    flex: 1;\n}\n\n.oc-org-container {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-ms-flex-direction: column;\n\t    flex-direction: column;\n}\n\n.oc-h-bar-container {\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n.oc-h-bar {\n\t-ms-flex: 1;\n\t    flex: 1;\n}\n"

/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<oc-employee *ngIf=\"topEmployee\" [employee]=\"topEmployee\" [hasManager]=\"hasManager\"></oc-employee>\n<div class=\"oc-reports\">\n\t<ng-container *ngFor=\"let employee of topEmployee?.subordinates; first as isFirst; last as isLast\">\n\t\t<div class=\"oc-org-container\">\n\t\t\t<div class=\"oc-h-bar-container\">\n\t\t\t\t<div class=\"oc-h-bar oc-border\" [style.border-color]=\"isFirst?'transparent':''\"></div>\n\t\t\t\t<div class=\"oc-border\"></div>\n\t\t\t\t<div class=\"oc-h-bar oc-border\" [style.border-color]=\"isLast?'transparent':''\"></div>\n\t\t\t</div>\n\t\t\t<ng-org-chart [topEmployee]=\"employee\" [hasManager]=\"true\"></ng-org-chart>\n\t\t</div>\n\t</ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrgChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return OrgChartComponent; });
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

var OrgChartComponent = /** @class */ (function () {
    function OrgChartComponent() {
        this.hasManager = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrgChartComponent.prototype, "topEmployee", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OrgChartComponent.prototype, "hasManager", void 0);
    OrgChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ng-org-chart',
            template: __webpack_require__(/*! ./org-chart.component.html */ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.html"),
            styles: [__webpack_require__(/*! ./org-chart.component.css */ "./src/app/modules/org-chart-master/lib/src/org-chart/org-chart.component.css")]
        })
    ], OrgChartComponent);
    return OrgChartComponent;
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
//# sourceMappingURL=master-organogram-organogram-module.js.map