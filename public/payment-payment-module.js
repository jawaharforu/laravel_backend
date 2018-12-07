(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./src/app/frontend/payment/payment.component.html":
/*!*********************************************************!*\
  !*** ./src/app/frontend/payment/payment.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid signupbg\">\n    <div class=\"container \">\n        <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            </div>\n        </div>\n    </div>\n    <div class=\"container tab_container roadmap_container\">\n        <div class=\"row\">\n            <img src=\"../../../assets/img/coming-soon.png\" class=\"img-responsive\" />\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/frontend/payment/payment.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/frontend/payment/payment.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1024px; }\n\n.nav-link {\n  color: #000 !important;\n  transition: 0.35s; }\n\nh2.title_payment {\n  font-weight: normal;\n  padding-top: 30px;\n  color: gray;\n  font-size: 35px; }\n\np.paymt-disc {\n  font-size: 15px;\n  font-weight: 500;\n  color: gray; }\n\n.pull-right {\n  float: right !important; }\n\n.form_wrapper {\n  padding: 30px;\n  background: lightgray;\n  margin-bottom: 100px;\n  max-width: 400px;\n  position: relative; }\n\n.form_wrapper::before {\n  z-index: 1;\n  content: '';\n  width: 0;\n  height: 0;\n  border-top: 230px solid #4db859;\n  border-right: 280px solid transparent;\n  left: 0px;\n  top: 0;\n  position: absolute; }\n\n.form_wrapper::after {\n  z-index: 1;\n  content: '';\n  width: 0;\n  height: 0;\n  border-bottom: 150px solid #4db859;\n  border-left: 150px solid transparent;\n  right: 0px;\n  bottom: 0px;\n  position: absolute; }\n\nh2.form_title, .payment-form {\n  position: relative;\n  z-index: 9; }\n\nh2.form_title {\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 200; }\n\nh2.form_title span {\n  font-weight: 600;\n  display: block; }\n\n.payment-form .form-control {\n  background: #fff;\n  border-radius: 0;\n  margin-bottom: 10px;\n  font-size: 13px;\n  height: 37px;\n  font-weight: 400;\n  opacity: .9; }\n\n.summery-sec {\n  box-shadow: -5px 0px 4px 0px #dbd0db;\n  padding: 30px;\n  margin-bottom: 15px;\n  max-height: 420px; }\n\np.summery-dic {\n  font-size: 15px; }\n\nh4.summury-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: gray; }\n\n.col-md-6.col-xs-6.label-text {\n  font-size: 14px; }\n\n.col-md-6.col-xs-6.dymanic-value {\n  font-weight: 500;\n  font-size: 15px; }\n\n.summery-sec .row {\n  margin-bottom: 10px; }\n\n.summery-footer {\n  border-top: 1px solid #ccc;\n  margin-top: 20px;\n  padding-top: 20px; }\n\n.title_totleamount {\n  font-size: 15px;\n  color: #000;\n  font-weight: 500;\n  float: left;\n  margin-right: 15px; }\n\n.totleamount {\n  margin-left: 5px;\n  font-size: 20px;\n  float: left;\n  color: #fdb828;\n  font-weight: 600;\n  margin-top: -5px; }\n\n.summery-footer p {\n  clear: both;\n  font-size: 14px;\n  padding-top: 10px; }\n\n@media only screen and (max-width: 768px) {\n  h2.title_payment {\n    margin-top: 70px; } }\n\n@media only screen and (max-width: 767px) {\n  h2.title_payment {\n    font-size: 25px; }\n  p.paymt-disc, p.summery-dic {\n    font-size: 13px; } }\n\n@media only screen and (max-width: 320px) {\n  .summery-sec {\n    max-height: 460px; } }\n\nul.nav.nav-pills.nav-stacked {\n  float: left;\n  display: block; }\n\n.tab-content.col-md-10 {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/frontend/payment/payment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/frontend/payment/payment.component.ts ***!
  \*******************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
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

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/frontend/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/frontend/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/frontend/payment/payment.module.ts":
/*!****************************************************!*\
  !*** ./src/app/frontend/payment/payment.module.ts ***!
  \****************************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment.component */ "./src/app/frontend/payment/payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var router = [
    { path: '', component: _payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"] },
];
var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
            ],
            declarations: [
                _payment_component__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"]
            ]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map