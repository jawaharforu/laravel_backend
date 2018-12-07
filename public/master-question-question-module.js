(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-question-question-module"],{

/***/ "./src/app/admin/master/question/question.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/master/question/question.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <form (ngSubmit)=\"questionForm()\">\n                        <p class=\"h4 text-center py-4 admin-title\">Question</p>\n                        <input type=\"hidden\" [(ngModel)]=\"questionid\" name=\"questionid\">\n                    <!-- Default input name -->\n                    <div class=\"row\">\n                        <select class=\"browser-default form-control col-md-3\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"type\" name=\"type\">\n                            <option value=\"\" disabled>--Select Employee--</option>\n                            <option value=\"md\">MD</option>\n                            <option value=\"admin\">Admin</option>\n                            <option value=\"commonreception\">Common Reception</option>\n                            <option value=\"secretary\">Department/Secretary</option>\n                            <option value=\"hr\">HR</option>\n                            <option value=\"others\">Others</option>\n                            <!-- <option *ngFor=\"let s of scaleList\" [value]=\"s._id\">{{ s.options | arrayToString:',' }}</option> -->\n                        </select>\n                    </div>\n                    <div class=\"form-group\"></div>\n                    <div class=\"row\">\n                        <div class=\"col-md-11 questionwrapper\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8\">\n                                            <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"question\" name=\"question\" placeholder=\"Enter Question\">\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"scale\" name=\"scale\">\n                                                <option value=\"\" disabled>--Select Scale--</option>\n                                                <option *ngFor=\"let s of scaleList\" [value]=\"s._id\">{{ s.options | arrayToString:',' }}</option>\n                                            </select>\n                                            <a (click)=\"showModal('s')\" class=\"btn_add\">\n                                                <i class=\"fa fa-plus\"></i>\n                                            </a>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-6\">\n                                            <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"assessmenttype\" name=\"assessmenttype\" (change)=\"getHeader()\">\n                                                <option value=\"\" disabled>--Select Assessment--</option>\n                                                <option *ngFor=\"let a of assessmentTypeList\" [value]=\"a._id\">{{ a.name }}</option>\n                                            </select>\n                                            <a (click)=\"showModal('a')\" class=\"btn_add\">\n                                                <i class=\"fa fa-plus\"></i>\n                                            </a>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                            <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"header\" name=\"designation\">\n                                                <option value=\"\" disabled>--Select Header--</option>\n                                                <option *ngFor=\"let h of headerList\" [value]=\"h._id\">{{ h.headername }}</option>\n                                            </select>\n                                            <a (click)=\"showModal('h')\" class=\"btn_add\">\n                                                <i class=\"fa fa-plus\"></i>\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-1 no-padding\">\n                            <button type=\"submit\" class=\"btn btn-primary btn_additem\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"row justify-content-md-center mb-5  mg-0\">\n    <div class=\"col-md-12 mt-5 product-list scale-list\">\n        <!--Table-->\n        <table *ngIf=\"questionList\" datatable class=\"table table-hover table-responsive-md table-fixed\">\n\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-name\">Employee Type</th>\n                    <th class=\"label-name\">Question</th>\n                    <th class=\"label-name\">Scale</th>\n                    <th class=\"label-name\">Assessment</th>\n                    <th class=\"label-name\">Header</th>\n                    <th class=\"label-action\">Assign</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let q of questionList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-name\">{{ q.type }}</td>\n                    <td class=\"col-name\">{{ q.question }}</td>\n                    <td class=\"col-name\">{{ q.scaleid.options | arrayToString:',' }}</td>\n                    <td class=\"col-name\">{{ q.assessmenttypeid.name }}</td>\n                    <td class=\"col-name\">{{ q.headerid.headername }}</td>\n                    <td>\n                        <span (click)=\"editQuestion(q)\" class=\"btn-edit\" mdbRippleRadius>Edit </span>/\n                        <span (click)=\"deleteQuestion(q._id)\" class=\"btn-delete\" mdbRippleRadius>Delete</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div *ngIf=\"isModalShownScale\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('s')\" mdbModal #autoShownModal=\"mdb-modal\"\n    class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n    style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Scale</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('s')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-scale (getScale)=\"getScaleList()\"></app-scale>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"isModalShownAssess\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('a')\" mdbModal\n    #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\" style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Assessment Type</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('a')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-assessment-type (getAssessmentType)=\"getAssessmenttypeList()\"></app-assessment-type>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"isModalShownHeader\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('h')\" mdbModal\n    #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\" style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Header</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('h')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-header (getHeader)=\"getHeaderList()\"></app-header>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/master/question/question.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/master/question/question.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #f4f3f9; }\n\n.admin-title-header {\n  margin-bottom: 30px;\n  font-size: 16px;\n  font-weight: 400; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle,\n.btn-primary:not([disabled]):not(.disabled):active,\n.btn-primary:not([disabled]):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle {\n  padding: 9px 10px;\n  background: #f38e00 !important;\n  box-shadow: none;\n  font-size: 10px;\n  margin: 0px; }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff; }\n\n.questionwrapper {\n  /* background: #dedddd;*/\n  padding: 0px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-action {\n  line-height: 30px; }\n\n.label-name, .label-no, .label-Scale, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border-right: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important;\n  border-bottom: none; }\n\n.label-action {\n  border: none; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #dbe2e4; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\n.form-control {\n  font-size: 15px; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n  float: left;\n  font-size: 12px;\n  padding: 0px;\n  width: calc(100% - 35px); }\n\n.btn_add {\n  color: inherit;\n  text-decoration: none;\n  width: 25px;\n  height: 25px;\n  float: right !important;\n  margin: 0px;\n  box-shadow: none;\n  background: #54afc6;\n  border-radius: 50%;\n  font-size: 15px;\n  margin-top: 5px; }\n\n.btn_add .fa {\n  margin-left: 8px;\n  font-size: 12px;\n  margin-top: 7px;\n  color: #fff; }\n\n.btn_additem, .btn-primary:not([disabled]):not(.disabled):active {\n  padding: 9px 10px;\n  background: #f38e00 !important;\n  box-shadow: none;\n  font-size: 13px;\n  margin: 0px;\n  width: 100%; }\n\n.modal-dialog {\n  margin-top: 120px; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header {\n  background: transparent;\n  box-shadow: none; }\n\nbutton.close {\n  background: #666;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  line-height: 0px;\n  padding: 12px;\n  margin: -1rem -1rem -1rem auto;\n  font-weight: normal;\n  font-size: 20px;\n  margin: 0px !important; }\n\nbutton.close .white-text {\n  margin-left: -5px; }\n\n.modal-dialog.modal-notify .heading {\n  color: #fff;\n  background: #666;\n  margin-left: -16px;\n  margin-top: -16px;\n  width: 30%; }\n\n.no-padding {\n  padding-right: 0px; }\n"

/***/ }),

/***/ "./src/app/admin/master/question/question.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/master/question/question.component.ts ***!
  \*************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _JD_question_services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JD/question/services/question.service */ "./src/app/admin/master/JD/question/services/question.service.ts");
/* harmony import */ var _JD_header_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../JD/header/services/header.service */ "./src/app/admin/master/JD/header/services/header.service.ts");
/* harmony import */ var _JD_scale_services_scale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../JD/scale/services/scale.service */ "./src/app/admin/master/JD/scale/services/scale.service.ts");
/* harmony import */ var _JD_assessment_type_assessment_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../JD/assessment-type/assessment-type.service */ "./src/app/admin/master/JD/assessment-type/assessment-type.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(_validationsService, _commonService, questionService, scaleService, headerService, assessmentTypeService) {
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.questionService = questionService;
        this.scaleService = scaleService;
        this.headerService = headerService;
        this.assessmentTypeService = assessmentTypeService;
        this.isModalShownScale = false;
        this.isModalShownHeader = false;
        this.isModalShownAssess = false;
        this.type = '';
        this.questionid = '';
        this.question = '';
        this.scale = '';
        this.assessmenttype = '';
        this.header = '';
        this.questionList = '';
        this.scaleList = '';
        this.headerList = '';
        this.assessmentTypeList = '';
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.getScaleList();
        this.getAssessmenttypeList();
        this.getQuestionList();
    };
    QuestionComponent.prototype.getQuestionList = function () {
        var _this = this;
        this.questionService.getQuestion()
            .subscribe(function (res) {
            console.log(res);
            _this.questionList = res.data;
        });
    };
    QuestionComponent.prototype.getScaleList = function () {
        var _this = this;
        this.scaleService.getScaleList()
            .subscribe(function (res) {
            _this.scaleList = res.data;
        });
    };
    QuestionComponent.prototype.getAssessmenttypeList = function () {
        var _this = this;
        this.assessmentTypeService.getAssessmenttype()
            .subscribe(function (res) {
            _this.assessmentTypeList = res.data;
        });
    };
    QuestionComponent.prototype.getHeader = function () {
        if (this._validationsService.isEmpty(this.assessmenttype)) {
            this._commonService.showMessage('error', 'Assessmenttype should not be empty!');
            return false;
        }
        this.getHeaderList();
    };
    QuestionComponent.prototype.getHeaderList = function () {
        var _this = this;
        this.headerService.getHeaderByAssessmenttype(this.assessmenttype)
            .subscribe(function (res) {
            _this.headerList = res.data;
        });
    };
    QuestionComponent.prototype.showModal = function (modal) {
        console.log(modal);
        if (modal === 's') {
            this.isModalShownScale = true;
        }
        else if (modal === 'a') {
            this.isModalShownAssess = true;
        }
        else {
            this.isModalShownHeader = true;
        }
    };
    QuestionComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    QuestionComponent.prototype.onHidden = function (modal) {
        if (modal === 's') {
            this.isModalShownScale = false;
        }
        else if (modal === 'a') {
            this.isModalShownAssess = false;
        }
        else {
            this.isModalShownHeader = false;
        }
    };
    QuestionComponent.prototype.questionForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.type)) {
            this._commonService.showMessage('error', 'Please select Employee!');
            return false;
        }
        if (this._validationsService.isEmpty(this.type)) {
            this._commonService.showMessage('error', 'Please select Assessment type!');
            return false;
        }
        if (this._validationsService.isEmpty(this.question)) {
            this._commonService.showMessage('error', 'Question should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.scale)) {
            this._commonService.showMessage('error', 'Please select scale!');
            return false;
        }
        if (this._validationsService.isEmpty(this.assessmenttype)) {
            this._commonService.showMessage('error', 'Please select assessment!');
            return false;
        }
        if (this._validationsService.isEmpty(this.header)) {
            this._commonService.showMessage('error', 'Please select header!');
            return false;
        }
        var fields;
        if (!this._validationsService.isEmail(this.questionid)) {
            fields = {
                questionid: this.questionid,
                question: this.question,
                scaleid: this.scale,
                assessmenttypeid: this.assessmenttype,
                headerid: this.header,
                type: this.type
            };
        }
        else {
            fields = {
                question: this.question,
                scaleid: this.scale,
                assessmenttypeid: this.assessmenttype,
                headerid: this.header,
                type: this.type
            };
        }
        this.questionService.addQuestion(fields)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                // this._commonService.redirectTo('/admin/jd/');
                _this.questionid = '';
                _this.question = '';
                _this.scale = '';
                _this.assessmenttype = '';
                _this.header = '';
                _this.type = '';
                _this.getQuestionList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    QuestionComponent.prototype.editQuestion = function (q) {
        this.questionid = q._id;
        this.question = q.question;
        this.scale = q.scaleid._id;
        this.assessmenttype = q.assessmenttypeid._id;
        this.header = q.headerid._id;
        this.type = q.type;
        window.scrollTo(0, 0);
    };
    QuestionComponent.prototype.deleteQuestion = function (questionid) {
        var _this = this;
        this.questionService.deleteQuestion(questionid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getQuestionList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoShownModal'),
        __metadata("design:type", _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], QuestionComponent.prototype, "autoShownModal", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/admin/master/question/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.scss */ "./src/app/admin/master/question/question.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _JD_question_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            _JD_scale_services_scale_service__WEBPACK_IMPORTED_MODULE_6__["ScaleService"],
            _JD_header_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            _JD_assessment_type_assessment_type_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentTypeService"]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/question/question.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/master/question/question.module.ts ***!
  \**********************************************************/
/*! exports provided: QuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question.component */ "./src/app/admin/master/question/question.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/admin/share/share.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var router = [
    { path: '', component: _question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"] }
];
var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTablesModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"]
            ]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ })

}]);
//# sourceMappingURL=master-question-question-module.js.map