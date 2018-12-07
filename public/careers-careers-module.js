(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["careers-careers-module"],{

/***/ "./src/app/frontend/careers/careers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/frontend/careers/careers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"col-sm-12 sub_acc\">\n        <div class=\"col-sm-12 careers\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-12\">\n                    <h3 class=\"careers-title\">Careers</h3>\n                </div>\n                <div class=\"col-md-6 col-sm-12\">\n                    <h6 class=\"careers-dicsription\"> We are changing the world.<br> Are you in?</h6>\n                </div>\n            </div>\n        </div>\n        <!--Panel 2-->\n        <div class=\"container tab_container roadmap_container\">\n            <div class=\"row\">\n                <div class=\"coming-soon\">\n                    Coming Soon\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<section class=\"container-fluid  support_page_scontact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                <h2 class=\"customer_experience_main_heading\">Something else?</h2>\n            </div>\n            <div class=\"col-lg-6 col-md-12 col-sm-12\">\n                <p>Didn’t find what you were looking for? Have a suggestion? Want to tell us how much you love us? Shoot\n                    us a message and we’ll get back to you shortly</p>\n                <button class=\"contact-btn\" [routerLink]=\"'/contact-us'\">Contact <i class=\"fa fa-long-arrow-right pull-right\"\n                        aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/careers/careers.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/frontend/careers/careers.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.careers-title {\n  font-size: 50px;\n  font-weight: 300;\n  color: #000;\n  padding: 50px 0px; }\n\nh6.careers-dicsription {\n  font-size: 30px;\n  padding: 40px;\n  color: #666; }\n\n.job-title {\n  background: #fff;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f9e8c3;\n  margin-bottom: 15px; }\n\n.job-title a {\n  font-size: 19px;\n  color: #666;\n  font-weight: 200;\n  width: 100%;\n  display: block;\n  font-weight: 400; }\n\n.job-title i.more-less.fal.fa-plus:before {\n  font-size: 12px;\n  color: #666; }\n\n.panel-body.job-description {\n  padding-left: 0px !important;\n  padding-bottom: 25px !important;\n  font-size: 18px !important;\n  font-weight: 300 !important; }\n\nsection.container-fluid.support_page_scontact {\n  background: #fdb827;\n  padding: 50px 0px;\n  color: #fff; }\n\nh2.customer_experience_main_heading {\n  font-size: 40px; }\n\n.support_page_scontact p {\n  font-size: 20px; }\n\nbutton.contact-btn {\n  padding: 10px 15px;\n  background: #d39e2e;\n  border: none;\n  min-width: 150px;\n  color: #fff;\n  text-align: left;\n  cursor: pointer; }\n\ni.fa.fa-long-arrow-right.pull-right {\n  margin-top: 4px; }\n\n.getin-touch {\n  text-align: right;\n  padding: 25px 0px;\n  font-size: 20px; }\n\n.ustomer_experience_body h6.customer_experience_sub_heading::after {\n  content: \"\";\n  width: 150px;\n  height: 5px;\n  background: #fdb827;\n  display: block;\n  margin: 0px auto;\n  margin-top: 10px;\n  margin-bottom: 25px; }\n\n.coming-soon {\n  font-size: 50px;\n  text-align: center;\n  width: 100%;\n  margin: 15px;\n  padding: 15px;\n  font-weight: bolder; }\n"

/***/ }),

/***/ "./src/app/frontend/careers/careers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/frontend/careers/careers.component.ts ***!
  \*******************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
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


var CareersComponent = /** @class */ (function () {
    function CareersComponent(careerService) {
        this.careerService = careerService;
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.getCareer();
    };
    CareersComponent.prototype.getCareer = function () {
        var _this = this;
        this.careerService.getCareer()
            .subscribe(function (res) {
            _this.careersList = res;
        });
    };
    CareersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-careers',
            template: __webpack_require__(/*! ./careers.component.html */ "./src/app/frontend/careers/careers.component.html"),
            styles: [__webpack_require__(/*! ./careers.component.scss */ "./src/app/frontend/careers/careers.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cms_service__WEBPACK_IMPORTED_MODULE_1__["CmsService"]])
    ], CareersComponent);
    return CareersComponent;
}());



/***/ }),

/***/ "./src/app/frontend/careers/careers.module.ts":
/*!****************************************************!*\
  !*** ./src/app/frontend/careers/careers.module.ts ***!
  \****************************************************/
/*! exports provided: CareersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersModule", function() { return CareersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _careers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./careers.component */ "./src/app/frontend/careers/careers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var router = [
    { path: '', component: _careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"] }
];
var CareersModule = /** @class */ (function () {
    function CareersModule() {
    }
    CareersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router)
            ],
            declarations: [
                _careers_component__WEBPACK_IMPORTED_MODULE_4__["CareersComponent"]
            ]
        })
    ], CareersModule);
    return CareersModule;
}());



/***/ })

}]);
//# sourceMappingURL=careers-careers-module.js.map