(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["frontend-front-module"],{

/***/ "./src/app/admin/frontend/front.module.ts":
/*!************************************************!*\
  !*** ./src/app/admin/frontend/front.module.ts ***!
  \************************************************/
/*! exports provided: FrontModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontModule", function() { return FrontModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var router = [
    {
        path: '',
        redirectTo: 'testimonial',
        pathMatch: 'full'
    },
    {
        path: 'testimonial',
        loadChildren: './testimonial/testimonial.module#TestimonialModule',
    },
    {
        path: 'product',
        loadChildren: './product/product.module#ProductModule',
    },
    {
        path: 'feature',
        loadChildren: './feature/feature.module#FeatureModule',
    },
    {
        path: 'faq',
        loadChildren: './faq/faq.module#FaqModule',
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule',
    },
    {
        path: 'roadmap',
        loadChildren: './productroadmap/productroadmap.module#ProductroadmapModule',
    },
    {
        path: 'press-release',
        loadChildren: './pressrelease/pressrelease.module#PressreleaseModule',
    },
    {
        path: 'whitepaper',
        loadChildren: './whitepaper/whitepaper.module#WhitepaperModule',
    },
    {
        path: 'career',
        loadChildren: './career/career.module#CareerModule',
    },
    {
        path: 'contactus',
        loadChildren: './contactus/contactus.module#ContactusModule',
    },
    {
        path: 'producttour',
        loadChildren: './producttour/producttour.module#ProducttourModule',
    },
];
var FrontModule = /** @class */ (function () {
    function FrontModule() {
    }
    FrontModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: []
        })
    ], FrontModule);
    return FrontModule;
}());



/***/ })

}]);
//# sourceMappingURL=frontend-front-module.js.map