(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-scale-scale-module"],{

/***/ "./src/app/admin/master/scale/scale.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/master/scale/scale.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n    <div class=\"col-xl-10 col-lg-11 col-md-12 col-sm-12 \">\n        <!-- Card -->\n        <div class=\"card\">\n\n            <!-- Card body -->\n            <div class=\"card-body\">\n\n                <!-- Default form subscription -->\n                <input type=\"hidden\" [(ngModel)]=\"scaleid\" name=\"scaleid\">\n                <form [formGroup]=\"scaleForm\" (ngSubmit)=\"scaleFormSubmit()\" class=\"addscale\">\n                    <p class=\"h4 text-center py-4 admin-title\">Scale</p>\n                    <!-- Default input name -->\n                    <div class=\"row\">\n                        <div class=\"form-group col-md-5 col-sm-12\">\n                            <!--  <label for=\"defaultFormCardDesiEx\" class=\"grey-text font-weight-light control-label col-md-3\">Number of Options</label>-->\n                            <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" formControlName=\"noofoption\" name=\"noofoption\" (change)=\"optionFields($event.target.value)\">\n                                <option value=\"1\">1</option>\n                                <option value=\"2\">2</option>\n                                <option value=\"3\">3</option>\n                                <option value=\"4\">4</option>\n                                <option value=\"5\">5</option>\n                                <option value=\"6\">6</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div formArrayName=\"options\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5\" *ngFor=\"let itemrow of scaleForm.controls.options.controls; let i=index\" [formGroupName]=\"i\">\n                                <div class=\"form-group\">\n                                    <input formControlName=\"itemname\" placeholder=\"Option {{ i + 1 }}\" class=\"form-control\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-2 feild-button\">\n                                <button type=\"submit\" class=\"btn btn-primary btn-submit\">Submit</button>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                    </div>\n                </form>\n                <!-- Default form subscription -->\n\n            </div>\n            <!-- Card body -->\n\n        </div>\n        <!-- Card -->\n    </div>\n</div>\n\n<div class=\"row justify-content-md-center mg-0\">\n    <div class=\"col-md-10 mt-5 mb-5 product-list scale-list\">\n        <!-- Card -->\n\n        <!--   \n<div class=\"row justify-content-md-center mb-5\">\n  <div class=\"col-md-10 mt-5\">-->\n        <!--Table-->\n        <table *ngIf=\"scaleList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-Scale\">Scale</th>\n                    <th class=\"label-action\">Action</th>\n                </tr>\n            </thead>\n            <!--Table head-->\n\n            <!--Table body-->\n            <tbody>\n                <tr *ngFor=\"let s of scaleList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-Scale\">{{ s.options | arrayToString:',' }}</td>\n                    <td class=\"col-action\">\n                        <span (click)=\"editScale(s)\" class=\"btn-edit\">Edit </span>/\n                        <span (click)=\"deleteScale(s._id)\" class=\"btn-delete\">Delete</span>\n                    </td>\n                </tr>\n            </tbody>\n            <!--Table body-->\n        </table>\n        <!--Table-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/master/scale/scale.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/master/scale/scale.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  border: none;\n  margin-left: -20px;\n  width: 25%; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.feild-button {\n  padding: 0px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 7px 15px;\n  border: none !important;\n  box-shadow: none;\n  margin: 0px; }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff;\n  margin-top: 35px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-Scale {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-action {\n  line-height: 30px; }\n\n.label-name, .label-no, .label-Scale, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border-right: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important;\n  border-bottom: none; }\n\n.label-action {\n  border: none; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #dbe2e4; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n.form-control {\n  font-size: 15px; }\n\n.col-md-6 .row {\n  margin-right: 0px; }\n"

/***/ }),

/***/ "./src/app/admin/master/scale/scale.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/master/scale/scale.component.ts ***!
  \*******************************************************/
/*! exports provided: ScaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleComponent", function() { return ScaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _JD_scale_services_scale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JD/scale/services/scale.service */ "./src/app/admin/master/JD/scale/services/scale.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ScaleComponent = /** @class */ (function () {
    function ScaleComponent(_fb, _validationsService, _commonService, scaleService) {
        this._fb = _fb;
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.scaleService = scaleService;
        this.scaleid = '';
        this.scaleList = '';
    }
    ScaleComponent.prototype.ngOnInit = function () {
        this.scaleForm = this._fb.group({
            noofoption: this._fb.control(2),
            options: this._fb.array([this.initItemRows(), this.initItemRows()])
        });
        this.getScaleList();
    };
    ScaleComponent.prototype.getScaleList = function () {
        var _this = this;
        this.scaleService.getScale()
            .subscribe(function (res) {
            _this.scaleList = res.data;
        });
    };
    ScaleComponent.prototype.initItemRows = function () {
        return this._fb.group({
            itemname: ['']
        });
    };
    ScaleComponent.prototype.clearFormArray = function () {
        var control = this.scaleForm.controls['options'];
        while (control.length !== 1) {
            control.removeAt(0);
        }
    };
    ScaleComponent.prototype.addNewRow = function () {
        var control = this.scaleForm.controls['options'];
        control.push(this.initItemRows());
    };
    ScaleComponent.prototype.deleteRow = function (index) {
        var control = this.scaleForm.controls['options'];
        control.removeAt(index);
    };
    ScaleComponent.prototype.optionFields = function (value) {
        this.clearFormArray();
        for (var i = 1; i < value; i++) {
            this.addNewRow();
        }
    };
    ScaleComponent.prototype.scaleFormSubmit = function () {
        var _this = this;
        var fields;
        if (!this._validationsService.isEmpty(this.scaleid)) {
            fields = {
                scaleid: this.scaleid,
                noofoption: this.scaleForm.value.noofoption,
                options: this.scaleForm.value.options
            };
        }
        else {
            fields = {
                noofoption: this.scaleForm.value.noofoption,
                options: this.scaleForm.value.options
            };
        }
        this.scaleService.addScale(fields)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getScaleList();
                _this.ngOnInit();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ScaleComponent.prototype.editScale = function (s) {
        this.scaleid = s._id;
        this.optionFields(s.options.length);
        this.scaleForm.setValue({
            noofoption: s.noofoption,
            options: s.options
        });
        window.scrollTo(0, 0);
    };
    ScaleComponent.prototype.deleteScale = function (scaleid) {
        var _this = this;
        this.scaleService.deleteScale(scaleid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getScaleList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    ScaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scale',
            template: __webpack_require__(/*! ./scale.component.html */ "./src/app/admin/master/scale/scale.component.html"),
            styles: [__webpack_require__(/*! ./scale.component.scss */ "./src/app/admin/master/scale/scale.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _JD_scale_services_scale_service__WEBPACK_IMPORTED_MODULE_4__["ScaleService"]])
    ], ScaleComponent);
    return ScaleComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/scale/scale.module.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/master/scale/scale.module.ts ***!
  \****************************************************/
/*! exports provided: ScaleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleModule", function() { return ScaleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _scale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scale.component */ "./src/app/admin/master/scale/scale.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/admin/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _scale_component__WEBPACK_IMPORTED_MODULE_5__["ScaleComponent"] }
];
var ScaleModule = /** @class */ (function () {
    function ScaleModule() {
    }
    ScaleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _scale_component__WEBPACK_IMPORTED_MODULE_5__["ScaleComponent"],
            ]
        })
    ], ScaleModule);
    return ScaleModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-scale-scale-module.js.map