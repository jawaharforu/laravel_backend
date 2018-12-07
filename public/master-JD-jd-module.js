(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-JD-jd-module"],{

/***/ "./src/app/admin/master/JD/add-jd/add-jd.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/master/JD/add-jd/add-jd.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <!-- Card body -->\n    <div class=\"card-body\">\n        <!-- Default form subscription -->\n        <form (ngSubmit)=\"jdForm()\">\n            <p class=\"h4 text-center py-4 admin-title\">JD</p>\n            <input type=\"hidden\" [(ngModel)]=\"jdid\" name=\"jdid\" />\n            <div class=\"row\">\n                <div class=\"form-group col-md-7 col-sm-12\">\n                    <label for=\"defaultFormCardNameEx\" class=\"grey-text font-weight-light control-label col-md-3\">JD Name</label>\n                    <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control col-md-10\" [(ngModel)]=\"name\" name=\"name\">\n                </div>\n                <div class=\"col-md-5\">\n                    <input type=\"file\" class=\"btn file-choose \" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n                    <button type=\"button\" class=\"btn btn-upload\" mdbWavesEffect (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                        <i class=\"fa fa-cloud-upload mr-1\"></i> Upload JD\n                    </button>\n                </div>\n            </div>\n            <div class=\"form-group col-md-12 col-sm-12\">\n                <div class=\"row\">\n                    <label for=\"defaultFormCardJD\" class=\"grey-text font-weight-light\">Description</label>\n                    <ckeditor [(ngModel)]=\"description\" name=\"ckeditorContent\"></ckeditor>\n                </div>\n            </div>\n            <div class=\"col-md-12 feild-button\">\n                <button type=\"submit\" class=\"btn btn-primary btn-submit\" mdbWavesEffect>Submit</button>\n            </div>\n        </form>\n        <!-- Default form subscription -->\n    </div>\n    <!-- Card body -->\n</div>"

/***/ }),

/***/ "./src/app/admin/master/JD/add-jd/add-jd.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/master/JD/add-jd/add-jd.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 20px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 50px 30px;\n  margin-bottom: 55px; }\n\n.addproduct label {\n  font-size: 13px;\n  color: #000 !important; }\n\n.breadcrumb a, .breadcrumb-item.active {\n  font-size: 12px;\n  color: #fff; }\n\n.form-group {\n  margin-bottom: .5rem; }\n\n.form-check {\n  padding: 0px; }\n\n.addproduct .form-check label {\n  margin-right: 20px; }\n\n.addproduct .form-control {\n  font-size: 15px; }\n\n.addproduct .switch {\n  margin-top: 30px;\n  margin-left: 15px; }\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #54afc6;\n  border-radius: 0.25rem; }\n\n[type=\"radio\"]:checked + label:after, .switch label input[type=checkbox]:checked + .lever:after {\n  border-color: #54afc6;\n  background-color: #54afc6; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #a6dbe8; }\n\n.btn-add-feild {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important;\n  width: 20px;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 5px; }\n\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled):active,\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-add-feild.dropdown-toggle {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important; }\n\n.btn-add-feild .fa {\n  font-size: 25px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none;\n  margin: 0px;\n  margin-right: -15px;\n  margin-top: 20px; }\n\n.btn-primary.btn-submit:not([disabled]):not(.disabled):active,\n.btn-primary.btn-submit:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-submit.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  margin-top: 20px;\n  box-shadow: none; }\n\n[type=\"radio\"]:checked + label:before {\n  display: inline-block;\n  content: \"\";\n  z-index: 999;\n  width: 12px;\n  height: 12px;\n  border: 2px solid #fff;\n  margin-top: 6px;\n  margin-left: 6px; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border-color: #54afc6; }\n\n.form-control {\n  display: inline-block; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.feild-features {\n  max-width: 300px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.feild-button {\n  max-width: 100%; }\n\ninput.btn.file-choose {\n  padding: 0px;\n  margin: 0px;\n  color: #000;\n  box-shadow: none !important;\n  margin-top: 8px;\n  float: left;\n  max-width: 180px;\n  border: 1px solid #ccc; }\n\n.btn-upload {\n  padding: 7px;\n  margin: 0px;\n  color: #000;\n  box-shadow: none !important; }\n\n.btn-upload .fa {\n  margin: 0px; }\n\n.btn-upload {\n  padding: 5px;\n  margin: 2px;\n  color: #000;\n  box-shadow: none !important;\n  background: #f1ecec;\n  border: 1px solid #cacaca;\n  font-size: 11px;\n  margin-top: 6px; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important;\n  padding: 0;\n  line-height: 26px;\n  padding-top: 4px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 51px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete, span.btn-question {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.Question_model {\n  z-index: 99999;\n  background: #000; }\n\n.Question_model_container {\n  width: 90%;\n  background: #f6f6f6; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header.popup_modal-header {\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 20px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  width: 45%;\n  box-shadow: none;\n  border: none; }\n\n.popup_modal_content {\n  background: #f6f6f6; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header .admin-title_popup {\n  color: #494949;\n  font-weight: normal; }\n\n@media only screen and (max-width: 767px) {\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/admin/master/JD/add-jd/add-jd.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/master/JD/add-jd/add-jd.component.ts ***!
  \************************************************************/
/*! exports provided: AddJdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJdComponent", function() { return AddJdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _JD_services_jd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../JD/services/jd.service */ "./src/app/admin/master/JD/services/jd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddJdComponent = /** @class */ (function () {
    function AddJdComponent(activatedRoute, _commonService, _validationsService, jdService) {
        this.activatedRoute = activatedRoute;
        this._commonService = _commonService;
        this._validationsService = _validationsService;
        this.jdService = jdService;
        this.description = '';
        this.name = '';
        this.filename = '';
        this.jdid = '';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: this._commonService.jdUpload, itemAlias: 'file' });
    }
    AddJdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._commonService.loader(false);
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (_item, response, _status, _headers) {
            var res = JSON.parse(response);
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.description = res.data;
                _this.filename = res.filename;
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        };
        this.activatedRoute.params.subscribe(function (params) {
            _this.jdid = params['jdid'];
            if (!_this._validationsService.isEmpty(_this.jdid)) {
                _this.getJDById();
            }
        });
    };
    AddJdComponent.prototype.getJDById = function () {
        var _this = this;
        this.jdService.getJDById(this.jdid)
            .subscribe(function (res) {
            _this.description = res.data.description;
            _this.name = res.data.name;
            _this.jdid = res.data._id;
        });
    };
    AddJdComponent.prototype.jdForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.name)) {
            this._commonService.showMessage('error', 'JD Name should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.description.replace(/<[^>]*>/g, ''))) {
            this._commonService.showMessage('error', 'Description should not be empty!');
            return false;
        }
        var newJD;
        if (!this._validationsService.isEmail(this.jdid)) {
            newJD = {
                name: this.name,
                description: this.description,
                filename: this.filename,
                jdid: this.jdid
            };
        }
        else {
            newJD = {
                name: this.name,
                description: this.description,
                filename: this.filename
            };
        }
        this.jdService.addJD(newJD)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.jdid = '';
                _this.name = '';
                _this.description = '';
                _this.filename = '';
                _this._commonService.redirectTo('/admin/jd/list');
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    AddJdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-jd',
            template: __webpack_require__(/*! ./add-jd.component.html */ "./src/app/admin/master/JD/add-jd/add-jd.component.html"),
            styles: [__webpack_require__(/*! ./add-jd.component.scss */ "./src/app/admin/master/JD/add-jd/add-jd.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_4__["ValidationsService"],
            _JD_services_jd_service__WEBPACK_IMPORTED_MODULE_5__["JdService"]])
    ], AddJdComponent);
    return AddJdComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/master/JD/assigned-questions/assigned-questions.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center mt-2 product-list list-jd-q\">\n    <div class=\"col-md-12 \">\n        <!--Table-->\n        <table *ngIf=\"jdquestionList\" class=\"table table-hover table-responsive-md table-fixed\" datatable>\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-name\">Employee</th>\n                    <th class=\"label-name\">Question</th>\n                    <th class=\"label-name\">Scale</th>\n                    <th class=\"label-name\">Assessment</th>\n                    <th class=\"label-name\">Header</th>\n                </tr>\n            </thead>\n            <!--Table head-->\n            <!--Table body-->\n            <tbody>\n                <tr *ngFor=\"let q of jdquestionList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-name\">{{ q.questionid.type }}</td>\n                    <td class=\"col-name\">{{ q.questionid.question }}</td>\n                    <td class=\"col-name\">{{ q.questionid.scaleid.options | arrayToString:',' }}</td>\n                    <td class=\"col-name\">{{ q.questionid.assessmenttypeid.name }}</td>\n                    <td class=\"col-name\">{{ q.questionid.headerid.headername }}</td>\n                </tr>\n            </tbody>\n            <!--Table body-->\n        </table>\n        <!--Table-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/master/JD/assigned-questions/assigned-questions.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/master/JD/assigned-questions/assigned-questions.component.ts ***!
  \************************************************************************************/
/*! exports provided: AssignedQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedQuestionsComponent", function() { return AssignedQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_services_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question/services/question.service */ "./src/app/admin/master/JD/question/services/question.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssignedQuestionsComponent = /** @class */ (function () {
    function AssignedQuestionsComponent(questionService) {
        this.questionService = questionService;
        this.jdquestionList = '';
    }
    AssignedQuestionsComponent.prototype.ngOnInit = function () {
        this.getQuestionToJDList();
    };
    AssignedQuestionsComponent.prototype.getQuestionToJDList = function () {
        var _this = this;
        this.questionService.getQuestionToJDListWithQu(this.getjdid)
            .subscribe(function (res) {
            _this.jdquestionList = res.data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AssignedQuestionsComponent.prototype, "getjdid", void 0);
    AssignedQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assigned-questions',
            template: __webpack_require__(/*! ./assigned-questions.component.html */ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.html"),
            styles: [__webpack_require__(/*! ./assigned-questions.component.scss */ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.scss")]
        }),
        __metadata("design:paramtypes", [_question_services_question_service__WEBPACK_IMPORTED_MODULE_1__["QuestionService"]])
    ], AssignedQuestionsComponent);
    return AssignedQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/jd-list/jd-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/master/JD/jd-list/jd-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-body\">\n        <p class=\"h4 text-center py-4 admin-title\">Assign Questions</p>\n        <table class=\"table table-bordered table-striped\" *ngIf=\"jdList\" datatable>\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-name\">Name</th>\n                    <th class=\"label-action\">Action</th>\n                    <th class=\"label-action\">Assigned Questions</th>\n                </tr>\n            </thead>\n            <!--Table head-->\n            <!--Table body-->\n            <tbody>\n                <tr *ngFor=\"let j of jdList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-name\">{{ j.name }}</td>\n                    <td class=\"col-action\">\n                        <span mdbTooltip=\"Edit\" placement=\"top\" (click)=\"editJD(j)\" class=\"btn-edit\" mdbWavesEffect>\n                            Edit </span> /\n                        <span mdbTooltip=\"Delete\" placement=\"top\" (click)=\"deleteJD(j._id)\" class=\"btn-delete\" mdbWavesEffect>\n                            Delete </span>\n                        <!-- <span mdbTooltip=\"Assign Question\" placement=\"top\" (click)=\"showModal('a',j._id)\" class=\"btn-question\" mdbWavesEffect>\n                            Assign Question\n                        </span> -->\n                    </td>\n                    <td class=\"col-action\">\n                        <span mdbTooltip=\"Assign Question\" placement=\"top\" (click)=\"showModal('ad',j._id)\" class=\"btn-question\" mdbWavesEffect>\n                            View Assigned Question\n                        </span>\n                    </td>\n                </tr>\n            </tbody>\n            <!--Table body-->\n        </table>\n\n        <!-- <div *ngIf=\"isModalShown\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('a')\" mdbModal #autoShownModal=\"mdb-modal\"\n            class=\"modal fade Question_model\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n            aria-hidden=\"true\" style=\"overflow: auto;\">\n            <div class=\"modal-dialog modal-notify modal-primary modal-fluid Question_model_container\" role=\"document\">\n                <div class=\"modal-content popup_modal_content\">\n                    <div class=\"modal-header popup_modal-header\">\n                        <p class=\"heading lead admin-title_popup\">Assign Questions</p>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideModal()\">\n                            <span aria-hidden=\"true\" class=\"black-text\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body popup_modal_body\">\n                        <div class=\"\">\n                            <app-question-assign [getjdid]='passjdid'></app-question-assign>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n\n        <div *ngIf=\"isModalShownQuestion\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('ad')\" mdbModal\n            #autoShownModal=\"mdb-modal\" class=\"modal fade Question_model\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\"\n            aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"overflow: auto;\">\n            <div class=\"modal-dialog modal-notify modal-primary modal-fluid Question_model_container\" role=\"document\">\n                <div class=\"modal-content popup_modal_content\">\n                    <div class=\"modal-header popup_modal-header\">\n                        <p class=\"heading lead admin-title_popup\">Assigned Questions</p>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"hideModal()\">\n                            <span aria-hidden=\"true\" class=\"black-text\">×</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body popup_modal_body\">\n                        <div class=\"\">\n                            <app-assigned-questions [getjdid]='passjdid'></app-assigned-questions>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/JD/jd-list/jd-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/master/JD/jd-list/jd-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 20px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 30%; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px;\n  margin-bottom: 55px; }\n\n.addproduct label {\n  font-size: 13px;\n  color: #000 !important; }\n\n.breadcrumb a, .breadcrumb-item.active {\n  font-size: 12px;\n  color: #fff; }\n\n.form-group {\n  margin-bottom: .5rem; }\n\n.form-check {\n  padding: 0px; }\n\n.addproduct .form-check label {\n  margin-right: 20px; }\n\n.addproduct .form-control {\n  font-size: 15px; }\n\n.addproduct .switch {\n  margin-top: 30px;\n  margin-left: 15px; }\n\n.breadcrumb {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #54afc6;\n  border-radius: 0.25rem; }\n\n[type=\"radio\"]:checked + label:after, .switch label input[type=checkbox]:checked + .lever:after {\n  border-color: #54afc6;\n  background-color: #54afc6; }\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #a6dbe8; }\n\n.btn-add-feild {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important;\n  width: 20px;\n  padding: 0px;\n  margin: 0px;\n  margin-top: 5px; }\n\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled):active,\n.btn-primary.btn-add-feild:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-add-feild.dropdown-toggle {\n  background: none !important;\n  box-shadow: none;\n  color: #54afc6 !important; }\n\n.btn-add-feild .fa {\n  font-size: 25px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none;\n  margin: 0px;\n  margin-right: -15px;\n  margin-top: 20px; }\n\n.btn-primary.btn-submit:not([disabled]):not(.disabled):active,\n.btn-primary.btn-submit:not([disabled]):not(.disabled).active,\n.show > .btn-primary.btn-submit.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  margin-top: 20px;\n  box-shadow: none; }\n\n[type=\"radio\"]:checked + label:before {\n  display: inline-block;\n  content: \"\";\n  z-index: 999;\n  width: 12px;\n  height: 12px;\n  border: 2px solid #fff;\n  margin-top: 6px;\n  margin-left: 6px; }\n\n[type=\"radio\"]:not(:checked) + label:before, [type=\"radio\"]:not(:checked) + label:after {\n  border-color: #54afc6; }\n\n.form-control {\n  display: inline-block; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.feild-features {\n  max-width: 300px;\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.feild-button {\n  max-width: 100%; }\n\ninput.btn.file-choose {\n  padding: 0px;\n  margin: 0px;\n  color: #000;\n  box-shadow: none !important;\n  padding-top: 8px;\n  float: left;\n  max-width: 180px; }\n\n.btn-upload {\n  padding: 7px;\n  margin: 0px;\n  color: #000;\n  box-shadow: none !important; }\n\n.btn-upload .fa {\n  margin: 0px; }\n\n.btn-upload {\n  padding: 5px;\n  margin: 0px;\n  color: #000;\n  box-shadow: none !important;\n  margin-top: 3px;\n  background: #dedede;\n  border: 1px solid #bbb7b7;\n  font-size: 12px; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important;\n  padding: 0;\n  line-height: 26px;\n  padding-top: 4px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc;\n  min-width: 240px;\n  line-height: 30px; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete, span.btn-question {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.Question_model {\n  z-index: 99999;\n  background: #000; }\n\n.Question_model_container {\n  width: 90%;\n  background: #f6f6f6; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header.popup_modal-header {\n  padding: 5px 15px !important;\n  text-align: left !important;\n  font-size: 20px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #666;\n  width: 45%;\n  box-shadow: none;\n  border: none; }\n\n.popup_modal_content {\n  background: #f6f6f6; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header .admin-title_popup {\n  color: #fff;\n  font-weight: normal; }\n\n@media only screen and (max-width: 767px) {\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/admin/master/JD/jd-list/jd-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/master/JD/jd-list/jd-list.component.ts ***!
  \**************************************************************/
/*! exports provided: JdListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JdListComponent", function() { return JdListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _JD_services_jd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../JD/services/jd.service */ "./src/app/admin/master/JD/services/jd.service.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JdListComponent = /** @class */ (function () {
    function JdListComponent(_commonService, jdService) {
        this._commonService = _commonService;
        this.jdService = jdService;
        this.passjdid = '';
        this.isModalShown = false;
        this.isModalShownQuestion = false;
    }
    JdListComponent.prototype.ngOnInit = function () {
        this.getJDList();
    };
    JdListComponent.prototype.getJDList = function () {
        var _this = this;
        this.jdService.getJD()
            .subscribe(function (res) {
            _this.jdList = res.data;
        });
    };
    JdListComponent.prototype.editJD = function (j) {
        this._commonService.redirectTo("/admin/jd/edit/" + j._id);
    };
    JdListComponent.prototype.deleteJD = function (jdid) {
        var _this = this;
        this.jdService.deleteJD(jdid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getJDList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    JdListComponent.prototype.showModal = function (which, jdid) {
        if (which === 'a') {
            this.isModalShown = true;
        }
        else {
            this.isModalShownQuestion = true;
        }
        this.passjdid = jdid;
    };
    JdListComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    JdListComponent.prototype.onHidden = function (which) {
        if (which === 'a') {
            this.isModalShown = false;
        }
        else {
            this.isModalShownQuestion = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoShownModal'),
        __metadata("design:type", _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"])
    ], JdListComponent.prototype, "autoShownModal", void 0);
    JdListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jd-list',
            template: __webpack_require__(/*! ./jd-list.component.html */ "./src/app/admin/master/JD/jd-list/jd-list.component.html"),
            styles: [__webpack_require__(/*! ./jd-list.component.scss */ "./src/app/admin/master/JD/jd-list/jd-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"],
            _JD_services_jd_service__WEBPACK_IMPORTED_MODULE_2__["JdService"]])
    ], JdListComponent);
    return JdListComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/jd.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin/master/JD/jd.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xl-3 col-lg-11 col-md-12 col-sm-12\">\n      <app-submenu></app-submenu>\n    </div>\n    <div class=\"col-xl-9 col-lg-11 col-md-12 col-sm-12\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/JD/jd.component.scss":
/*!***************************************************!*\
  !*** ./src/app/admin/master/JD/jd.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/master/JD/jd.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/master/JD/jd.component.ts ***!
  \*************************************************/
/*! exports provided: JdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JdComponent", function() { return JdComponent; });
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

var JdComponent = /** @class */ (function () {
    function JdComponent() {
    }
    JdComponent.prototype.ngOnInit = function () {
    };
    JdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jd',
            template: __webpack_require__(/*! ./jd.component.html */ "./src/app/admin/master/JD/jd.component.html"),
            styles: [__webpack_require__(/*! ./jd.component.scss */ "./src/app/admin/master/JD/jd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JdComponent);
    return JdComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/jd.module.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/master/JD/jd.module.ts ***!
  \**********************************************/
/*! exports provided: JdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JdModule", function() { return JdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _add_jd_add_jd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-jd/add-jd.component */ "./src/app/admin/master/JD/add-jd/add-jd.component.ts");
/* harmony import */ var _question_question_assign_question_assign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question/question-assign/question-assign.component */ "./src/app/admin/master/JD/question/question-assign/question-assign.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../share/share.module */ "./src/app/admin/share/share.module.ts");
/* harmony import */ var _jd_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./jd.component */ "./src/app/admin/master/JD/jd.component.ts");
/* harmony import */ var _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./submenu/submenu.component */ "./src/app/admin/master/JD/submenu/submenu.component.ts");
/* harmony import */ var _jd_list_jd_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jd-list/jd-list.component */ "./src/app/admin/master/JD/jd-list/jd-list.component.ts");
/* harmony import */ var _assigned_questions_assigned_questions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assigned-questions/assigned-questions.component */ "./src/app/admin/master/JD/assigned-questions/assigned-questions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var router = [
    {
        path: '',
        component: _jd_component__WEBPACK_IMPORTED_MODULE_10__["JdComponent"],
        children: [
            { path: '', component: _add_jd_add_jd_component__WEBPACK_IMPORTED_MODULE_6__["AddJdComponent"] },
            { path: 'edit/:jdid', component: _add_jd_add_jd_component__WEBPACK_IMPORTED_MODULE_6__["AddJdComponent"] },
            { path: 'list', component: _jd_list_jd_list_component__WEBPACK_IMPORTED_MODULE_12__["JdListComponent"] },
            { path: 'assignquestion', component: _question_question_assign_question_assign_component__WEBPACK_IMPORTED_MODULE_7__["QuestionAssignComponent"] }
        ]
    }
];
var JdModule = /** @class */ (function () {
    function JdModule() {
    }
    JdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_5__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                _share_share_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _add_jd_add_jd_component__WEBPACK_IMPORTED_MODULE_6__["AddJdComponent"],
                _question_question_assign_question_assign_component__WEBPACK_IMPORTED_MODULE_7__["QuestionAssignComponent"],
                _jd_component__WEBPACK_IMPORTED_MODULE_10__["JdComponent"],
                _submenu_submenu_component__WEBPACK_IMPORTED_MODULE_11__["SubmenuComponent"],
                _jd_list_jd_list_component__WEBPACK_IMPORTED_MODULE_12__["JdListComponent"],
                _assigned_questions_assigned_questions_component__WEBPACK_IMPORTED_MODULE_13__["AssignedQuestionsComponent"]
            ]
        })
    ], JdModule);
    return JdModule;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/question/question-assign/question-assign.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/master/JD/question/question-assign/question-assign.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\n    <div class=\"col-md-12 \">\n        <!-- Card -->\n        <div class=\"card mb-1\">\n            <!-- Card body -->\n            <div class=\"card-body \">\n\n        <form (ngSubmit)=\"questionForm()\">\n            <input type=\"hidden\" [(ngModel)]=\"questionid\" name=\"questionid\">\n            <p class=\"h4 text-center py-4 admin-title\">Assign Question</p>\n            <!-- Default input name -->\n            <div class=\"row no-padding\">\n              <select class=\"browser-default form-control col-md-6\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"jdid\" name=\"jdid\" (change)=\"getQuestions()\">\n                <option value=\"\" disabled>--Select JD--</option>\n                <option *ngFor=\"let j of jdList\" [value]=\"j._id\">{{ j.name }}</option>\n              </select>\n            </div>\n         \n           \n            <div class=\"row\">\n                <div class=\"col-md-12 questionwrapper\">\n                 \n                     \n                                <div class=\"col-md-9\">\n                                    <input type=\"text\" id=\"defaultFormCardNameEx\" class=\"form-control\" [(ngModel)]=\"question\" name=\"question\" placeholder=\"Enter Question\">\n                                </div>\n                                <div class=\"row no-padding\">\n                                        <div class=\"col-md-6\">\n                                        <select class=\"browser-default form-control \" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"type\" name=\"type\">\n                                            <option value=\"\" disabled>--Select Employee--</option>\n                                            <option value=\"md\">MD</option>\n                                            <option value=\"admin\">Admin</option>\n                                            <option value=\"commonreception\">Common Reception</option>\n                                            <option value=\"secretary\">Department/Secretary</option>\n                                            <option value=\"hr\">HR</option>\n                                            <option value=\"others\">Others</option>\n                                            <!-- <option *ngFor=\"let s of scaleList\" [value]=\"s._id\">{{ s.options | arrayToString:',' }}</option> -->\n                                        </select>\n                                        </div>\n                                        <div class=\"col-md-6\">\n                                                <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"scale\" name=\"designation\">\n                                                    <option value=\"\" disabled>--Select Scale--</option>\n                                                    <option *ngFor=\"let s of scaleList\" [value]=\"s._id\">{{ s.options | arrayToString:',' }}</option>\n                                                </select>\n                                                <a (click)=\"showModal('s')\" class=\"btn_add\">\n                                                    <i class=\"fa fa-plus\"></i>\n                                                </a>\n                                            </div>\n                                    </div>\n\n                               <div class=\"row no-padding\">\n                      \n                                <div class=\"col-md-6\">\n                                    <select class=\"browser-default form-control \" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"assessmenttype\" name=\"assessmenttype\"\n                                        (change)=\"getHeader()\">\n                                        <option value=\"\" disabled>--Select Assessment--</option>\n                                        <option *ngFor=\"let a of assessmentTypeList\" [value]=\"a._id\">{{ a.name }}</option>\n                                    </select>\n                                    <a (click)=\"showModal('a')\" class=\"btn_add\">\n                                        <i class=\"fa fa-plus\"></i>\n                                    </a>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <select class=\"browser-default form-control\" id=\"defaultFormCardDesiEx\" [(ngModel)]=\"header\" name=\"designation\">\n                                        <option value=\"\" disabled>--Select Header--</option>\n                                        <option *ngFor=\"let h of headerList\" [value]=\"h._id\">{{ h.headername }}</option>\n                                    </select>\n                                    <a (click)=\"showModal('h')\" class=\"btn_add\">\n                                        <i class=\"fa fa-plus\"></i>\n                                    </a>\n                                </div>\n                            </div>\n                            </div>\n                        </div>\n                 \n                <div class=\"float-right\">\n                    <button type=\"submit\" class=\"btn btn-primary  btn_additem\">\n                        Submit</button>\n                </div>\n           \n        </form>\n    </div>\n</div>\n</div></div>\n<div class=\"justify-content-md-center mt-2 product-list list-jd-q\">\n    <div class=\"col-md-12 \">\n        <!--Table-->\n        <table *ngIf=\"questionList\" class=\"table table-hover table-responsive-md table-fixed\" datatable>\n            <!--Table head-->\n            <thead class=\"mdb-color darken-3\">\n                <tr class=\"text-white\">\n                    <th class=\"label-no\">#</th>\n                    <th class=\"label-name\">Employee</th>\n                    <th class=\"label-name\">Question</th>\n                    <th class=\"label-name\">Scale</th>\n                    <th class=\"label-name\">Assessment</th>\n                    <th class=\"label-name\">Header</th>\n                    <th class=\"label-action\">Assign</th>\n                </tr>\n            </thead>\n            <!--Table head-->\n            <!--Table body-->\n            <tbody>\n                <tr *ngFor=\"let q of questionList; let i = index\">\n                    <th class=\"col-no\" scope=\"row\">{{ i + 1 }}</th>\n                    <td class=\"col-name\">{{ q.type }}</td>\n                    <td class=\"col-name\">{{ q.question }}</td>\n                    <td class=\"col-name\">{{ q.scaleid.options | arrayToString:',' }}</td>\n                    <td class=\"col-name\">{{ q.assessmenttypeid.name }}</td>\n                    <td class=\"col-name\">{{ q.headerid.headername }}</td>\n                    <td class=\"col-status\">\n                        <div class=\"form-group\">\n                            <input type=\"checkbox\" class=\"filled-in\" id=\"checkbox{{q._id}}\" [checked]=\"checkQuestion(q._id)\" (change)=\"updateStatus($event.target.checked,q)\">\n                            <label for=\"checkbox{{q._id}}\"></label>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n            <!--Table body-->\n        </table>\n        <!--Table-->\n    </div>\n</div>\n<div *ngIf=\"isModalShownScale\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('s')\" mdbModal #autoShownModal=\"mdb-modal\"\n    class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"\n    style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Scale</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('s')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-scale (getScale)=\"getScaleList()\"></app-scale>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"isModalShownAssess\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('a')\" mdbModal\n    #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\" style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Assessment Type</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('a')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-assessment-type (getAssessmentType)=\"getAssessmenttypeList()\"></app-assessment-type>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"isModalShownHeader\" [config]=\"{ show: true, ignoreBackdropClick: true }\" (onHidden)=\"onHidden('h')\" mdbModal\n    #autoShownModal=\"mdb-modal\" class=\"modal fade\" id=\"centralModalSuccess\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\" style=\"overflow: auto;\">\n    <div class=\"modal-dialog modal-notify modal-primary modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <p class=\"heading lead\">Header</p>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onHidden('h')\">\n                    <span aria-hidden=\"true\" class=\"white-text\">×</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"\">\n                    <app-header (getHeader)=\"getHeaderList()\"></app-header>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/JD/question/question-assign/question-assign.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/admin/master/JD/question/question-assign/question-assign.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  margin-left: -20px;\n  border: none;\n  width: 20%; }\n\n.btn_add {\n  color: inherit;\n  text-decoration: none;\n  width: 25px;\n  height: 25px;\n  float: right !important;\n  margin: 0px;\n  box-shadow: none;\n  background: #54afc6;\n  border-radius: 50%;\n  font-size: 15px;\n  margin-top: 5px;\n  margin-left: 15px; }\n\n.no-padding {\n  margin: 0px !important;\n  margin-bottom: 10px !important; }\n\n.btn_add .fa {\n  color: #ffffff;\n  margin-left: 7px;\n  margin-top: 5px; }\n\n.btn_additem,\n.btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  padding: 8px 15px;\n  background: #f38e00 !important;\n  box-shadow: none;\n  font-size: 13px;\n  margin: 0px;\n  float: right;\n  margin-top: 15px;\n  margin-right: -15px; }\n\n.btn_additem .fa {\n  margin: 0px; }\n\n.no-padding {\n  padding-right: 0px; }\n\n.list-jd-q {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff; }\n\n.product-list .dataTables_wrapper .dataTables_length, .product-list .dataTables_wrapper .dataTables_filter, .product-list .dataTables_wrapper .dataTables_info, .product-list .dataTables_wrapper .dataTables_processing, .product-list .dataTables_wrapper .dataTables_paginate {\n  color: #333333;\n  font-size: 13px; }\n\n.modal.fade.in .modal-dialog {\n  margin-top: 130px; }\n\ndiv#centralModalSuccess {\n  z-index: 999999; }\n\n.questionwrapper {\n  background: #dedddd;\n  padding: 15px 0px; }\n\n.form-control {\n  font-size: 14px;\n  margin-bottom: 15px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border-right: 1px solid #ccc; }\n\n.col-action {\n  line-height: 30px; }\n\n.label-name, .label-no, .label-Scale, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border-right: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important;\n  border-bottom: none; }\n\n.label-action {\n  border: none; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable.no-footer {\n  border: 1px solid #dbe2e4; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer; }\n\n.col-status .form-group {\n  margin: 0px; }\n\n.col-status .form-group label {\n  margin-top: 5px;\n  margin-left: 15px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:not(:checked) + label:after {\n  background-color: transparent;\n  border-color: #5a5a5a;\n  top: 0;\n  z-index: 0;\n  border: 1px solid #ccc; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 5px;\n  height: 9px;\n  border-color: transparent #666 #666 transparent;\n  margin-top: 3px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"]:checked + label:after {\n  top: 0;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  z-index: 0; }\n\n.modal-dialog.modal-notify .heading {\n  color: #fff;\n  background: #666;\n  margin-left: -16px;\n  margin-top: -16px;\n  width: 30%; }\n\n.modal-dialog.modal-notify.modal-primary .modal-header {\n  background: transparent;\n  box-shadow: none; }\n\nbutton.close .white-text {\n  margin-left: -5px; }\n\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px);\n  /* width: 75%;*/\n  float: left;\n  font-size: 12px;\n  padding: 0px;\n  width: calc(100% - 35px); }\n\n.btn_add {\n  color: inherit;\n  text-decoration: none;\n  width: 25px;\n  height: 25px;\n  float: right !important;\n  margin: 0px;\n  box-shadow: none;\n  background: #54afc6;\n  border-radius: 50%;\n  font-size: 15px;\n  margin-top: 5px; }\n\n[type=\"checkbox\"][class*=\"filled-in\"] + label:after {\n  border-radius: 2px;\n  height: 15px;\n  width: 15px; }\n\nselect.browser-default.form-control.col-md-3.ng-valid.ng-dirty.ng-touched {\n  font-size: 14px; }\n\np.h4.text-center.py-4.admin-title {\n  color: #494949;\n  font-weight: normal;\n  padding-top: 15px !important;\n  text-align: left !important;\n  font-size: 16px;\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 30px;\n  padding-bottom: 10px !important;\n  background: #ffffff;\n  border: none;\n  margin-left: -20px;\n  width: 24%; }\n\n.card {\n  position: relative;\n  padding: 25px 30px 25px 30px; }\n\n.form-control.col-md-10 {\n  max-width: 300px; }\n\n.card .card-body {\n  background: #f6f6f6;\n  box-shadow: none; }\n\n.add-faqCategory label {\n  font-size: 13px;\n  color: #000 !important;\n  line-height: 28px;\n  padding: 0px; }\n\n.btn-submit,\n.btn-outline-purple:not([disabled]):not(.disabled):active,\n.btn-outline-purple:not([disabled]):not(.disabled).active,\n.show > .btn-outline-purple.dropdown-toggle {\n  background-color: #f38e00 !important;\n  color: #fff !important;\n  font-size: 14px;\n  padding: 5px 15px;\n  float: right;\n  border: none !important;\n  box-shadow: none; }\n\nlabel {\n  font-size: 13px;\n  color: #000 !important; }\n\n.label-Department {\n  padding: 0px;\n  line-height: 30px; }\n\ntable.table th, table.table td {\n  padding-top: 5px;\n  padding-bottom: 5px; }\n\n.col-no {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.col-name {\n  font-size: 13px;\n  color: #000;\n  font-weight: 400;\n  line-height: 30px;\n  border: 1px solid #ccc; }\n\n.col-action {\n  border: 1px solid #ccc; }\n\n.label-name, .label-no, .label-status, .label-action {\n  font-size: 13px;\n  color: #666;\n  font-weight: 300;\n  border: 1px solid #ccc;\n  padding-top: 1.1rem !important;\n  padding-bottom: 1rem !important; }\n\n.mdb-color.darken-3 {\n  background-color: #f9f6f6 !important;\n  border: 1px solid #ccc; }\n\ntable.dataTable thead th {\n  border-bottom: 1px solid #dbe2e4; }\n\n.dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {\n  color: #666;\n  font-size: 13px !important; }\n\nspan.btn-edit, span.btn-delete {\n  font-size: 13px;\n  color: #54afc6;\n  font-weight: 500;\n  cursor: pointer;\n  line-height: 30px; }\n\n.scale-list {\n  border: 1px solid #ccc;\n  padding: 25px;\n  background: #fff; }\n\n@media only screen and (max-width: 768px) {\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  .btn-edit .fa, .btn-delete .fa {\n    display: none; }\n  button.btn.btn-danger.waves-light.btn-delete,\n  button.btn.btn-primary.waves-light.btn-edit {\n    padding: 6px 12px;\n    margin-top: 0px; }\n  .col-name {\n    line-height: normal;\n    width: 60%; }\n  table.table th, table.table td {\n    padding-top: 5px;\n    padding-bottom: 5px; } }\n"

/***/ }),

/***/ "./src/app/admin/master/JD/question/question-assign/question-assign.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/master/JD/question/question-assign/question-assign.component.ts ***!
  \***************************************************************************************/
/*! exports provided: QuestionAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAssignComponent", function() { return QuestionAssignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/question.service */ "./src/app/admin/master/JD/question/services/question.service.ts");
/* harmony import */ var _header_services_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/services/header.service */ "./src/app/admin/master/JD/header/services/header.service.ts");
/* harmony import */ var _scale_services_scale_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../scale/services/scale.service */ "./src/app/admin/master/JD/scale/services/scale.service.ts");
/* harmony import */ var _assessment_type_assessment_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assessment-type/assessment-type.service */ "./src/app/admin/master/JD/assessment-type/assessment-type.service.ts");
/* harmony import */ var _services_jd_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/jd.service */ "./src/app/admin/master/JD/services/jd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var QuestionAssignComponent = /** @class */ (function () {
    function QuestionAssignComponent(_validationsService, _commonService, questionService, scaleService, headerService, assessmentTypeService, jdService) {
        this._validationsService = _validationsService;
        this._commonService = _commonService;
        this.questionService = questionService;
        this.scaleService = scaleService;
        this.headerService = headerService;
        this.assessmentTypeService = assessmentTypeService;
        this.jdService = jdService;
        this.isModalShownScale = false;
        this.isModalShownHeader = false;
        this.isModalShownAssess = false;
        this.questionid = '';
        this.question = '';
        this.scale = '';
        this.assessmenttype = '';
        this.header = '';
        this.questionList = '';
        this.scaleList = '';
        this.headerList = '';
        this.assessmentTypeList = '';
        this.type = '';
        this.jdid = '';
        this.jdquestionList = [];
    }
    QuestionAssignComponent.prototype.ngOnInit = function () {
        this.getJDList();
        this.getScaleList();
        this.getAssessmenttypeList();
        this.getQuestionList();
    };
    QuestionAssignComponent.prototype.getQuestionToJDList = function () {
        var _this = this;
        this.questionService.getQuestionToJDList(this.jdid)
            .subscribe(function (res) {
            _this.jdquestionList = [];
            for (var _i = 0, _a = res.data; _i < _a.length; _i++) {
                var prop = _a[_i];
                _this.jdquestionList.push(prop.questionid);
            }
        });
    };
    QuestionAssignComponent.prototype.getJDList = function () {
        var _this = this;
        this.jdService.getJD()
            .subscribe(function (res) {
            _this.jdList = res.data;
        });
    };
    QuestionAssignComponent.prototype.getQuestions = function () {
        if (this._validationsService.isEmpty(this.jdid)) {
            this._commonService.showMessage('error', 'JD should select!');
            return false;
        }
        this.getQuestionToJDList();
    };
    QuestionAssignComponent.prototype.getQuestionList = function () {
        var _this = this;
        this.questionService.getQuestionList()
            .subscribe(function (res) {
            _this.questionList = res.data;
        });
    };
    QuestionAssignComponent.prototype.getScaleList = function () {
        var _this = this;
        this.scaleService.getScaleList()
            .subscribe(function (res) {
            _this.scaleList = res.data;
        });
    };
    QuestionAssignComponent.prototype.getAssessmenttypeList = function () {
        var _this = this;
        this.assessmentTypeService.getAssessmenttype()
            .subscribe(function (res) {
            _this.assessmentTypeList = res.data;
        });
    };
    QuestionAssignComponent.prototype.getHeader = function () {
        if (this._validationsService.isEmpty(this.assessmenttype)) {
            this._commonService.showMessage('error', 'Assessmenttype should not be empty!');
            return false;
        }
        this.getHeaderList();
    };
    QuestionAssignComponent.prototype.getHeaderList = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.assessmenttype)) {
            this._commonService.showMessage('error', 'Assessmenttype should not be empty!');
            return false;
        }
        this.headerService.getHeaderByAssessmenttype(this.assessmenttype)
            .subscribe(function (res) {
            _this.headerList = res.data;
        });
    };
    QuestionAssignComponent.prototype.checkQuestion = function (questionid) {
        return this.jdquestionList.includes(questionid);
    };
    QuestionAssignComponent.prototype.showModal = function (modal) {
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
    QuestionAssignComponent.prototype.hideModal = function () {
        this.autoShownModal.hide();
    };
    QuestionAssignComponent.prototype.onHidden = function (modal) {
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
    QuestionAssignComponent.prototype.questionForm = function () {
        var _this = this;
        if (this._validationsService.isEmpty(this.question)) {
            this._commonService.showMessage('error', 'Question should not be empty!');
            return false;
        }
        if (this._validationsService.isEmpty(this.type)) {
            this._commonService.showMessage('error', 'Pleasse select Employee!');
            return false;
        }
        if (this._validationsService.isEmpty(this.scale)) {
            this._commonService.showMessage('error', 'Pleasse select scale!');
            return false;
        }
        if (this._validationsService.isEmpty(this.assessmenttype)) {
            this._commonService.showMessage('error', 'Pleasse select assessment!');
            return false;
        }
        if (this._validationsService.isEmpty(this.header)) {
            this._commonService.showMessage('error', 'Pleasse select header!');
            return false;
        }
        if (this._validationsService.isEmpty(this.type)) {
            this._commonService.showMessage('error', 'Pleasse select Employee!');
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
                _this.getQuestionToJDList();
                _this.getQuestionList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    QuestionAssignComponent.prototype.editQuestion = function (q) {
        this.questionid = q._id;
        this.question = q.question;
        this.scale = q.scaleid;
        this.assessmenttype = q.assessmenttypeid;
        this.header = q.headerid;
        this.type = q.type;
        window.scrollTo(0, 0);
    };
    QuestionAssignComponent.prototype.deleteQuestion = function (questionid) {
        var _this = this;
        this.questionService.deleteQuestion(questionid)
            .subscribe(function (res) {
            if (res.success) {
                _this._commonService.showMessage('success', res.msg);
                _this.getQuestionToJDList();
                _this.getQuestionList();
            }
            else {
                _this._commonService.showMessage('error', res.msg);
            }
        });
    };
    QuestionAssignComponent.prototype.updateStatus = function (event, q) {
        var _this = this;
        if (this._validationsService.isEmpty(this.jdid)) {
            this._commonService.showMessage('error', 'JD should select!');
            return false;
        }
        if (event === true) {
            var qjd = {
                jdid: this.jdid,
                questionid: q._id
            };
            this.questionService.setQuestionsToJD(qjd)
                .subscribe(function (res) {
                if (res.success) {
                    _this._commonService.showMessage('success', res.msg);
                    // this.getQuestionToJDList();
                }
                else {
                    _this._commonService.showMessage('error', res.msg);
                }
            });
        }
        else {
            this.questionService.deleteQuestionsToJD(this.jdid + '::' + q._id)
                .subscribe(function (res) {
                if (res.success) {
                    _this._commonService.showMessage('success', res.msg);
                    // this.getQuestionToJDList();
                }
                else {
                    _this._commonService.showMessage('error', res.msg);
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('autoShownModal'),
        __metadata("design:type", _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_1__["ModalDirective"])
    ], QuestionAssignComponent.prototype, "autoShownModal", void 0);
    QuestionAssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-assign',
            template: __webpack_require__(/*! ./question-assign.component.html */ "./src/app/admin/master/JD/question/question-assign/question-assign.component.html"),
            styles: [__webpack_require__(/*! ./question-assign.component.scss */ "./src/app/admin/master/JD/question/question-assign/question-assign.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validations_service__WEBPACK_IMPORTED_MODULE_3__["ValidationsService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"],
            _services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            _scale_services_scale_service__WEBPACK_IMPORTED_MODULE_6__["ScaleService"],
            _header_services_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"],
            _assessment_type_assessment_type_service__WEBPACK_IMPORTED_MODULE_7__["AssessmentTypeService"],
            _services_jd_service__WEBPACK_IMPORTED_MODULE_8__["JdService"]])
    ], QuestionAssignComponent);
    return QuestionAssignComponent;
}());



/***/ }),

/***/ "./src/app/admin/master/JD/submenu/submenu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/master/JD/submenu/submenu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card submenu-wrapper\">\n    <div class=\"menu-tile\">JD</div>\n    <ul class=\"submenu-ul\">\n      <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/jd']\" class=\"waves-effect\" >Create JD</a></li>\n      <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/jd/list']\" class=\"waves-effect\" >List</a></li>\n      <li class=\"submenu-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/admin/jd/assignquestion']\" class=\"waves-effect\" >Assign Questions</a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/master/JD/submenu/submenu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/master/JD/submenu/submenu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".submenu-wrapper {\n  height: 70vh;\n  overflow: hidden; }\n\n.menu-tile {\n  padding: 15px;\n  font-size: 18px;\n  color: #54afc6;\n  border-bottom: 1px solid #eae8e8; }\n\n.submenu-ul {\n  list-style: none;\n  padding: 0px; }\n\nli.submenu-item a {\n  display: block;\n  display: block;\n  line-height: 50px;\n  padding: 0px 15px;\n  font-size: 14px;\n  color: #666;\n  border-bottom: 1px solid #eae8e8; }\n\nli.submenu-item.active a, li.submenu-item a:hover {\n  background: #54afc6;\n  color: #fff; }\n\nli.submenu-item.active a::after, li.submenu-item a:hover::after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\f0d9\";\n  color: #fff;\n  right: 0px;\n  position: absolute;\n  font-size: 50px;\n  margin-right: -1px; }\n"

/***/ }),

/***/ "./src/app/admin/master/JD/submenu/submenu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/master/JD/submenu/submenu.component.ts ***!
  \**************************************************************/
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
            template: __webpack_require__(/*! ./submenu.component.html */ "./src/app/admin/master/JD/submenu/submenu.component.html"),
            styles: [__webpack_require__(/*! ./submenu.component.scss */ "./src/app/admin/master/JD/submenu/submenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubmenuComponent);
    return SubmenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=master-JD-jd-module.js.map