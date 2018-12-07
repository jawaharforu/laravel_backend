(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-features-module"],{

/***/ "./src/app/frontend/features/features-banner/features-banner.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/frontend/features/features-banner/features-banner.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ep_banner\">\n  <div class=\"esep_nr\">\n    <div>\n      <img src=\"../../../assets/img/product.jpg\" />\n    </div>\n    <section id=\"banner_title\">\n      <div class=\"container\">\n        <div class=\"col-sm-12 bnr_ttl\">\n          <h3>Lorem Ipsum perspiciatis</h3>\n          <p>Lorem ipsum dolor sit amet, consect</p>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/frontend/features/features-banner/features-banner.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/frontend/features/features-banner/features-banner.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/features/features-banner/features-banner.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/frontend/features/features-banner/features-banner.component.ts ***!
  \********************************************************************************/
/*! exports provided: FeaturesBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesBannerComponent", function() { return FeaturesBannerComponent; });
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

var FeaturesBannerComponent = /** @class */ (function () {
    function FeaturesBannerComponent() {
    }
    FeaturesBannerComponent.prototype.ngOnInit = function () {
    };
    FeaturesBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features-banner',
            template: __webpack_require__(/*! ./features-banner.component.html */ "./src/app/frontend/features/features-banner/features-banner.component.html"),
            styles: [__webpack_require__(/*! ./features-banner.component.scss */ "./src/app/frontend/features/features-banner/features-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesBannerComponent);
    return FeaturesBannerComponent;
}());



/***/ }),

/***/ "./src/app/frontend/features/features.component.html":
/*!***********************************************************!*\
  !*** ./src/app/frontend/features/features.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-features-banner></app-features-banner>\n<div class=\"container Features-container\">\n  <div class=\"row \">\n    <div class=\"col-xs-12 col-md-3  order-md-1 Features-sidebar\">\n      <h2 class=\"sidebar_title\"> 360 EPES</h2>\n      <h4 class=\"sidebar_dic\">Accusantium doloremque</h4>\n      <a href=\"https://youtu.be/hVimVzgtD6w\" class=\"video-btn\" target=\"_blank\">Watch video</a>\n      <div class=\"sidebar_menu_title\">Features\n        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\">\n          <i class=\"fa fa-bars visible-xs\"></i>\n        </button>\n      </div>\n      <div class=\"collapse navbar-collapse navbar-left\" id=\"navbar-collapse-1\">\n        <ul class=\"nav nav-pills nav-stacked sidebar_menu\">\n          <li *ngFor=\"let f of featureList; let i=index\" (click)=\"activateClass(f)\" [ngClass]=\"{'active': f.active}\">\n            <a (click)=\"showFeature(i)\">{{f.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-md-9  order-md-2 tab_content\">\n      <div class=\"tab-content\">\n        <div class=\"tab-pane active\" *ngFor=\"let f of featureList; let i=index\">\n          <h1 *ngIf=\"featuresData[i]\">{{f.name}}</h1>\n          <div *ngIf=\"featuresData[i]\" [innerHtml]=\"f.description\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/frontend/features/features.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/frontend/features/features.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.nav.nav-pills.nav-stacked {\n  float: left;\n  display: block; }\n\n.tab-content.col-md-10 {\n  float: right; }\n\nul.nav.nav-pills.nav-stacked.sidebar_menu {\n  float: right; }\n\n.Features-sidebar {\n  text-align: right;\n  margin-bottom: 30px; }\n\nh2.sidebar_title {\n  font-size: 22px;\n  color: #2b9bb8;\n  font-weight: bold; }\n\nh4.sidebar_dic {\n  font-size: 17px;\n  font-weight: 400;\n  color: gray; }\n\n.video-btn {\n  background: #00adef;\n  padding: 5px 20px;\n  color: #fff;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 25px;\n  cursor: pointer; }\n\n.sidebar_menu_title {\n  border-top: 1px solid #ccc;\n  margin-top: 10px;\n  padding-top: 10px;\n  font-size: 18px;\n  font-weight: 400; }\n\nul.sidebar_menu li {\n  line-height: 30px;\n  font-size: 14px; }\n\nul.sidebar_menu li a {\n  color: grey;\n  font-weight: 400; }\n\nul.sidebar_menu li a.active.show {\n  color: #fdb828; }\n\n.tabcontent_title {\n  font-size: 20px;\n  color: #000;\n  font-weight: 400; }\n\n.tab_content {\n  border-left: 1px solid #ccc; }\n\nh3.title-bottom {\n  font-size: 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n  color: grey;\n  margin-top: 30px;\n  margin-bottom: 10px; }\n\n.width-50 p {\n  font-size: 14px; }\n\n.Features-container {\n  padding: 25px 0px; }\n\n.col-sm-6.sub_titels.Features-title {\n  margin-top: 25px;\n  margin-bottom: 15px; }\n\n.col-sm-6.sub_titels.Features-title .col-sm-10 {\n  margin-bottom: 0px; }\n\n.img-responsive.img-center {\n  margin: 0 auto; }\n\n@media screen and (max-width: 767px) {\n  .Features-container {\n    padding: 0px 15px 0px 15px; }\n  .Features-sidebar {\n    text-align: left;\n    margin-top: 30px; }\n  ul.nav.nav-pills.nav-stacked.sidebar_menu {\n    float: left; }\n  i.fa.fa-bars.visible-xs {\n    background: none; }\n  .navbar-toggler {\n    float: right;\n    border: 2px solid #666; } }\n\n@media screen and (min-width: 767px) {\n  .collapse:not(.show) {\n    display: block; }\n  .Features-sidebar\ni.fa.fa-bars.visible-xs {\n    display: none; }\n  .Features-container {\n    padding: 0px 15px 0px 15px;\n    margin-top: 30px; } }\n"

/***/ }),

/***/ "./src/app/frontend/features/features.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/frontend/features/features.component.ts ***!
  \*********************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validations.service */ "./src/app/services/validations.service.ts");
/* harmony import */ var _services_cms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cms.service */ "./src/app/frontend/services/cms.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent(featureService, activatedRoute, _validationsService) {
        this.featureService = featureService;
        this.activatedRoute = activatedRoute;
        this._validationsService = _validationsService;
        this.featuresData = [];
        this.faqid = 0;
    }
    FeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            if (!_this._validationsService.isEmpty(params['faqid'])) {
                _this.faqid = params['faqid'];
            }
        });
        this.getFeatureList();
    };
    FeaturesComponent.prototype.activateClass = function (subModule) {
        subModule.active = !subModule.active;
    };
    FeaturesComponent.prototype.getFeatureList = function () {
        var _this = this;
        this.featureService.getFeatures()
            .subscribe(function (res) {
            _this.featureList = res;
            for (var j = 0; j < res.length; j++) {
                (j === parseInt(_this.faqid)) ? _this.featuresData.push(true) : _this.featuresData.push(false);
            }
        });
    };
    FeaturesComponent.prototype.showFeature = function (i) {
        for (var j = 0; j < this.featuresData.length; j++) {
            (j === i) ? this.featuresData[j] = true : this.featuresData[j] = false;
        }
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/frontend/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/frontend/features/features.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cms_service__WEBPACK_IMPORTED_MODULE_3__["CmsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_validations_service__WEBPACK_IMPORTED_MODULE_2__["ValidationsService"]])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/frontend/features/features.module.ts":
/*!******************************************************!*\
  !*** ./src/app/frontend/features/features.module.ts ***!
  \******************************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.component */ "./src/app/frontend/features/features.component.ts");
/* harmony import */ var _features_banner_features_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features-banner/features-banner.component */ "./src/app/frontend/features/features-banner/features-banner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var router = [
    { path: '', component: _features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"] },
    { path: ':faqid', component: _features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"] }
];
var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router)
            ],
            declarations: [
                _features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"],
                _features_banner_features_banner_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesBannerComponent"]
            ]
        })
    ], FeaturesModule);
    return FeaturesModule;
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
//# sourceMappingURL=features-features-module.js.map