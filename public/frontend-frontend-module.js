(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-frontend-module"],{

/***/ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/frontend/footer/footer-bottom/footer-bottom.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\t<div id=\"copy-right\">\n\t<div class=\"container\">\n\t    <div class=\"col-sm-12 cpy_ryt\">\n\t        <div class=\"col-sm-4\">\n\t            <p>@2018 360 EPES. All rights reserved</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<p>Using Representative Images</p>\t\n\t\t\t\t</div>\n\t        <div class=\"col-sm-4 cpy-ryt-hlf\">\n\t            <p><a href=\"#\">Privacy Policy | Terms of Service | Security & Compliance | Sitemap</a></p>\n\t        </div>\n\t    </div>\n\t</div>  \n</div>\n</footer>"

/***/ }),

/***/ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/frontend/footer/footer-bottom/footer-bottom.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/frontend/footer/footer-bottom/footer-bottom.component.ts ***!
  \**************************************************************************/
/*! exports provided: FooterBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBottomComponent", function() { return FooterBottomComponent; });
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

var FooterBottomComponent = /** @class */ (function () {
    function FooterBottomComponent() {
    }
    FooterBottomComponent.prototype.ngOnInit = function () {
    };
    FooterBottomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-bottom',
            template: __webpack_require__(/*! ./footer-bottom.component.html */ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.html"),
            styles: [__webpack_require__(/*! ./footer-bottom.component.scss */ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterBottomComponent);
    return FooterBottomComponent;
}());



/***/ }),

/***/ "./src/app/frontend/footer/footer-top/footer-top.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/frontend/footer/footer-top/footer-top.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n    <div class=\"container\">\n        <div class=\"col-sm-12 footer-head\">\n            <div class=\"col-sm-3 footer_log\">\n                <img src=\"../../../assets/img/epes-logo-footer.png\" alt=\"wait\">\n            </div>\n            <div class=\"col-sm-2\">\n                <h5>PRODUCTS</h5>\n            </div>\n            <div class=\"col-sm-2\">\n                <h5>COMPANY</h5>\n            </div>\n            <div class=\"col-sm-5\" style=\"padding-left: 50px;\">\n                <h5>CONTACT DETAILS</h5>\n            </div>\n        </div>\n        <div class=\"col-sm-12 details\">\n            <div class=\"col-sm-3 img-dtl detail\">\n                <p>\n                    360 you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly\n                    through the hotel website, or via the hotel reservation desk. This is our best rate guarantee to you.\n                    We cannot guarantee that you'll receive \"\n                </p>\n            </div>\n            <div class=\"col-sm-2 product-dtl detail\">\n                <ul>\n                    <li><a [routerLink]=\"['/']\">360 EPES</a></li>\n                    <li><a [routerLink]=\"['/features']\">Features</a></li>\n                    <li><a [routerLink]=\"['/products']\">Pricing</a></li>\n                </ul>\n            </div>\n            <div class=\"col-sm-2 company-detail detail\">\n                <ul>\n                    <li><a [routerLink]=\"['/about-us']\">About</a></li>\n                    <!-- <li><a [routerLink]=\"['/careers']\">Careers</a></li> -->\n                    <!--   <li><a [routerLink]=\"['/partner-with-us']\">Partner with Us</a></li>-->\n                    <!-- <li><a [routerLink]=\"['/#']\">Partner with Us</a></li> -->\n                    <li><a [routerLink]=\"['/contact-us']\">Contact Us</a></li>\n                    <li><a [routerLink]=\"['/faqs']\">FAQ</a></li>\n                    <!-- <li><a [routerLink]=\"['/blog']\">Blog</a></li> -->\n                </ul>\n            </div>\n            <div class=\"col-sm-5 contact detail\" style=\"padding-left: 20px;\">\n                <div class=\"col-sm-12 contact-info\">\n                    <div class=\"col-sm-6\">\n                        <p>For sales</p>\n                        <ul class=\"bt-contact-info\">\n                            <li><i class=\"fa fa-map-marker\"></i>&nbsp; Address: 123 Main Street,</li>\n                            <li><i class=\"fa fa-phone\"></i>&nbsp; (800) 0123 4567 890</li>\n                            <li><i class=\"fa fa-envelope\"></i>&nbsp; Support@My.website.com</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <p>For Support</p>\n                        <ul class=\"bt-contact-info\">\n                            <li><i class=\"fa fa-phone\"></i>&nbsp; (800) 0123 4567 890</li>\n                            <li><i class=\"fa fa-envelope\"></i>&nbsp; Support@My.website.com</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/frontend/footer/footer-top/footer-top.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/frontend/footer/footer-top/footer-top.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/footer/footer-top/footer-top.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/frontend/footer/footer-top/footer-top.component.ts ***!
  \********************************************************************/
/*! exports provided: FooterTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterTopComponent", function() { return FooterTopComponent; });
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

var FooterTopComponent = /** @class */ (function () {
    function FooterTopComponent() {
    }
    FooterTopComponent.prototype.ngOnInit = function () {
    };
    FooterTopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-top',
            template: __webpack_require__(/*! ./footer-top.component.html */ "./src/app/frontend/footer/footer-top/footer-top.component.html"),
            styles: [__webpack_require__(/*! ./footer-top.component.scss */ "./src/app/frontend/footer/footer-top/footer-top.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterTopComponent);
    return FooterTopComponent;
}());



/***/ }),

/***/ "./src/app/frontend/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/frontend/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-overall\">\n\t<footer id=\"footer\">\n\t\t<div class=\"footer-top\">\n\t\t\t<app-footer-top></app-footer-top>\n\t\t</div>\n\t\t<div class=\"footer-bottom\">\n\t\t\t<app-footer-bottom></app-footer-bottom>\n\t\t</div>\n\t</footer>\n</div>"

/***/ }),

/***/ "./src/app/frontend/footer/footer.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/frontend/footer/footer.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/frontend/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/frontend/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/frontend/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/frontend/frontend.component.html":
/*!**************************************************!*\
  !*** ./src/app/frontend/frontend.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navheader></app-navheader>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/frontend/frontend.component.scss":
/*!**************************************************!*\
  !*** ./src/app/frontend/frontend.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/frontend.component.ts":
/*!************************************************!*\
  !*** ./src/app/frontend/frontend.component.ts ***!
  \************************************************/
/*! exports provided: FrontendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendComponent", function() { return FrontendComponent; });
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

var FrontendComponent = /** @class */ (function () {
    function FrontendComponent() {
    }
    FrontendComponent.prototype.ngOnInit = function () {
    };
    FrontendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-frontend',
            template: __webpack_require__(/*! ./frontend.component.html */ "./src/app/frontend/frontend.component.html"),
            styles: [__webpack_require__(/*! ./frontend.component.scss */ "./src/app/frontend/frontend.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FrontendComponent);
    return FrontendComponent;
}());



/***/ }),

/***/ "./src/app/frontend/frontend.module.ts":
/*!*********************************************!*\
  !*** ./src/app/frontend/frontend.module.ts ***!
  \*********************************************/
/*! exports provided: FrontendModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontendModule", function() { return FrontendModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _frontend_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontend.routing */ "./src/app/frontend/frontend.routing.ts");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navheader/navheader.component */ "./src/app/frontend/navheader/navheader.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/frontend/footer/footer.component.ts");
/* harmony import */ var _footer_footer_top_footer_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer-top/footer-top.component */ "./src/app/frontend/footer/footer-top/footer-top.component.ts");
/* harmony import */ var _footer_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer-bottom/footer-bottom.component */ "./src/app/frontend/footer/footer-bottom/footer-bottom.component.ts");
/* harmony import */ var _frontend_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontend.component */ "./src/app/frontend/frontend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var FrontendModule = /** @class */ (function () {
    function FrontendModule() {
    }
    FrontendModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _frontend_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _navheader_navheader_component__WEBPACK_IMPORTED_MODULE_5__["NavheaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _footer_footer_top_footer_top_component__WEBPACK_IMPORTED_MODULE_7__["FooterTopComponent"],
                _footer_footer_bottom_footer_bottom_component__WEBPACK_IMPORTED_MODULE_8__["FooterBottomComponent"],
                _frontend_component__WEBPACK_IMPORTED_MODULE_9__["FrontendComponent"]
            ]
        })
    ], FrontendModule);
    return FrontendModule;
}());



/***/ }),

/***/ "./src/app/frontend/frontend.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/frontend/frontend.routing.ts ***!
  \**********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frontend_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frontend.component */ "./src/app/frontend/frontend.component.ts");


var routes = [
    {
        path: '',
        component: _frontend_component__WEBPACK_IMPORTED_MODULE_1__["FrontendComponent"],
        children: [
            { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: 'products', loadChildren: './products/products.module#ProductsModule' },
            { path: 'faqs', loadChildren: './faqs/faqs.module#FaqsModule' },
            { path: 'product-tour', loadChildren: './product-tour/product-tour.module#ProductTourModule' },
            { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
            { path: 'blog', loadChildren: './blogs/blogs.module#BlogsModule' },
            { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },
            // { path: 'registration/:productid', loadChildren: './registration/registration.module#RegistrationModule' },
            { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
            { path: 'customer-experience', loadChildren: './customer-experience/customer-experience.module#CustomerExperienceModule' },
            { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
            { path: 'support-services', loadChildren: './support/support.module#SupportModule' },
            { path: 'partner-with-us', loadChildren: './partner-with-us/partner-with-us.module#PartnerWithUsModule' },
            { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
            { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' }
        ]
    }
];
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/frontend/navheader/navheader.component.html":
/*!*************************************************************!*\
  !*** ./src/app/frontend/navheader/navheader.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-light bg-faded nav_bd_poll_voted\">\n    <logo>\n        <a class=\"navbar-brand\" [routerLink]=\"['']\">\n            <img src=\"../../assets/img/epes-logo.png\" />\n        </a>\n    </logo>\n    <links>\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/products']\" class=\"nav-link waves-light\" mdbWavesEffect>Products<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <!-- <li class=\"nav-item\">\n                <a [routerLink]=\"['/about-us']\" class=\"nav-link waves-light\" mdbWavesEffect>Company</a>\n            </li> -->\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/customer-experience']\" class=\"nav-link waves-light\" mdbWavesEffect>Customer Experience</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/support-services']\" class=\"nav-link waves-light\" mdbWavesEffect>Support & Services</a>\n            </li>\n            <li class=\"nav-item\">\n                <a [routerLink]=\"['/faqs']\" class=\"nav-link waves-light\" mdbWavesEffect>FAQs</a>\n            </li>\n            <li class=\"nav-item login_all_poll\">\n                <span> <a href=\"/ng/ver1/login\" class=\"nav-link\">Company Login</a></span>\n            </li>\n        </ul>\n    </links>\n</mdb-navbar>"

/***/ }),

/***/ "./src/app/frontend/navheader/navheader.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/frontend/navheader/navheader.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login_all_poll span {\n  float: left; }\n\nspan.divaider {\n  margin-top: 8px; }\n\n.login_all_poll span a:hover {\n  text-decoration: underline; }\n\n.navbar.navbar-light .breadcrumb .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link, .navbar.navbar-light .navbar-nav .nav-item .nav-link:hover {\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/frontend/navheader/navheader.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/frontend/navheader/navheader.component.ts ***!
  \***********************************************************/
/*! exports provided: NavheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavheaderComponent", function() { return NavheaderComponent; });
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

var NavheaderComponent = /** @class */ (function () {
    function NavheaderComponent() {
    }
    NavheaderComponent.prototype.ngOnInit = function () {
    };
    NavheaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navheader',
            template: __webpack_require__(/*! ./navheader.component.html */ "./src/app/frontend/navheader/navheader.component.html"),
            styles: [__webpack_require__(/*! ./navheader.component.scss */ "./src/app/frontend/navheader/navheader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavheaderComponent);
    return NavheaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=frontend-frontend-module.js.map