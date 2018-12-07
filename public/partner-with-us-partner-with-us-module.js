(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partner-with-us-partner-with-us-module"],{

/***/ "./src/app/frontend/partner-with-us/partner-with-us.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/frontend/partner-with-us/partner-with-us.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"partner-page-body\">\n  <div class=\"container\">\n    <h3 class=\"partner-page-heading\">Lorem ipsum dolor sit amet </h3>\n    <div class=\"list-container\">\n      <ul class=\"Partnerlist\">\n        <li class=\"list-item\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur\n          quae quaerat ad velit ab.</li>\n        <li class=\"list-item\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur\n          quae quaerat ad velit ab.</li>\n        <li class=\"list-item\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur\n          quae quaerat ad velit ab.</li>\n        <li class=\"list-item\"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur\n          quae quaerat ad velit ab.</li>\n      </ul>\n    </div>\n  </div>\n</section>\n<div class=\"clearfix\"></div>\n<section class=\"partner-start-button\">\n  <div class=\"container\">\n    <h5 class=\"Partner-withus-label\">Partner with us now</h5>\n    <div class=\"Partner-withus-btn\" [routerLink]=\"['/product-tour']\">GET STARTED NOW</div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/partner-with-us/partner-with-us.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/frontend/partner-with-us/partner-with-us.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3.partner-page-heading {\n  font-size: 30px;\n  text-align: center;\n  font-weight: 400;\n  font-style: normal;\n  margin-bottom: 40px;\n  margin-top: 25px; }\n\nul.Partnerlist {\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\nli.list-item {\n  float: left;\n  width: 50%;\n  padding: 1.5% 2.5%;\n  font-size: 17px; }\n\nli.list-item::before {\n  font-family: 'FontAwesome';\n  content: '\\f058';\n  margin: 0 5px 0 -30px;\n  color: #86c06a;\n  font-size: 22px;\n  position: relative;\n  top: 12px; }\n\nsection.partner-start-button {\n  background: #ffa500;\n  padding: 25px 0px;\n  text-align: center;\n  color: #000;\n  margin-top: 30px; }\n\nh5.Partner-withus-label {\n  font-size: 30px;\n  font-weight: 400;\n  color: #fff; }\n\n.Partner-withus-btn {\n  max-width: 200px;\n  margin: 0px auto;\n  background: #fff;\n  line-height: 40px;\n  border: 1px solid #fff;\n  border-radius: 5px;\n  font-weight: 400;\n  cursor: pointer;\n  color: gray; }\n\n@media only screen and (max-width: 768px) {\n  .partner-page-body {\n    margin-top: 74px; }\n  h3.partner-page-heading {\n    font-size: 30px;\n    margin-bottom: 0px !important;\n    margin-top: 0px;\n    padding-top: 20px; } }\n\n@media only screen and (max-width: 767px) {\n  h3.partner-page-heading {\n    font-size: 20px;\n    margin-bottom: 0px !important;\n    margin-top: 0px;\n    padding-top: 20px; }\n  .partner-page-body {\n    margin-top: 55px; }\n  li.list-item {\n    float: none;\n    width: 100%;\n    padding-left: 30px; }\n  li.list-item::before {\n    margin: 0 5px 0 -30px; } }\n"

/***/ }),

/***/ "./src/app/frontend/partner-with-us/partner-with-us.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/frontend/partner-with-us/partner-with-us.component.ts ***!
  \***********************************************************************/
/*! exports provided: PartnerWithUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerWithUsComponent", function() { return PartnerWithUsComponent; });
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

var PartnerWithUsComponent = /** @class */ (function () {
    function PartnerWithUsComponent() {
    }
    PartnerWithUsComponent.prototype.ngOnInit = function () {
    };
    PartnerWithUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partner-with-us',
            template: __webpack_require__(/*! ./partner-with-us.component.html */ "./src/app/frontend/partner-with-us/partner-with-us.component.html"),
            styles: [__webpack_require__(/*! ./partner-with-us.component.scss */ "./src/app/frontend/partner-with-us/partner-with-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnerWithUsComponent);
    return PartnerWithUsComponent;
}());



/***/ }),

/***/ "./src/app/frontend/partner-with-us/partner-with-us.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/frontend/partner-with-us/partner-with-us.module.ts ***!
  \********************************************************************/
/*! exports provided: PartnerWithUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerWithUsModule", function() { return PartnerWithUsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _partner_with_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partner-with-us.component */ "./src/app/frontend/partner-with-us/partner-with-us.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var router = [
    { path: '', component: _partner_with_us_component__WEBPACK_IMPORTED_MODULE_4__["PartnerWithUsComponent"] }
];
var PartnerWithUsModule = /** @class */ (function () {
    function PartnerWithUsModule() {
    }
    PartnerWithUsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router)
            ],
            declarations: [
                _partner_with_us_component__WEBPACK_IMPORTED_MODULE_4__["PartnerWithUsComponent"]
            ]
        })
    ], PartnerWithUsModule);
    return PartnerWithUsModule;
}());



/***/ })

}]);
//# sourceMappingURL=partner-with-us-partner-with-us-module.js.map