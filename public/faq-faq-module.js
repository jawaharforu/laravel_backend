(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

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

/***/ "./src/app/admin/frontend/faq/faq-category/faq-category.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-category/faq-category.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\" col-sm-12 \">\n    <!-- Card -->\n    <div class=\"card mb-4\">\n\n        <!-- Card body -->\n        <div class=\"card-body\">\n\n            <!-- Default form subscription -->\n            <form (ngSubmit)=\"faqCategoryForm()\" class=\"add-faqCategory\">\n                <p class=\"h4 text-center py-4 admin-title\">FAQ Category</p>\n                <input type=\"hidden\" [(ngModel)]=\"faqcategoryid\" name=\"approverid\">\n                <!-- Default input name -->\n\n                \n             \n                <div class=\"form-group  col-md-12 col-sm-12\">\n                        <div class=\"row\">\n                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3 label-faq\">Name</label>\n                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                </div>\n                </div>\n                <div class=\"col-md-6 offset-md-2 feild-button \">\n                        <button class=\"btn btn-outline-purple  btn-submit\" type=\"submit\">Submit </button>\n                </div>\n            </form>\n            <!-- Default form subscription -->\n\n        </div>\n        <!-- Card body -->\n    </div>\n    <div class=\"scale-list\">\n  <table class=\"table-bordered table-striped\" datatable>\n\n    <!--Table head-->\n    <thead class=\"mdb-color darken-3\">\n        <tr class=\"text-white\">\n            <th class=\"label-no\">#</th>\n            <th class=\"label-name\">Name</th>\n            <th class=\"label-action\">Action</th>\n        </tr>\n    </thead>\n    <!--Table head-->\n\n    <!--Table body-->\n    <tbody>\n        <tr *ngFor=\"let a of faqCategoryList; let i = index\">\n            <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n            <td class=\"col-name\">{{ a.name }}</td>\n            <td class=\"col-action\">\n              <span  (click)=\"editFaqCategory(a)\" class=\"btn-edit\" mdbWavesEffect>Edit </span>/\n              <span  (click)=\"deleteFaqCategory(a._id)\" class=\" btn-delete\" mdbWavesEffect>Delete </span>\n              </td>\n        </tr>\n    </tbody>\n    <!--Table body-->\n  </table>\n  <!--Table-->\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-category/faq-category.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-category/faq-category.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  border: none;\n  margin-left: -20px;\n  width: 35%; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.card {\n  position: relative;\n  padding: 25px 25px 10px 25px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none;\n  margin-bottom: 25px; }\n\n.add-faqCategory label {\n  font-size: 13px;\n  color: #000 !important;\n  line-height: 28px;\n  padding: 0px;\n  font-weight: 400 !important; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; }\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px 25px 10px 25px;\n  background: #fff; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-category/faq-category.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-category/faq-category.component.ts ***!
  \***************************************************************************/
/*! exports provided: FaqCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqCategoryComponent", function() { return FaqCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_faq_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/faq-category.service */ "./src/app/admin/frontend/faq/services/faq-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaqCategoryComponent = /** @class */ (function () {
    function FaqCategoryComponent(_commonService, _validationsService, faqCategoryService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.faqCategoryService = faqCategoryService;
        this.faqcategoryid = '';
        this.name = '';
        this.faqCategoryList = '';
    }
    FaqCategoryComponent.prototype.ngOnInit = function () {
        this.getFaqCategoryList();
    };
    FaqCategoryComponent.prototype.getFaqCategoryList = function () {
        var _this = this;
        this.faqCategoryService.getFaqCategory()
            .subscribe(function (res) {
            _this.faqCategoryList = res.data;
        });
    };
    FaqCategoryComponent.prototype.faqCategoryForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'FAQ category name should not be empty!');
            return false;
        }
        var newFaqCategory;
        if (!this._validationsService.isEmpty(this.faqcategoryid)) {
            newFaqCategory = {
                name: this.name,
                faqcategoryid: this.faqcategoryid
            };
        }
        else {
            newFaqCategory = {
                name: this.name
            };
        }
        this.faqCategoryService.addFaqCategory(newFaqCategory)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.faqcategoryid = '';
                _this.name = '';
                _this.getFaqCategoryList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqCategoryComponent.prototype.editFaqCategory = function (a) {
        this.faqcategoryid = a._id;
        this.name = a.name;
        window.scrollTo(0, 0);
    };
    FaqCategoryComponent.prototype.deleteFaqCategory = function (faqcategoryid) {
        var _this = this;
        this.faqCategoryService.deleteFaqCategory(faqcategoryid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getFaqCategoryList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-category',
            template: __webpack_require__(/*! ./faq-category.component.html */ "./src/app/admin/frontend/faq/faq-category/faq-category.component.html"),
            styles: [__webpack_require__(/*! ./faq-category.component.scss */ "./src/app/admin/frontend/faq/faq-category/faq-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _services_faq_category_service__WEBPACK_IMPORTED_MODULE_3__["FaqCategoryService"]])
    ], FaqCategoryComponent);
    return FaqCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-list/faq-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-list/faq-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-12  col-sm-12 faq-list\">\n        <!-- Card -->\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <p class=\"h4 text-center py-4 admin-title\">FAQ List\n                    <!-- <a [routerLink]=\"['/admin/frontend/faq']\" class=\"btn btn-outline-secondary btn-rounded waves-effect btn-add-new\">Add New</a> -->\n                </p>\n                <!--Table-->\n                <table *ngIf=\"faqList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n\n                    <!--Table head-->\n                    <thead>\n                        <tr>\n                            <th class=\"label-no\">#</th>\n                            <th class=\"label-name\">Category</th>\n                            <th class=\"label-name\">Sub Category</th>\n                            <th class=\"label-status\">Question</th>\n                            <th class=\"label-action\">Action</th>\n                        </tr>\n                    </thead>\n                    <!--Table head-->\n\n                    <!--Table body-->\n                    <tbody>\n                        <tr *ngFor=\"let c of faqList; let i = index\">\n                            <th class=\"col-no\" scope=\"row\">{{i+1}}</th>\n                            <td class=\"col-name\">{{c.faqcategoryid.name}}</td>\n                            <td class=\"col-name\">{{c.faqsubcategoryid.name}}</td>\n                            <td class=\"col-question\">{{c.question}}</td>\n                            <td class=\"col-action\">\n                                <span (click)=\"editFaq(c)\" class=\" btn-edit\" mdbRippleRadius>Edit </span>/\n                                <span (click)=\"deleteFaq(c._id)\" class=\" btn-delete\" mdbRippleRadius>Delete </span>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <!--Table body-->\n\n                </table>\n                <!--Table-->\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-list/faq-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-list/faq-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #f3eeee; }\n\n.btn-add-new {\n  float: right;\n  padding: 5px 10px;\n  border-radius: 0px !important;\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important;\n  margin-top: -5px;\n  margin-bottom: 15px;\n  box-shadow: none; }\n\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled):active,\n.btn-outline-secondary.btn-add-new:not([disabled]):not(.disabled).active,\n.show > .btn-outline-secondary.btn-add-new.dropdown-toggle {\n  color: #fff !important;\n  background-color: #56ba65 !important;\n  border: 1px solid #43b64a !important; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.col-name {\n  width: 30%;\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300; }\n\n.col-status .form-group {\n  margin: 0px; }\n\n.col-status .form-group label {\n  margin-top: 5px;\n  margin-left: 15px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:not(:checked) + label:after {\n  background-color: transparent;\n  border-color: #5a5a5a;\n  top: 0;\n  z-index: 0;\n  border: 1px solid #ccc; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 5px;\n  height: 9px;\n  border-color: transparent #666 #666 transparent;\n  margin-top: 3px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  z-index: 0; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; } }\n\ntable.dataTable[_ngcontent-c4] thead[_ngcontent-c4] th[_ngcontent-c4],\ntable.dataTable tbody th, table.dataTable tbody td {\n  border-right: 1px solid #f3eeee;\n  text-transform: capitalize; }\n\n[type=\"radio\"] + label, [type=\"checkbox\"] + label {\n  height: 13px; }\n\ntable.dataTable[_ngcontent-c4][_ngcontent-c4] thead[_ngcontent-c4][_ngcontent-c4] th[_ngcontent-c4][_ngcontent-c4] {\n  border-bottom: none; }\n\n[type=\"checkbox\"][class*=\"filled-in\"] + label:after {\n  border-radius: 2px;\n  height: 15px;\n  width: 15px; }\n\nthead {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc;\n  padding: 44px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-list/faq-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-list/faq-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: FaqListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqListComponent", function() { return FaqListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/faq.service */ "./src/app/admin/frontend/faq/services/faq.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqListComponent = /** @class */ (function () {
    function FaqListComponent(_commonService, faqService) {
        this._commonService = _commonService;
        this.faqService = faqService;
        this.faqList = '';
    }
    FaqListComponent.prototype.ngOnInit = function () {
        this.getFaqList();
    };
    FaqListComponent.prototype.getFaqList = function () {
        var _this = this;
        this.faqService.getFaq()
            .subscribe(function (res) {
            _this.faqList = res.data;
        });
    };
    FaqListComponent.prototype.editFaq = function (Faq) {
        this._commonService.redirectTo("/admin/faq/edit/" + Faq._id);
    };
    FaqListComponent.prototype.deleteFaq = function (Faqid) {
        var _this = this;
        this.faqService.deleteFaq(Faqid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getFaqList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-list',
            template: __webpack_require__(/*! ./faq-list.component.html */ "./src/app/admin/frontend/faq/faq-list/faq-list.component.html"),
            styles: [__webpack_require__(/*! ./faq-list.component.scss */ "./src/app/admin/frontend/faq/faq-list/faq-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]])
    ], FaqListComponent);
    return FaqListComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col-sm-12 \">\n        <!-- Card -->\n        <div class=\"card mb-4\">\n\n            <!-- Card body -->\n            <div class=\"card-body\">\n\n                <!-- Default form subscription -->\n                <form (ngSubmit)=\"faqSubCategoryForm()\" class=\"add-faq-sub-Category\">\n                    <p class=\"h4 text-center py-4 admin-title\">FAQ Sub Category</p>\n                    <input type=\"hidden\" [(ngModel)]=\"faqsubcategoryid\" name=\"approverid\">\n                    <!-- Default input name -->\n                    <div class=\"row1\">\n                        <div class=\"form-group\">\n                            <div class=\"row\">\n                                <label for=\"defaultFormCardDesiEx\" class=\"grey-text font-weight-light control-label col-md-3 label-faq\">Category</label>\n                                <select class=\"browser-default form-control col-md-10\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"faqcategoryid\" name=\"designation\">\n                                    <option value=\"\" disabled>--Select Category--</option>\n                                    <option *ngFor=\"let s of faqCategoryList\" [value]=\"s._id\">{{ s.name }}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"row\">\n                                <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3 label-faq\">Name</label>\n                                <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6 offset-md-2 feild-button \">\n                        <button class=\"btn btn-outline-purple btn-submit\" type=\"submit\">Submit </button>\n                    </div>\n                </form>\n                <!-- Default form subscription -->\n\n            </div>\n            <!-- Card body -->\n\n        </div>\n        <div class=\"scale-list\">\n            <!--Table-->\n            <table class=\"table table-bordered table-striped\" datatable>\n\n                <!--Table head-->\n                <thead class=\"mdb-color darken-3\">\n                    <tr class=\"text-white\">\n                        <th class=\"label-no\">#</th>\n                        <th class=\"label-name\">Category</th>\n                        <th class=\"label-name\">Name</th>\n                        <th class=\"label-action\">Action</th>\n                    </tr>\n                </thead>\n                <!--Table head-->\n\n                <!--Table body-->\n                <tbody>\n                    <tr *ngFor=\"let a of faqSubCategoryList; let i = index\">\n                        <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                        <td class=\"col-name\">{{ a.faqcategoryid.name }}</td>\n                        <td class=\"col-name\">{{ a.name }}</td>\n                        <td class=\"col-action\">\n                            <span (click)=\"editFaqSubCategory(a)\" class=\" btn-edit\">Edit </span> /\n                            <span (click)=\"deleteFaqSubCategory(a._id)\" class=\" btn-delete\">Delete </span>\n                        </td>\n                    </tr>\n                </tbody>\n                <!--Table body-->\n            </table>\n            <!--Table-->\n\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  border: none;\n  margin-left: -20px;\n  width: 35%; }\n\n.card {\n  position: relative;\n  padding: 25px 30px  10px 30px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none;\n  margin-bottom: 25px; }\n\n.aadd-faq-sub-Category label {\n  font-size: 13px;\n  color: #000 !important;\n  line-height: 28px;\n  padding: 0px;\n  font-weight: 400 !important; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important;\n  padding: 0;\n  line-height: 26px;\n  padding-top: 4px;\n  padding-left: 15px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; }\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n\n.scale-list {\n  border: 1px solid #ccc;\n  background: #fff;\n  padding: 25px 25px  10px 25px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FaqSubCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqSubCategoryComponent", function() { return FaqSubCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_faq_sub_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/faq-sub-category.service */ "./src/app/admin/frontend/faq/services/faq-sub-category.service.ts");
/* harmony import */ var _services_faq_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/faq-category.service */ "./src/app/admin/frontend/faq/services/faq-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FaqSubCategoryComponent = /** @class */ (function () {
    function FaqSubCategoryComponent(_commonService, _validationsService, faqSubCategoryService, faqCategoryService) {
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.faqSubCategoryService = faqSubCategoryService;
        this.faqCategoryService = faqCategoryService;
        this.faqsubcategoryid = '';
        this.name = '';
        this.faqSubCategoryList = '';
        this.faqcategoryid = '';
        this.faqCategoryList = '';
    }
    FaqSubCategoryComponent.prototype.ngOnInit = function () {
        this.getFaqCategoryList();
        this.getFaqSubCategoryList();
    };
    FaqSubCategoryComponent.prototype.getFaqCategoryList = function () {
        var _this = this;
        this.faqCategoryService.getFaqCategory()
            .subscribe(function (res) {
            _this.faqCategoryList = res.data;
        });
    };
    FaqSubCategoryComponent.prototype.getFaqSubCategoryList = function () {
        var _this = this;
        this.faqSubCategoryService.getFaqSubCategory()
            .subscribe(function (res) {
            _this.faqSubCategoryList = res.data;
        });
    };
    FaqSubCategoryComponent.prototype.faqSubCategoryForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.faqcategoryid)) {
            this._commonService.showMessage('error', 'Please select Faq category!');
            return false;
        }
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'Sub Category Name should not be empty!');
            return false;
        }
        var newFaqSubCategory;
        if (!this._validationsService.isEmpty(this.faqsubcategoryid)) {
            newFaqSubCategory = {
                name: this.name,
                faqcategoryid: this.faqcategoryid,
                faqsubcategoryid: this.faqsubcategoryid
            };
        }
        else {
            newFaqSubCategory = {
                name: this.name,
                faqcategoryid: this.faqcategoryid
            };
        }
        this.faqSubCategoryService.addFaqSubCategory(newFaqSubCategory)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.faqsubcategoryid = '';
                _this.name = '';
                _this.faqcategoryid = '';
                _this.getFaqSubCategoryList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqSubCategoryComponent.prototype.editFaqSubCategory = function (a) {
        this.faqsubcategoryid = a._id;
        this.name = a.name;
        this.faqcategoryid = a.faqcategoryid._id;
        window.scrollTo(0, 0);
    };
    FaqSubCategoryComponent.prototype.deleteFaqSubCategory = function (faqsubcategoryid) {
        var _this = this;
        this.faqSubCategoryService.deleteFaqSubCategory(faqsubcategoryid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getFaqSubCategoryList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqSubCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq-sub-category',
            template: __webpack_require__(/*! ./faq-sub-category.component.html */ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.html"),
            styles: [__webpack_require__(/*! ./faq-sub-category.component.scss */ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"],
            _services_faq_sub_category_service__WEBPACK_IMPORTED_MODULE_3__["FaqSubCategoryService"],
            _services_faq_category_service__WEBPACK_IMPORTED_MODULE_4__["FaqCategoryService"]])
    ], FaqSubCategoryComponent);
    return FaqSubCategoryComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/faq.module.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq.module.ts ***!
  \**************************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _faq_category_faq_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-category/faq-category.component */ "./src/app/admin/frontend/faq/faq-category/faq-category.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/admin/frontend/faq/faq/faq.component.ts");
/* harmony import */ var _faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./faq-list/faq-list.component */ "./src/app/admin/frontend/faq/faq-list/faq-list.component.ts");
/* harmony import */ var _faq_sub_category_faq_sub_category_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq-sub-category/faq-sub-category.component */ "./src/app/admin/frontend/faq/faq-sub-category/faq-sub-category.component.ts");
/* harmony import */ var _parent_parent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parent/parent.component */ "./src/app/admin/frontend/faq/parent/parent.component.ts");
/* harmony import */ var _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./submenu/submenu.component */ "./src/app/admin/frontend/faq/submenu/submenu.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var router = [
    {
        path: '',
        component: _parent_parent_component__WEBPACK_IMPORTED_MODULE_9__["ParentComponent"],
        children: [
            { path: 'category', component: _faq_category_faq_category_component__WEBPACK_IMPORTED_MODULE_5__["FaqCategoryComponent"] },
            { path: 'subcategory', component: _faq_sub_category_faq_sub_category_component__WEBPACK_IMPORTED_MODULE_8__["FaqSubCategoryComponent"] },
            { path: '', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"] },
            { path: 'list', component: _faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_7__["FaqListComponent"] },
            { path: 'edit/:faqid', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"] }
        ]
    }
];
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"]
            ],
            declarations: [_faq_category_faq_category_component__WEBPACK_IMPORTED_MODULE_5__["FaqCategoryComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"], _faq_list_faq_list_component__WEBPACK_IMPORTED_MODULE_7__["FaqListComponent"], _faq_sub_category_faq_sub_category_component__WEBPACK_IMPORTED_MODULE_8__["FaqSubCategoryComponent"], _parent_parent_component__WEBPACK_IMPORTED_MODULE_9__["ParentComponent"], _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_10__["SubmenuComponent"]]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/faq/faq.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq/faq.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\" col-sm-12\">\n        <!-- Card -->\n        <div class=\"card\">\n            <!-- Card body -->\n            <div class=\"card-body\">\n                <!-- Default form subscription -->\n                <form (ngSubmit)=\"faqForm()\" class=\"add-faq\">\n                    <p class=\"h4 text-center py-4 admin-title\">FAQ</p>\n                    <input type=\"hidden\" [(ngModel)]=\"faqid\" name=\"faqid\" />\n                    <div class=\"form-group col-md-12 col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"defaultFormCardDesiEx\" class=\"grey-text font-weight-light control-label col-md-3\">Category</label>\n                            <select class=\"browser-default form-control col-md-10\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"faqcategoryid\" name=\"faqcategoryid\"\n                                (change)=\"getSubCategory()\">\n                                <option value=\"\" disabled>--Select Category--</option>\n                                <option *ngFor=\"let s of faqcategoryList\" [value]=\"s._id\">{{ s.name }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-12 col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"defaultFormCarddfDesiEx\" class=\"grey-text font-weight-light control-label col-md-3\">Sub Category</label>\n                            <select class=\"browser-default form-control col-md-10\" id=\"defaultFormCarddfDesiEx\" [(ngModel)]=\"faqsubcategoryid\" name=\"faqsubcategoryid\">\n                                <option value=\"\" disabled>--Select Sub Category--</option>\n                                <option *ngFor=\"let s of faqSubCategoryList\" [value]=\"s._id\">{{ s.name }}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-12 col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3\">Question</label>\n                            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"question\" name=\"question\">\n                        </div>\n                    </div>\n                    <div class=\"form-group col-md-12 col-sm-12\">\n                        <div class=\"row\">\n                            <label for=\"defaultFormCarddescEx\" class=\"grey-text font-weight-light control-label col-md-3\">Answer</label>\n                            <textarea type=\"text\" id=\"defaultFormCarddescEx\" class=\"md-textarea md-textarea-auto form-control col-md-10\" mdbInputDirective\n                                [(ngModel)]=\"answer\" name=\"answer\"></textarea>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n\n                        <div class=\"col-md-6 offset-md-4 feild-button\">\n                            <button type=\"submit\" class=\"btn btn-primary waves-light btn-submit\" mdbWavesEffect>Submit</button>\n                        </div>\n                    </div>\n                </form>\n                <!-- Default form subscription -->\n            </div>\n            <!-- Card body -->\n        </div>\n        <!-- Card -->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq/faq.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq/faq.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\n.add-faq label {\n  font-size: 13px;\n  color: #000 !important;\n  font-weight: 400 !important; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none;\n  margin-top: 20px; }\n\n.add-faq .form-group {\n  margin-bottom: .5rem; }\n\nselect#defaultFormCardDesiEx, input#defaultFormCardNameEx,\ntextarea#defaultFormCarddescEx {\n  font-size: 13px; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.feild-features {\n  max-width: 300px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.feild-button {\n  max-width: 250px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/faq/faq.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/frontend/faq/faq/faq.component.ts ***!
  \*********************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/faq.service */ "./src/app/admin/frontend/faq/services/faq.service.ts");
/* harmony import */ var _services_faq_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/faq-category.service */ "./src/app/admin/frontend/faq/services/faq-category.service.ts");
/* harmony import */ var _services_faq_sub_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/faq-sub-category.service */ "./src/app/admin/frontend/faq/services/faq-sub-category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FaqComponent = /** @class */ (function () {
    function FaqComponent(activatedRoute, _commonService, _validationsService, faqService, faqCategoryService, faqSubCategoryService) {
        this.activatedRoute = activatedRoute;
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.faqService = faqService;
        this.faqCategoryService = faqCategoryService;
        this.faqSubCategoryService = faqSubCategoryService;
        this.faqid = '';
        this.faqcategoryid = '';
        this.question = '';
        this.answer = '';
        this.faqcategoryList = '';
        this.faqsubcategoryid = '';
        this.faqSubCategoryList = '';
    }
    FaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.faqid = params['faqid'];
            if (!_this._validationsService.isEmpty(_this.faqid)) {
                _this.getFaqById(_this.faqid);
            }
        });
        this.getFaqCategory();
    };
    FaqComponent.prototype.getFaqCategory = function () {
        var _this = this;
        this.faqCategoryService.getFaqCategory()
            .subscribe(function (res) {
            _this.faqcategoryList = res.data;
        });
    };
    FaqComponent.prototype.getFaqSubCategoryList = function (faqcategoryid) {
        var _this = this;
        this.faqSubCategoryService.getFaqSubCategoryByCategory(faqcategoryid)
            .subscribe(function (res) {
            _this.faqSubCategoryList = res.data;
            _this.faqsubcategoryid = '';
        });
    };
    FaqComponent.prototype.getSubCategory = function () {
        if (this._validationsService.isEmpty(this.faqcategoryid)) {
            this._commonService.showMessage('error', 'Category field should not be empty!');
            return false;
        }
        this.getFaqSubCategoryList(this.faqcategoryid);
    };
    FaqComponent.prototype.getFaqById = function (Faqid) {
        var _this = this;
        this.faqService.getFaqById(Faqid)
            .subscribe(function (res) {
            _this.faqcategoryid = res.data.faqcategoryid;
            _this.faqsubcategoryid = res.data.faqsubcategoryid;
            _this.question = res.data.question;
            _this.answer = res.data.answer;
            _this.faqid = res.data._id;
        });
    };
    FaqComponent.prototype.faqForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.faqcategoryid)) {
            this._commonService.showMessage('error', 'Please select FAQ Category!');
            return false;
        }
        if (this._validationsService.isEmpty(this.faqsubcategoryid)) {
            this._commonService.showMessage('error', 'Please select FAQ Sub Category!');
            return false;
        }
        if (this._validationsService.isEmpty(this.question)) {
            this._commonService.showMessage('error', 'Question should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.answer)) {
            this._commonService.showMessage('error', 'Answer should not be empty!');
            return false;
        }
        var fieldFaq;
        if (!this._validationsService.isEmpty(this.faqid)) {
            fieldFaq = {
                faqcategoryid: this.faqcategoryid,
                faqsubcategoryid: this.faqsubcategoryid,
                question: this.question,
                answer: this.answer,
                faqid: this.faqid
            };
        }
        else {
            fieldFaq = {
                faqcategoryid: this.faqcategoryid,
                faqsubcategoryid: this.faqsubcategoryid,
                question: this.question,
                answer: this.answer
            };
        }
        this.faqService.addFaq(fieldFaq)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.faqcategoryid = '';
                _this.faqsubcategoryid = '';
                _this.question = '';
                _this.answer = '';
                _this._commonService.redirectTo('/admin/faq/list');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/admin/frontend/faq/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/admin/frontend/faq/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"],
            _services_faq_category_service__WEBPACK_IMPORTED_MODULE_5__["FaqCategoryService"],
            _services_faq_sub_category_service__WEBPACK_IMPORTED_MODULE_6__["FaqSubCategoryService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/parent/parent.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/frontend/faq/parent/parent.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-3 col-lg-11 col-md-12 col-sm-12\">\n      <app-submenu></app-submenu>\n    </div>\n    <div class=\"col-xl-9 col-lg-11 col-md-12 col-sm-12\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/parent/parent.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/admin/frontend/faq/parent/parent.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/frontend/faq/parent/parent.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/frontend/faq/parent/parent.component.ts ***!
  \***************************************************************/
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
            template: __webpack_require__(/*! ./parent.component.html */ "./src/app/admin/frontend/faq/parent/parent.component.html"),
            styles: [__webpack_require__(/*! ./parent.component.scss */ "./src/app/admin/frontend/faq/parent/parent.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/services/faq-category.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/frontend/faq/services/faq-category.service.ts ***!
  \*********************************************************************/
/*! exports provided: FaqCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqCategoryService", function() { return FaqCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
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




var FaqCategoryService = /** @class */ (function () {
    function FaqCategoryService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    FaqCategoryService.prototype.addFaqCategory = function (newFaqCategory) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/faqCategories/", newFaqCategory, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqCategoryService.prototype.getFaqCategory = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqCategories/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqCategoryService.prototype.deleteFaqCategory = function (FaqCategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/faqCategories/" + FaqCategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqCategoryService.prototype.getFaqCategoryById = function (FaqCategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqCategories/" + FaqCategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqCategoryService.prototype.getFaqCategoryByStatus = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/faqCategories/get/list", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FaqCategoryService);
    return FaqCategoryService;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/services/faq-sub-category.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/frontend/faq/services/faq-sub-category.service.ts ***!
  \*************************************************************************/
/*! exports provided: FaqSubCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqSubCategoryService", function() { return FaqSubCategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
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




var FaqSubCategoryService = /** @class */ (function () {
    function FaqSubCategoryService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    FaqSubCategoryService.prototype.addFaqSubCategory = function (newFaqSubCategory) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/faqSubCategories/", newFaqSubCategory, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqSubCategoryService.prototype.getFaqSubCategory = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqSubCategories/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqSubCategoryService.prototype.deleteFaqSubCategory = function (FaqSubCategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/faqSubCategories/" + FaqSubCategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqSubCategoryService.prototype.getFaqSubCategoryById = function (FaqSubCategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqSubCategories/" + FaqSubCategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqSubCategoryService.prototype.getFaqSubCategoryByCategory = function (FaqCategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqSubCategories/list/" + FaqCategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqSubCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FaqSubCategoryService);
    return FaqSubCategoryService;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/services/faq.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/frontend/faq/services/faq.service.ts ***!
  \************************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
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




var FaqService = /** @class */ (function () {
    function FaqService(_commonService, http) {
        this._commonService = _commonService;
        this.http = http;
        this.link = this._commonService.link;
    }
    FaqService.prototype.addFaq = function (newFaq) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.post(this.link + "/faqs/", newFaq, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqService.prototype.getFaq = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqs/", { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqService.prototype.deleteFaq = function (Faqid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.delete(this.link + "/faqs/" + Faqid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqService.prototype.getFaqById = function (Faqid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', this._commonService.getUserToken());
        return this.http.get(this.link + "/faqs/" + Faqid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqService.prototype.getFaqByCategory = function (faqcategoryid) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get(this.link + "/faqs/category/" + faqcategoryid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    FaqService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/admin/frontend/faq/submenu/submenu.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/frontend/faq/submenu/submenu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card submenu-wrapper\">\n        <div class=\"menu-tile\">FAQ</div>\n        <ul class=\"submenu-ul\">\n        <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/frontend/faq/category']\" class=\"waves-effect\" mdbWavesEffect>FAQ Category</a></li>\n        <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/frontend/faq/subcategory']\" class=\"waves-effect\" mdbWavesEffect>FAQ Sub Category</a></li>\n        <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/frontend/faq']\" class=\"waves-effect\" mdbWavesEffect>FAQ</a></li>\n        <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/frontend/faq/list']\" class=\"waves-effect\" mdbWavesEffect>FAQ List</a></li>\n    </ul>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/submenu/submenu.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/frontend/faq/submenu/submenu.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu-wrapper {\n  height: 70vh;\n  overflow: hidden; }\n\n.menu-tile {\n  padding: 15px;\n  font-size: 18px;\n  color: #54afc6;\n  border-bottom: 1px solid #eae8e8; }\n\n.submenu-ul {\n  list-style: none;\n  padding: 0px; }\n\nli.submenu-item a {\n  display: block;\n  display: block;\n  line-height: 50px;\n  padding: 0px 15px;\n  font-size: 14px;\n  color: #666;\n  border-bottom: 1px solid #eae8e8; }\n\nli.submenu-item.active a, li.submenu-item a:hover {\n  background: #54afc6;\n  color: #fff; }\n\nli.submenu-item.active a::after, li.submenu-item a:hover::after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f0d9\";\n  color: #fff;\n  right: 0px;\n  position: absolute;\n  font-size: 50px;\n  margin-right: -1px; }\n"

/***/ }),

/***/ "./src/app/admin/frontend/faq/submenu/submenu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/frontend/faq/submenu/submenu.component.ts ***!
  \*****************************************************************/
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
            template: __webpack_require__(/*! ./submenu.component.html */ "./src/app/admin/frontend/faq/submenu/submenu.component.html"),
            styles: [__webpack_require__(/*! ./submenu.component.scss */ "./src/app/admin/frontend/faq/submenu/submenu.component.scss")]
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
//# sourceMappingURL=faq-faq-module.js.map