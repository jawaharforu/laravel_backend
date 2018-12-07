(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./src/app/frontend/support/support.component.html":
/*!*********************************************************!*\
  !*** ./src/app/frontend/support/support.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid  support_page_header\">\n    <div class=\"container\">\n        <h2 class=\"col-12 support_page_main_heading\">How can we help you?</h2>\n        <div class=\"col-12\">\n            <form class=\"form-inline md-form mr-auto mb-12\">\n                <input class=\"form-control col-12 col-md-12 col-sm-12 search-input\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\"\n                    [(ngModel)]=\"search\" name=\"search\">\n                <div class=\"search-icon\"> <i class=\"fa fa-search \" aria-hidden=\"true\"></i>\n                </div>\n            </form>\n        </div>\n    </div>\n</section>\n<section>\n    <div class=\"container support-page-body\">\n        <div class=\"row\">\n            <h2 class=\"col-md-7 col-sm-12 support_title\">Video Tutorials</h2>\n            <h6 class=\"col-md-4 col-sm-12 support_links\">All video tutorials</h6>\n        </div>\n        <div class=\"row thumbnailsrow\">\n            <div class=\"col-md-3 col-sm-6 video-thumbnail\"><iframe class=\"img-responsive\" src=\"https://www.youtube.com/embed/fUKpGLk9Ml8\"\n                    frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n            <div class=\"col-md-3 col-sm-6 video-thumbnail\"><iframe class=\"img-responsive\" src=\"https://www.youtube.com/embed/9IIgH0hNtgk\"\n                    frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n            <div class=\"col-md-3 col-sm-6 video-thumbnail\"><iframe class=\"img-responsive\" src=\"https://www.youtube.com/embed/Yde2qMN7uSw\"\n                    frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n            <div class=\"col-md-3 col-sm-6 video-thumbnail\"><iframe class=\"img-responsive\" src=\"https://www.youtube.com/embed/eZ9XoyQ6b1U\"\n                    frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe></div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-sm-12\" *ngFor=\"let f of faqcategoryList | slice:0:2; let i=index\">\n                <h3 class=\"col-title\">{{f.name}}</h3>\n                <ul class=\"support-links\" *ngIf=\"list[f.id]\">\n                    <!--Accordion wrapper-->\n                    <mdb-squeezebox *ngIf=\"list[f.id][0]\" [multiple]=\"false\" aria-multiselectable=\"true\">\n                        <mdb-item [collapsed]=\"true\">\n                            <mdb-item-head> {{list[f.id][0].question}} </mdb-item-head>\n                            <mdb-item-body> {{ list[f.id][0].answer }} </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                    <mdb-squeezebox *ngIf=\"list[f.id][1]\" [multiple]=\"false\" aria-multiselectable=\"true\">\n                        <mdb-item [collapsed]=\"true\">\n                            <mdb-item-head> {{list[f.id][1].question}} </mdb-item-head>\n                            <mdb-item-body> {{ list[f.id][1].answer }} </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                    <mdb-squeezebox *ngIf=\"list[f.id][2]\" [multiple]=\"false\" aria-multiselectable=\"true\">\n                        <mdb-item [collapsed]=\"true\">\n                            <mdb-item-head> {{list[f.id][2].question}} </mdb-item-head>\n                            <mdb-item-body> {{ list[f.id][2].answer }} </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                    <mdb-squeezebox *ngIf=\"list[f.id][3]\" [multiple]=\"false\" aria-multiselectable=\"true\">\n                        <mdb-item [collapsed]=\"true\">\n                            <mdb-item-head> {{list[f.id][3].question}} </mdb-item-head>\n                            <mdb-item-body> {{ list[f.id][3].answer }} </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                    <!--/.Accordion wrapper-->\n                </ul>\n            </div>\n            <div class=\"col-lg-4 col-sm-12\">\n                <h3 class=\"col-title\">FAQ</h3>\n                <ul class=\"support-links\">\n                    <mdb-squeezebox *ngFor=\"let f of faqList | slice:0:4 |filter:search; let i=index\" [multiple]=\"false\" aria-multiselectable=\"true\">\n                        <mdb-item [collapsed]=\"true\">\n                            <mdb-item-head> {{f.question}} </mdb-item-head>\n                            <mdb-item-body> {{ f.answer }} </mdb-item-body>\n                        </mdb-item>\n                    </mdb-squeezebox>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"container-fluid  support_page_scontact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                <h2 class=\"customer_experience_main_heading\">Something else?</h2>\n            </div>\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                <p>Didn’t find what you were looking for? Have a suggestion? Want to tell us how much you love us? Shoot\n                    us a message and we’ll get back to you shortly</p>\n                <button class=\"contact-btn\" [routerLink]=\"['/contact-us']\">Contact <i class=\"fa fa-long-arrow-right pull-right\"\n                        aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/support/support.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/frontend/support/support.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.container-fluid.support_page_header {\n  border-radius: 0px;\n  margin: 0px;\n  padding: 0px;\n  margin-right: -15px;\n  text-align: center;\n  display: block;\n  -ms-flex: none;\n  flex: none;\n  color: #fff;\n  min-height: 150px;\n  /* background: #0079a8;\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, #2b8dd6), color-stop(100%, #0079a8));\n    background: linear-gradient(to bottom, #2b8dd6 0%, #0079a8 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2b8dd6', endColorstr='#0079a8', GradientType=0 );\n    */\n  background: #43b64a;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #43b64a 0%, #159923 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#43b64a', endColorstr='#159923',GradientType=0 );\n  /* IE6-9 */\n  background-image: linear-gradient(to bottom, #43b64a, #3aaf41, #2fa737, #24a02d, #159923);\n  padding-bottom: 25px; }\n\nh2.support_page_main_heading {\n  text-align: left;\n  padding: 34px 15px;\n  font-size: 40px; }\n\ninput.form-control.col-12.col-md-12.col-sm-12 {\n  border: 1px solid #ccc;\n  background: #fff;\n  padding: 10px; }\n\nbutton.btn.aqua-gradient.btn-rounded.btn-sm.my-0.waves-light.col-md-2.col-2 {\n  height: 48px;\n  border-radius: 5px !important;\n  margin-top: -8px !important;\n  background: #fdb827 !important;\n  font-size: 1rem; }\n\n.container.support-page-body {\n  padding-top: 50px; }\n\nh2.col-md-7.col-sm-12.support_title {\n  font-size: 20px; }\n\nh6.col-md-4.col-sm-12.support_links {\n  text-align: right;\n  color: #1783c0;\n  font-size: 16px; }\n\nsection.container-fluid.support_page_scontact {\n  background: #fdb827;\n  padding: 50px 0px; }\n\nsection.container-fluid.support_page_scontact {\n  background: #fdb827;\n  padding: 50px 0px;\n  color: #fff; }\n\nh2.customer_experience_main_heading {\n  font-size: 40px; }\n\n.support_page_scontact p {\n  font-size: 20px; }\n\nbutton.contact-btn {\n  padding: 10px 15px;\n  background: #d39e2e;\n  border: none;\n  min-width: 150px;\n  color: #fff;\n  text-align: left;\n  cursor: pointer; }\n\nsection.container-fluid.support_page_news-letter {\n  padding: 40px 0px;\n  background: #e1eef6; }\n\n.email-submit {\n  height: 48px;\n  border-radius: 5px !important;\n  background: #ffcb5d !important;\n  font-size: 1rem;\n  color: #000;\n  margin-top: -10px !important;\n  box-shadow: none;\n  max-width: 150px; }\n\n.email-input {\n  background: #fff !important;\n  border: 1px solid #ccc !important;\n  height: 35px !important;\n  padding: 5px !important; }\n\nul.support-links {\n  margin: 0px;\n  padding: 0px;\n  margin-bottom: 50px;\n  line-height: 35px; }\n\n.support-links li {\n  list-style: none;\n  margin: 0px;\n  color: #037aac;\n  padding: 7px 0px;\n  border-bottom: 1px solid #e4e2e2;\n  cursor: pointer; }\n\nh3.col-title {\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 20px; }\n\nh3.col-title:hover {\n  color: #037aac;\n  cursor: pointer; }\n\n.video-thumbnail .img-responsive {\n  max-width: 100%; }\n\n.video-thumbnail .img-responsive:hover {\n  opacity: 0.6; }\n\n.thumbnailsrow {\n  margin-bottom: 30px;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 25px; }\n\ni.fa.fa-long-arrow-right.pull-right {\n  margin-top: 4px; }\n\n@media only screen and (max-width: 768px) {\n  section.container-fluid.support_page_header {\n    margin-top: 85px;\n    margin-left: 0; }\n  .support-links li {\n    line-height: normal; }\n  .search-btn {\n    font-size: 15px; } }\n\n@media only screen and (max-width: 767px) {\n  section.container-fluid.support_page_header {\n    margin-top: 68px;\n    margin-left: 0; }\n  h2.support_page_main_heading {\n    font-size: 25px; }\n  .search-input {\n    width: 100%; }\n  button.btn.aqua-gradient.btn-rounded.btn-sm.my-0.waves-light.col-md-2.col-2[_ngcontent-c2] {\n    margin-top: 0px !important; }\n  .search-btn {\n    max-width: 150px;\n    margin: 0px;\n    margin-top: 10px; }\n  h6.col-md-4.col-sm-12.support_links {\n    text-align: left; }\n  .video-thumbnail .img-responsive {\n    margin-bottom: 10px; }\n  ul.support-links {\n    margin-bottom: 0px; }\n  h2.customer_experience_main_heading {\n    font-size: 30px; }\n  .email-submit {\n    margin-top: 0px !important; } }\n\n.search-icon {\n  float: right;\n  width: 20px;\n  position: absolute;\n  right: 0px;\n  color: #7d7979;\n  margin-top: -5px; }\n"

/***/ }),

/***/ "./src/app/frontend/support/support.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/frontend/support/support.component.ts ***!
  \*******************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FaqService } from '../../admin/frontend/faq/services/faq.service';
// import { FaqCategoryService } from '../../admin/frontend/faq/services/faq-category.service';

var SupportComponent = /** @class */ (function () {
    function SupportComponent(faqService, faqCategoryService) {
        this.faqService = faqService;
        this.faqCategoryService = faqCategoryService;
        this.list = [];
    }
    SupportComponent.prototype.ngOnInit = function () {
        this.getCategory();
    };
    SupportComponent.prototype.getCategory = function () {
        var _this = this;
        this.faqCategoryService.getFaqCategory()
            .subscribe(function (res) {
            _this.faqcategoryList = res;
            _this.getFaq();
        });
    };
    SupportComponent.prototype.getFaq = function () {
        var _this = this;
        this.faqService.getFaq()
            .subscribe(function (res) {
            _this.faqList = res;
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var prop = res_1[_i];
                if (_this.list[prop.faqcategoryid] === undefined) {
                    _this.list[prop.faqcategoryid] = [];
                }
                _this.list[prop.faqcategoryid].push(prop);
            }
        });
    };
    SupportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/frontend/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.scss */ "./src/app/frontend/support/support.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cms_service__WEBPACK_IMPORTED_MODULE_1__["CmsService"],
            _services_cms_service__WEBPACK_IMPORTED_MODULE_1__["CmsService"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/frontend/support/support.module.ts":
/*!****************************************************!*\
  !*** ./src/app/frontend/support/support.module.ts ***!
  \****************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support.component */ "./src/app/frontend/support/support.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var router = [
    { path: '', component: _support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"] }
];
var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [
                _support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"]
            ]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ })

}]);
//# sourceMappingURL=support-support-module.js.map