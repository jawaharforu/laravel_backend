(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/frontend/products/product-banner/product-banner.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/frontend/products/product-banner/product-banner.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ep_banner\">\n  <div class=\"esep_nr\">\n    <div>\n        <img src=\"../../../assets/img/product.jpg\"/>\n    </div>\n    <section id=\"banner_title\">\n        <div class=\"container\">\n          <div class=\"col-sm-12 bnr_ttl\">\n                <h3>Lorem Ipsum perspiciatis</h3>\n                <p>Lorem ipsum dolor sit amet, consect</p>\n          </div> \n        </div>   \n    </section>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/frontend/products/product-banner/product-banner.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/frontend/products/product-banner/product-banner.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#banner_title {\n  top: 50%; }\n\n.esep_nr img {\n  margin: 0px auto;\n  float: none;\n  display: block; }\n\n@media only screen and (min-width: 1024px) {\n  .esep_nr img {\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/frontend/products/product-banner/product-banner.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/frontend/products/product-banner/product-banner.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductBannerComponent", function() { return ProductBannerComponent; });
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

var ProductBannerComponent = /** @class */ (function () {
    function ProductBannerComponent() {
    }
    ProductBannerComponent.prototype.ngOnInit = function () {
    };
    ProductBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-banner',
            template: __webpack_require__(/*! ./product-banner.component.html */ "./src/app/frontend/products/product-banner/product-banner.component.html"),
            styles: [__webpack_require__(/*! ./product-banner.component.scss */ "./src/app/frontend/products/product-banner/product-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductBannerComponent);
    return ProductBannerComponent;
}());



/***/ }),

/***/ "./src/app/frontend/products/products-features/products-features.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/frontend/products/products-features/products-features.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our_prd_fet\" class=\"our_pf product_f\">\n    <div class=\"container\">\n        <div class=\"container\">\n            <p>Awesome placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora</p>\n            <h3>Our Product Features</h3>\n            <p class=\"feaie_dtl\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta\n                doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora</p>\n        </div>\n    </div>\n</section>\n<section id=\"accordian_pf\" class=\"our_pf_accor\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 our_prd_fet product_fet product_feature hover1\">\n                <div class=\"col-sm-12 page2 head\">\n                    <h5>Product one</h5>\n                </div>\n                <div class=\"col-sm-12 rates\">\n                    <p>₹ <span>100/</span>per item</p>\n                    <p>(up to 100 EMPOLYEE)</p>\n                    <span> + </span>\n                    <p>₹ <span>30/</span>per month</p>\n                    <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\n                </div>\n                <div class=\"col-sm-12 fold_pge_pf\">\n                    <h5 class=\"sub_head1\">All Foundation Features</h5>\n                    <ul>\n                        <li>all good items</li>\n                    </ul>\n                    <div class=\"bye_nw\">\n                        <a class=\"buy1\" [routerLink]=\"['/registration']\">Buy</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4 our_prd_fet product_fet product_feature hover1\">\n                <div class=\"col-sm-12 page2 head\">\n                    <h5>Product two</h5>\n                </div>\n                <div class=\"col-sm-12 rates\">\n                    <p>₹ <span>100/</span>per item</p>\n                    <p>(up to 100 EMPOLYEE)</p>\n                    <span> + </span>\n                    <p>₹ <span>30/</span>per month</p>\n                    <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\n                </div>\n                <div class=\"col-sm-12 fold_pge_pf\">\n                    <h5 class=\"sub_head1\">All Foundation Features</h5>\n                    <ul>\n                        <li>all good items</li>\n                    </ul>\n                    <div class=\"bye_nw\">\n                        <a class=\"buy1\" [routerLink]=\"['/registration']\">Buy</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-4 our_prd_fet product_fet product_feature hover1\">\n                <div class=\"col-sm-12 page2 head\">\n                    <h5>Product three</h5>\n                </div>\n                <div class=\"col-sm-12 rates\">\n                    <p>₹ <span>100/</span>per item</p>\n                    <p>(up to 100 EMPOLYEE)</p>\n                    <span> + </span>\n                    <p>₹ <span>30/</span>per month</p>\n                    <p class=\"per_ad\">PER ADDITIONAL EMPLOYEE</p>\n                </div>\n                <div class=\"col-sm-12 fold_pge_pf\">\n\n                    <h5 class=\"sub_head1\">All Foundation Features</h5>\n                    <ul>\n                        <li>all good items</li>\n                    </ul>\n                    <div class=\"bye_nw\">\n                        <a class=\"buy1\" [routerLink]=\"['/registration']\">Buy</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-12 note\">\n            <p>*Minimum Commitment of 3 months required </p>\n        </div>\n    </div>\n</section>\n<!-- <section id=\"product_tour\">\n    <div class=\"container\">\n        <div class=\"col-sm-12 orange_btn\">\n            <a [routerLink]=\"['/product-tour']\">Product Tour</a>\n        </div>\n    </div>\n</section> -->"

/***/ }),

/***/ "./src/app/frontend/products/products-features/products-features.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/frontend/products/products-features/products-features.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1024px) and (min-width: 768px) {\n  .product_fet {\n    margin: 0px 5px;\n    padding-top: 0px;\n    height: 550px; } }\n"

/***/ }),

/***/ "./src/app/frontend/products/products-features/products-features.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/frontend/products/products-features/products-features.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductsFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsFeaturesComponent", function() { return ProductsFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_frontend_product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/frontend/product/product.service */ "./src/app/admin/frontend/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsFeaturesComponent = /** @class */ (function () {
    function ProductsFeaturesComponent(productService) {
        this.productService = productService;
    }
    ProductsFeaturesComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsFeaturesComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProductByStatus()
            .subscribe(function (res) {
            _this.productList = res.data;
        });
    };
    ProductsFeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-features',
            template: __webpack_require__(/*! ./products-features.component.html */ "./src/app/frontend/products/products-features/products-features.component.html"),
            styles: [__webpack_require__(/*! ./products-features.component.scss */ "./src/app/frontend/products/products-features/products-features.component.scss")]
        }),
        __metadata("design:paramtypes", [_admin_frontend_product_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsFeaturesComponent);
    return ProductsFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/frontend/products/products.component.html":
/*!***********************************************************!*\
  !*** ./src/app/frontend/products/products.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-product-banner></app-product-banner>\n<app-products-features></app-products-features>\n"

/***/ }),

/***/ "./src/app/frontend/products/products.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/frontend/products/products.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/frontend/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/frontend/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/frontend/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/frontend/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/frontend/products/products.module.ts":
/*!******************************************************!*\
  !*** ./src/app/frontend/products/products.module.ts ***!
  \******************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ng-uikit-pro-standard */ "./ng-uikit-pro-standard/esm5/ng-uikit-pro-standard.es5.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/frontend/products/products.component.ts");
/* harmony import */ var _product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-banner/product-banner.component */ "./src/app/frontend/products/product-banner/product-banner.component.ts");
/* harmony import */ var _products_features_products_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-features/products-features.component */ "./src/app/frontend/products/products-features/products-features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var router = [
    { path: '', component: _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"] },
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModulesPro"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(router)
            ],
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                _product_banner_product_banner_component__WEBPACK_IMPORTED_MODULE_5__["ProductBannerComponent"],
                _products_features_products_features_component__WEBPACK_IMPORTED_MODULE_6__["ProductsFeaturesComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map